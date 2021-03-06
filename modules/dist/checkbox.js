// Generated by CoffeeScript 2.0.0-beta4
// Checkbox

// 核取方塊。
var Checkbox;

Checkbox = (function() {
  class Checkbox {
    constructor() {
      // 元素初始化函式。
      this.init = this.init.bind(this);
      // 元素摧毀函式。
      this.destroy = this.destroy.bind(this);
      // Event

      // 呼叫指定函式。
      this.event = this.event.bind(this);
      // Toggle

      // 切換指定核取方塊的勾選狀態。
      this.toggle = this.toggle.bind(this);
      // Status

      // 取得核取方塊是單選項目還是方塊、並回傳相對應的元素。
      this.status = this.status.bind(this);
      // Check

      // 勾選指定方塊。
      this.check = this.check.bind(this);
      // Uncheck

      // 取消勾選指定方塊。
      this.uncheck = this.uncheck.bind(this);
      // 模組可用的方法。
      this.methods = this.methods.bind(this);
    }

    init() {
      // 當核取方塊被按下時。
      this.$this.on('click.checkbox', () => {
        // 如果不是被停用的話。
        if (!this.$this.find(this.selector.INPUT).prop('disabled')) {
          // 就切換該核取方塊的勾選狀態。
          return this.toggle();
        }
      });
      return ts.fn;
    }

    destroy() {
      return this.$this.off('click.checkbox');
    }

    event(event) {
      var ref;
      return (ref = this.$this.data(event)) != null ? ref.call(this.$this.get()) : void 0;
    }

    toggle() {
      if (this.$this.find(this.selector.INPUT).prop('checked') && !this.$this.hasClass(this.className.RADIO)) {
        return this.uncheck();
      } else {
        return this.check();
      }
    }

    status() {
      var $checkbox, isRadio;
      // 確認是核取方塊還是單選項目。
      isRadio = this.$this.hasClass(this.className.RADIO);
      // 依照種類取得該元素。
      $checkbox = $selector(this.$this, isRadio ? this.selector.INPUT_RADIO : this.selector.INPUT_CHECKBOX);
      return {
        isRadio: isRadio,
        $checkbox: $checkbox
      };
    }

    check() {
      var $checkbox, isRadio, name;
      // 呼叫事件函式。
      if (!this.event('beforeChecked')) {
        return;
      }
      this.event('onChecked');
      this.event('onChange');
      ({isRadio, $checkbox} = this.status());
      // 如果是單選項目的話。
      if (isRadio) {
        // 取得單選項目的群組名稱。
        name = $checkbox.attr('name');
        // 移除所有該群組的單選項目勾選狀態。
        $selector(this.selector.INPUT_RADIO_NAME(name)).each((element) => {
          this.$this = $selector(element).parent();
          this.uncheck();
          return this.$this = this.$origin;
        });
        // 然後啟用目前的單選項目。
        return $checkbox.prop('checked', true);
      } else {
        // 啟用勾選狀態。
        // 如果是複選方塊的話。
        return $checkbox.prop('checked', true);
      }
    }

    uncheck() {
      var $checkbox;
      // 呼叫事件函式。
      if (!this.event('beforeUnchecked')) {
        return;
      }
      this.event('onUnchecked');
      this.event('onChange');
      ({$checkbox} = this.status());
      // 取消勾選狀態。
      return $checkbox.prop('checked', false);
    }

    methods() {
      return {
        // Toggle

        // 切換核取方塊的勾選狀態。
        toggle: () => {
          this.toggle();
          return ts.fn;
        },
        // Check

        // 勾選指定核取方塊。
        check: () => {
          this.check();
          return ts.fn;
        },
        // Uncheck

        // 取消勾選指定核取方塊。
        uncheck: () => {
          this.uncheck();
          return ts.fn;
        },
        // Disable

        // 停用指定核取方塊，使用者將無法手動勾選或取消勾選該方塊。
        disable: () => {
          this.event('onDisable');
          this.$this.addClass(this.className.DISABLED);
          this.$this.find(this.selector.INPUT).prop('disabled', true);
          return ts.fn;
        },
        // Enable

        // 啟用指定核取方塊，使用者可以對其進行勾選或取消勾選。
        enable: () => {
          this.event('onEnable');
          this.$this.removeClass(this.className.DISABLED);
          this.$this.find(this.selector.INPUT).prop('disabled', false);
          return ts.fn;
        },
        // Is Disable

        // 回傳一個布林值表示該核取方塊是否已被停用。
        'is disable': () => {
          return this.$this.find(this.selector.INPUT).prop('disabled');
        },
        // Is Enable

        // 回傳一個布林值表示該核取方塊是否可供使用。
        'is enable': () => {
          return !this.$this.find(this.selector.INPUT).prop('disabled');
        },
        // Is Checked

        // 取得一個表示核取方塊是否被勾選的布林值。
        'is checked': () => {
          return this.$this.find(this.selector.INPUT).prop('checked');
        },
        // Is Unchecked

        // 取得一個表示核取方塊是否沒有被勾選的布林值。
        'is unchecked': () => {
          return !this.$this.find(this.selector.INPUT).prop('checked');
        },
        // Attach Events

        // 綁定按鈕來觸發這個核取方塊的指定功能。
        'attach events': (selector, event) => {
          $selector(selector).on('click', () => {
            return ts(this.$this).checkbox(event);
          });
          return ts.fn;
        }
      };
    }

  };

  // 模組名稱。
  Checkbox.module = 'checkbox';

  // 模組屬性。
  Checkbox.prototype.props = {
    // 當核取方塊被更改勾選狀態時所呼叫的函式。
    onChange: function() {},
    // 當核取方塊被勾選時所呼叫的函式。
    onChecked: function() {},
    // 當核取方塊被取消勾選時所呼叫的函式。
    onUnchecked: function() {},
    // 當核取方塊被勾選時所呼叫的函式，如果這個函式回傳 `false` 將會阻止勾選動作。
    beforeChecked: function() {
      return true;
    },
    // 當核取方塊被取消勾選時所呼叫的函式，如果這個函式回傳 `false` 將會阻止取消勾選動作。
    beforeUnchecked: function() {
      return true;
    },
    // 當核取方塊被啟用時所呼叫的函式。
    onEnable: function() {},
    // 當核取方塊被停用時所呼叫的函式。
    onDisable: function() {}
  };

  // 類別樣式名稱。
  Checkbox.prototype.className = {
    DISABLED: 'disabled',
    RADIO: 'radio'
  };

  // 選擇器名稱。
  Checkbox.prototype.selector = {
    INPUT: 'input',
    INPUT_RADIO: 'input[type="radio"]',
    INPUT_CHECKBOX: 'input[type="checkbox"]',
    INPUT_RADIO_NAME: function(name) {
      return `input[type='radio'][name='${name}']`;
    }
  };

  return Checkbox;

})();

ts(Checkbox);
