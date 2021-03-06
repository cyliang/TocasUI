// Generated by CoffeeScript 2.0.0-beta4
// Snackbar

// 點心條。
var Snackbar;

Snackbar = (function() {
  class Snackbar {
    constructor() {
      // 元素初始化函式。
      this.init = this.init.bind(this);
      // 元素摧毀函式。
      this.destroy = this.destroy.bind(this);
      // Show

      // 顯示一個點心條，並且先關閉一個正在顯示的點心條。
      this.show = this.show.bind(this);
      // Hide

      // 隱藏一個點心條，並以指定的動作呼叫指定的回呼函式。
      this.hide = this.hide.bind(this);
      // 模組可用的方法。
      this.methods = this.methods.bind(this);
    }

    init() {
      // 尋找動作按鈕並且監聽點擊事件。
      this.$this.find(this.selector.ACTION).on('click.snackbar', () => {
        return this.hide('action');
      });
      // 如果這個點心條會在滑鼠移至時避免關閉的話，
      // 就監聽滑鼠的進入和移出事件。
      if (this.$this.data('hoverStay') === true) {
        this.$this.on('mouseenter.snackbar', () => {
          return this.$this.attr('data-mouseon', 'true');
        });
        this.$this.on('mouseleave.snackbar', () => {
          return this.$this.attr('data-mouseon', 'false');
        });
      }
      return ts.fn;
    }

    destroy() {
      // 移除動作按鈕的點擊監聽事件。
      this.$this.find(this.selector.ACTION).off('click.snackbar');
      // 移除滑鼠的進入和移出事件。
      return this.$this.off('mouseenter.snackbar').off('mouseleave.snackbar');
    }

    async show() {
      var $action, $content, action, content, timer;
      // 如果有已開啟的點心條則關閉它。
      if ($selector(this.selector.ACTIVE_SNACKBAR).length !== 0) {
        ts(this.selector.ACTIVE_SNACKBAR).snackbar('hide');
        await this.delay(this.duration);
      }
      // 移除自身的點心條計時器。
      this.$this.removeTimer('snackbar');
      // 稍微等一下。
      await this.delay();
      // 套用啟用動畫效果，在動畫結束後移除動畫樣式。
      this.$this.addClass(`${this.className.ACTIVE} ${this.className.ANIMATING} ${this.$this.data('position')}`).off('animationend').one('animationend', () => {
        return this.$this.removeClass(this.className.ANIMATING);
      }).emulate('animationend', this.duration).attr('data-mouseon', 'false');
      // 替換點心條的 HTML 內容。
      content = this.$this.data('content');
      if (content !== '') {
        $content = this.$this.find(this.selector.CONTENT);
        $content.html(this.$this.data('content'));
      }
      // 取得動作設置資料。
      action = this.$this.data('action');
      $action = this.$this.find(this.selector.ACTION);
      // 替換動作按鈕的文字。
      if (((action != null ? action.text : void 0) != null) && action.text !== '') {
        $action.html(action.text);
      }
      // 替換動作按鈕的語意。
      if ((action != null ? action.emphasis : void 0) && action.emphasis !== '') {
        $action.removeClass(`${this.className.PRIMARY} ${this.className.INFO} ${this.className.WARNING} ${this.className.NEGATIVE} ${this.className.POSITIVE}`).addClass(action.emphasis);
      }
      // 如果延遲時間不是無限，那麼就透過計時器來關閉點心條。
      if (this.$this.data('delay') !== 0) {
        // 保存一個計時器物件，這樣才能不斷地重複利用它。
        timer = {
          name: 'snackbar',
          callback: async() => {
            // 如果時間到了，但是使用者的滑鼠還在點心條上，而且使用者又希望避免自動消失。
            if (this.$this.attr('data-mouseon') === 'true' && this.$this.data('hoverStay') === true) {
              // 稍後一下讓計時器被消除。
              await this.delay();
              // 不斷地重設這個計時器，直到使用者滑鼠移開為止才繼續。
              this.$this.setTimer(timer);
              return;
            }
            // 隱藏此點心條，並以「忽略」模式進行。
            return this.hide('ignore');
          },
          interval: this.$this.data('delay'),
          visible: true
        };
        // 初始化一個延遲計時器，時間到了就會隱藏此點心條。
        return this.$this.setTimer(timer);
      }
    }

    hide(type) {
      // 如果點心條沒有被啟用，就不需要隱藏。
      if (!this.$this.hasClass(this.className.ACTIVE)) {
        return;
      }
      // 先移除點心條的自動隱藏計時器。
      this.$this.removeTimer('snackbar');
      // 依照動作型態呼叫指定的回呼函式。
      switch (type) {
        // 當是被按下動作按鈕關閉時，呼叫動作回呼函式。
        case 'action':
          if (this.$this.data('onAction').call(this.$this.get()) === false) {
            return;
          }
          break;
        // 當被忽略時，呼叫忽略回呼函式。
        case 'ignore':
          this.$this.data('onIgnore').call(this.$this.get());
      }
      // 無論如何都呼叫關閉回呼函式。
      this.$this.data('onClose').call(this.$this.get());
      // 移除啟用狀態，執行動畫並在之後移除相關樣式。
      return this.$this.removeClass(this.className.ACTIVE).addClass(this.className.ANIMATING).one('animationend', () => {
        return this.$this.removeClass(`${this.className.ANIMATING} ${this.className.TOP} ${this.className.LEFT} ${this.className.BOTTOM} ${this.className.RIGHT}`);
      }).emulate('animationend', this.duration);
    }

    methods() {
      return {
        // Toggle

        // 切換點心條的顯示、隱藏。
        toggle: () => {
          if (this.$this.hasClass(this.className.ACTIVE)) {
            this.hide();
          } else {
            this.show();
          }
          return ts.fn;
        },
        // Show

        // 顯示一個已存在的點心條。
        show: () => {
          this.show();
          return ts.fn;
        },
        // Hide

        // 隱藏一個已存在的點心條。
        hide: () => {
          this.hide();
          return ts.fn;
        },
        // Is Visible

        // 回傳一個點心條是否可見的布林值。
        'is visible': () => {
          return this.$this.hasClass(this.className.ACTIVE);
        },
        // Is Hidden

        // 回傳一個點心條是否正在隱藏中的布林值。
        'is hidden': () => {
          return !this.$this.hasClass(this.className.ACTIVE);
        }
      };
    }

  };

  // 模組名稱。
  Snackbar.module = 'snackbar';

  // 模組屬性。
  Snackbar.prototype.props = {
    // 主要內容文字。
    content: '',
    // 動作設置。
    action: {
      // 動作按鈕的文字。
      text: '',
      // 動作按鈕的語意。
      emphasis: ''
    },
    // 當點心條關閉時所會呼叫的回呼函式。
    onClose: () => {},
    // 當點心條因為放置而自動關閉時所會呼叫的回呼函式。
    onIgnore: () => {},
    // 當動作按鈕被按下時所呼叫的回呼函式。
    onAction: () => {
      return true;
    },
    // 點心條到自動消失所耗費的毫秒時間，如果設為 `0` 則表示永不自動消失。
    delay: 3500,
    // 點心條可否手動忽略，例如：滑開。
    // closable : true
    // 點心條出現的螢幕位置，如：`top left`、`top right`、`bottom left`、`bottom right`
    position: 'bottom left',
    // 點心條是否應該在滑鼠指向時，持續顯示避免自動消失。
    hoverStay: true
  };

  // 動畫效果的毫秒時間。
  Snackbar.prototype.duration = 300;

  // 臨時點心條的標籤名稱。
  Snackbar.prototype.temporaryName = 'data-snackbar-temporary';

  // 類別樣式名稱。
  Snackbar.prototype.className = {
    ACTIVE: 'active',
    ANIMATING: 'animating',
    PRIMARY: 'primary',
    INFO: 'info',
    WARNING: 'warning',
    POSITIVE: 'positive',
    NEGATIVE: 'negative',
    TOP: 'top',
    LEFT: 'left',
    BOTTOM: 'bottom',
    RIGHT: 'right'
  };

  // 選擇器名稱。
  Snackbar.prototype.selector = {
    TEMP_SNACKBAR: `[${Snackbar.prototype.temporaryName}]`,
    ACTIVE_SNACKBAR: '.ts.active.snackbar',
    CONTENT: '.content',
    ACTION: '.action'
  };

  return Snackbar;

})();

