// Generated by CoffeeScript 2.0.0-beta4
var TocasModal;

TocasModal = (function() {
  class TocasModal {
    $init({$this, $module, $options}) {
      $module.prototype._init({$this, $module}, $options);
      return ts.fn;
    }

    $opts({$this, $module, $options}, options) {
      options = Object.assign({}, $options, options);
      $module.prototype._init({$this, $module}, options);
      return ts.fn;
    }

    // 初始化一個淡化幕如果有必要的話，最終回傳一個全域對話視窗淡化幕。
    _getDimmer({$module}) {
      var $dimmer;
      // 取得全域對話視窗淡化幕。
      $dimmer = $selector('.ts.modal.dimmer');
      // 如果有的話就直接回傳淡化幕元素。
      if ($dimmer.length !== 0) {
        return $dimmer;
      }
      // 沒有的話就建立一個新的對話視窗淡化幕。
      $dimmer = $selector('<div>').addClass('ts modals dimmer');
      // 將淡化幕推入到網頁中。
      $selector('body').append($dimmer);
      // 綁定淡化幕被按下時，自動關閉對話視窗的點擊事件。
      $dimmer.on('click', function(event) {
        // 如果點擊淡化幕但目標其實是子元素就離開。
        if (event.target !== this) {
          return;
        }
        return $module.prototype._close({
          $this: $dimmer.find('.ts.modal.active.closable')
        });
      });
      // 回傳這個新的淡化幕。
      return $dimmer;
    }

    // 初始化一個對話視窗。
    _init({$this, $module}, {keyboardShortcuts, approve, onApprove, deny, onDeny}) {
      var $dimmer;
      // 取得全域對話視窗淡化幕。
      $dimmer = $module.prototype._getDimmer({$module});
      // 如果這個對話視窗不在淡化幕內，我們就將這個對話視窗移入淡化幕裡。
      if (!$this.parent().hasClass('ts modals dimmer')) {
        $this.appendTo($dimmer);
      }
      // 如果這個對話視窗是可供關閉而且又允許透過鍵盤快捷鍵關閉，那麼就綁定「Esc」按鍵事件到頁面上並指定關閉這個對話視窗。
      if (keyboardShortcuts === true && $this.hasClass('closable')) {
        $selector(document).on('keyup', function(e) {
          if (e.keyCode === 27) {
            return $module.prototype._close({$this});
          }
        });
      }
      // 綁定「允許」按鈕的事件。
      $this.find(approve).on('click', function() {
        if (onApprove.call(this) === true) {
          return $module.prototype._close({$this});
        }
      });
      // 綁定「拒絕」按鈕的事件。
      $this.find(deny).on('click', function() {
        if (onDeny.call(this) === true) {
          return $module.prototype._close({$this});
        }
      });
      // 綁定「關閉」按鈕的事件。
      return $this.find(':scope > .ts.close.button').on('click', function() {
        return $module.prototype._close({$this});
      });
    }

    // 開啟一個對話視窗。
    _open({$this}) {
      if ($this.hasClass('active')) {
        return;
      }
      $selector('body').attr('data-modal-lock', 'true');
      $this.off('animationend');
      $this.parent().addClass('active opening');
      $this.addClass('active opening');
      return $this.one('animationend', function() {
        $this.removeClass('opening');
        return $this.parent().removeClass('opening');
      });
    }

    // 關閉一個對話視窗。
    _close({$this}) {
      if (!$this.hasClass('active')) {
        return;
      }
      $selector('body').removeAttr('data-modal-lock');
      $this.off('animationend');
      $this.parent().addClass('closing');
      $this.addClass('active closing');
      return $this.one('animationend', function() {
        $this.data('onClose').call(this);
        $this.removeClass('active closing');
        return $this.parent().removeClass('active closing');
      });
    }

  };

  TocasModal.prototype.$name = 'modal';

  TocasModal.prototype.$options = {
    approve: '.approve, .positive, .ok', // 會呼叫同意回呼函式的元素選擇器。
    deny: '.deny, .negative, .cancel', // 會呼叫拒絕回呼函式的元素選擇器。
    onApprove: function() {
      return true; // 同意時所被呼叫的函式，如果這個函式回傳 false 的話將不會關閉對話視窗。
    },
    onDeny: function() {
      return true; // 拒絕時所被呼叫的函式，如果這個函式回傳 false 的話將不會關閉對話視窗。
    },
    onClose: function() {}, // 當視窗被關閉時所呼叫的函式。
    keyboardShortcuts: true // 是否綁定鍵盤快捷鍵，如 Esc 鍵以關閉視窗。
  };

  TocasModal.prototype.$methods = {
    // 顯示對話視窗。
    show: function({$this, $module}) {
      $module.prototype._open({$this});
      return ts.fn;
    },
    // 隱藏對話視窗。
    hide: function({$this, $module}) {
      $module.prototype._close({$this});
      return ts.fn;
    },
    // 切換對話視窗。
    toggle: function({$this, $module}) {
      if ($this.hasClass('active')) {
        $module.prototype._close({$this});
      } else {
        $module.prototype._open({$this});
      }
      return ts.fn;
    },
    // 回傳一個表示對話視窗是否正在顯示的布林值。
    'is active': function({$this}) {
      return $this.hasClass('active');
    }
  };

  return TocasModal;

})();

new ts(TocasModal);
