class TocasCarousel
    $name:
        'carousel'
        
    $options:
        interval   : 4000               # 幻燈片換到下一張的毫秒相隔時間。
        autoplay   : true               # 是否要自動播放。
        indicator  :                    # 指示器選項。
            style     : 'rounded'       # 指示器的外觀，`round` 為圓角矩形，`circular` 為圓形。
            navigable : true            # 是否可供轉跳。
            overlapped: true            # 是否疊加在幻燈片上。
        control:                        # 控制器選項。
            edged     : false
            overlapped: true            # 是否疊加在幻燈片上。
            icon:                       # 圖示選項。
                left : 'chevron left'   # 左圖示的圖示名稱。
                right: 'chevron right'  # 右圖示的圖示名稱
        onChange: ->                    # 當幻燈片變更時所呼叫的函式。

    $opts: ({$this, $delay, $module}, options) ->
        config = {
            interval : $this.data 'interval'
            autoplay : $this.data 'autoplay'
            indicator: $this.data 'indicator'
            control  : $this.data 'control'
            onChange : $this.data 'onChange'
            ...options
        }

        $module::_init {$this, $delay, $module}, config

    $init: ({$this, $delay, $module, $options}) ->
        config = {
            interval: parseInt $this.attr('data-interval')
            autoplay: $this.attr('data-autoplay') is 'true'
            ...$options
        }

        if $this.attr('data-indicator')
            config.indicator = false
        if $this.attr('data-indicator-style')
            config.indicator.style = $this.attr('data-indicator-style')
        if $this.attr('data-indicator-navigable')
            config.indicator.navigable = $this.attr('data-indicator-navigable') is 'true'
        if $this.attr('data-indicator-overlapped')
            config.indicator.overlapped = $this.attr('data-indicator-overlapped') is 'true'

        if $this.attr('data-control')
            config.control = false
        if $this.attr('data-control-overlapped')
            config.control.overlapped = $this.attr('data-control-overlapped') is 'true'
        if $this.attr('data-control-icon-left')
            config.control.icon.left = $this.attr('data-control-icon-left')
        if $this.attr('data-control-icon-right')
            config.control.icon.left = $this.attr('data-control-icon-right')

        $module::_init {$this, $delay, $module}, config

    # 初始化幻燈片。
    _init: ({$this, $delay, $module}, {interval, autoplay, indicator, control, onChange}) ->
        # 建立項目容器，用來包裹所有的幻燈片。
        $items = $selector('<div>').addClass 'items'
        # 取得使用者已經擺置的幻燈片。
        $item = $this.find(':scope > .item')
        # 給第一個幻燈片啟用樣式。
        $item.eq(0).addClass 'active'
        # 將這些幻燈片移動到項目容器中。
        $items.append($item)
        # 清除原先幻燈片的所有內容。
        $this.html ''

        # 如果有控制元素設置。
        if control isnt false
            overlapped = if control.overlapped then 'overlapped ' else ''
            # 建立控制元素，並且加上指定的圖示。
            $control = $selector('<div>').addClass(overlapped + 'controls').html """
                <a href="#!" class="left"><i class="#{control.icon.left} icon"></i></a>
                <a href="#!" class="right"><i class="#{control.icon.right} icon"></i></a>
            """
            # 移動到幻燈片容器中。
            $this.append $control
            # 給控制按鈕加上控制事件。
            $this.find('.controls > .left').on 'click', ->
                $module::_previous {$this, $delay, $module}
            $this.find('.controls > .right').on 'click', ->
                $module::_next {$this, $delay, $module}

        # 將幻燈片容器在控制元素之後插入，
        # 這樣才能透過控制元素的樣式來取決幻燈片容器的樣式。
        # CSS Selector 的 `x + x`。
        $this.append $items

        # 如果有指示器設置。
        if indicator isnt false
            overlapped = if indicator.overlapped         then 'overlapped' else ''
            navigable  = if indicator.navigable          then 'navigable'  else ''
            style      = if indicator.style is 'rounded' then ''           else 'circular'
            # 建立指示器元素，並且決定是否可供導覽點按。
            $indicators = $selector('<div>').addClass "#{navigable} #{overlapped} #{style} indicators"

            # 替幻燈片產生指示器的元素。
            for index in [1..$item.length]
                active = if index is 1 then ' active' else ''
                $indicators.append $selector('<div>').addClass "#{active} item"
            # 如果可供導覽點按，則綁定點擊事件。
            if indicator.navigable
                $indicators.find('.item').each (_, index) ->
                    $selector(@).on 'click', -> $module::_jump({$this, $delay, $module}, index)
            # 移動到幻燈片容器中。
            $this.append $indicators

        # 初始化索引為零。
        $this.data 'index', 0
        # 如果要自動播放的話則建立計時器。
        if autoplay
            $module::_play {$this, $delay, $module}

    # 向特定方向移動幻燈片。
    _slide: ({$this, $delay}, direction, $nextElement) ->
        # 如果正在滑動中，則取消本次的指令。
        if $this.data('sliding') is true
            return

        # 標記幻燈片正在滑動中，避免重複執行發生問題。
        $this.data 'sliding', true
        # 取得幻燈片移動的方向該往左邊還是右邊。
        movingDirection = if direction is 'next' then 'left' else 'right'
        # 取得目前正在顯示的幻燈片。
        $current = $this.find('.items > .item.active')

        # 依照方向來決定下一個幻燈片是哪個元素，如果沒有下個元素則為最後（或第一個），那麼就取得最邊緣的那個元素。
        if $nextElement isnt undefined
            $next = $nextElement
        else if direction is 'next'
            $next = $current.next()
            $next = if $next.length is 0 then $this.find('.items > .item:first-child') else $next
        else
            $next = $current.prev()
            $next = if $next.length is 0 then $this.find('.items > .item:last-child') else $next

        # 移除所有指示器的啟用樣式，然後替指定指示器加上已啟用樣式。
        $this.find('.indicators > .item').removeClass('active').eq($next.index()).addClass('active')

        # 替下一個幻燈片加上順序。
        $next.addClass(direction)
        # 稍微等待一下。
        await $delay(30)
        # 替目前的幻燈片加上移動效果。
        $current.addClass("moving #{movingDirection}")
        # 我們同時也移動下一個幻燈片進來。
        $next.addClass("moving #{movingDirection}")

        # 設置新的索引。
        index = $next.index()
        $this.data 'index', $next.index()
        # 呼叫指定事件。
        $this.data('onChange').call($this.get(), index)

        # 當目前舊的幻燈片移動完畢時。
        $current.one 'transitionend', ->
            # 順便移除下個幻燈片的移動效果，並且加上已啟用樣式。
            $next.removeClass("moving #{movingDirection} #{direction}").addClass 'active'
            # 同時移除這個舊的幻燈片樣式。
            $current.removeClass "active moving #{movingDirection} #{direction}"
            # 滑動已結束。
            $this.data 'sliding', false

    # 移動到下一個幻燈片。
    _next: ({$this, $delay, $module}) ->
        $module::_slide {$this, $delay}, 'next'

    # 移動到上個幻燈片。
    _previous: ({$this, $delay, $module}) ->
        $module::_slide {$this, $delay}, 'previous'

    # 暫停幻燈片的自動輪播。
    _pause: ({$this, $module}) ->
        # 移除這個計時器。
        clearInterval $this.data 'autoplayTimer'
        $this.removeData 'autoplayTimer'

    # 繼續幻燈片的自動輪播。
    _play: ({$this, $delay, $module}) ->
        # 如果已經有設置計時器就表示正在播放，離開。
        if $this.data('autoplayTimer') isnt undefined
            return
        # 先換下一張。
        # $module::_next {$this, $delay, $module}
        # 建立並保存這個計時器，之後才能清除。
        $this.data 'autoplayTimer', setInterval(->
            # 時間到了就呼叫切換下一張的函式。
            $module::_next {$this, $delay, $module}
        , $this.data('interval'))

    # 跳到指定的幻燈片。
    _jump: ({$this, $delay, $module}, index) ->
        $item   = $this.find('.items > .item')
        $eqItem = $item.eq(index)
        current = $this.data 'index'
        # 如果沒有指定的幻燈片索引則離開。
        if $eqItem.length is 0
            return
        else
            # 比對目前的索引還有準備跳往的索引來決定應該往又還是往左滑。
            direction = if index > current then 'next' else 'previous'
            $module::_slide {$this, $delay}, direction, $eqItem

    $methods:
        # 開始播放幻燈片。
        play: ({$this, $delay, $module}) ->
            $module::_play {$this, $delay, $module}
            ts.fn

        # 暫停幻燈片。
        pause: ({$this, $module}) ->
            $module::_pause {$this, $module}
            ts.fn

        # 切換下一個幻燈片。
        next: ({$this, $delay, $module}) ->
            $module::_next {$this, $delay, $module}
            ts.fn

        # 切換上一個幻燈片。
        previous: ({$this, $delay, $module}) ->
            $module::_previous {$this, $delay, $module}
            ts.fn

        # 跳到指定的幻燈片。
        'slide to': ({$this, $delay, $module}, to) ->
            $module::_jump {$this, $delay, $module}, to
            ts.fn

        # 取得目前幻燈片的索引。
        'get index': ({$this}) ->
            $this.data 'index'

new ts TocasCarousel