ts(Snackbar);


// Snackbar

// 讓使用者能夠產生臨時點心條的函式。
ts.snackbar = (options) => {
  var $snackbar, delay, hasSnackbar;
  // 取得現有的臨時點心條。
  $snackbar = $selector(Snackbar.prototype.selector.TEMP_SNACKBAR);
  // 取得是否有臨時點心條的布林值。
  hasSnackbar = $snackbar.length !== 0;
  // 延遲函式。
  delay = function(time = 0) {
    return new Promise(function(resolve) {
      return setTimeout(resolve, time);
    });
  };
  // 初始化相關選項。
  options = Object.assign({}, Snackbar.prototype.props, options);
  // 如果沒有臨時點心條。
  if (!hasSnackbar) {
    // 建立一個，然後推入 Body 中。
    $snackbar = $selector('<div>').attr(Snackbar.prototype.temporaryName, 'true').addClass('ts snackbar').html("<div class=\"content\"></div>\n<a class=\"action href=\"#!\"></a>").appendTo($selector('body'));
  }
  // 選擇臨時點心條，然後先隱藏（先前的），接著初始化並且顯示新的點心條。
  return ts(Snackbar.prototype.selector.TEMP_SNACKBAR).snackbar('hide').snackbar(Object.assign({}, options, {
    onClose: async() => {
      // 呼叫使用者的回呼函式。
      options.onClose.call($snackbar.get());
      // 等待對話視窗關閉動畫。
      await delay(Snackbar.prototype.duration);
      if (!$snackbar.hasClass(Snackbar.prototype.className.ACTIVE)) {
        // 如果此時的臨時點心條沒有任何啟用樣式，
        // 也就代表沒有另一個行為在開啟點心條，我們就可以安心移除這個臨時點心條了。
        return $snackbar.remove();
      }
    }
  })).snackbar('show');
};
