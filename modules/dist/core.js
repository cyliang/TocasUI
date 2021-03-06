// Generated by CoffeeScript 2.0.0-beta4
var ts;

ts = (selector, context = null) => {
  var extend, module;
  // 如果傳入的選擇器不是物件，那麼就只是普通的選擇器。
  if (typeof selector !== 'function') {
    ts.selector = context !== null ? $selector(selector, context) : $selector(selector);
    return ts.fn;
  }
  // 如果傳入的是物件，那麼就是欲註冊的 Tocas 模組。
  // 改名為 module 比較符合接下來的使用方式。
  module = selector;
  // 延展物件的函式，與 ES 的 `...` 不同之處在於 extend 並不會替換掉整個子物件，而會以補插的方式執行。
  // https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
  extend = function() {
    var deep, extended, i, length, merge, obj;
    extended = {};
    deep = true;
    i = 0;
    length = arguments.length;
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }
    merge = function(obj) {
      var prop;
      for (prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };
    while (i < length) {
      obj = arguments[i];
      merge(obj);
      i++;
    }
    return extended;
  };
  // 在 Tocas 函式鏈中新增一個相對應的模組函式。
  return ts.fn[module.module] = (arg = null, arg2 = null, arg3 = null, arg4 = null, arg5 = null) => {
    var $elements, value;
    // 先用 Tocas Core 核心來選取指定元素，然後放到上下文物件之後傳遞到模組內使用。
    $elements = ts.selector;
    // 最終的回傳值。
    value = ts.fn;
    // 每個節點。
    $elements.each((element, index) => {
      var $this, base, getAttributeOptions, init, localModule, props;
      // 初始化這個模組。
      localModule = new module();
      localModule.delay = function(time = 0) {
        return new Promise(function(resolve) {
          return setTimeout(resolve, time);
        });
      };
      localModule.createElement = (html) => {
        var container;
        container = document.createElement('div');
        container.innerHTML = html;
        return container.firstChild;
      };
      // 準備一些此元素的資料。
      $this = $selector(element);
      // 將此元素的資料放置這個模組中。
      localModule.$elements = $elements;
      localModule.$origin = $this;
      localModule.$this = $this;
      localModule.index = index;
      // 取得元素的標籤，並當作設置選項回傳一個物件。
      getAttributeOptions = (object) => {
        var iterate, props;
        // 初始化一個屬性物件，用以保存此元素的自訂屬性。
        props = {};
        // 遞迴模組的屬性設置，並且找尋元素是否有相對應的屬性。
        // 建立一個遞迴函式讓我們能夠解決錯綜復雜的物件。
        iterate = (object, prefix) => {
          var attr, hyphenName, name, ref, results;
          results = [];
          for (name in object) {
            // 將設定的 camelCase 屬性名稱轉換成 hyphen-case。
            hyphenName = name.replace(/([A-Z])/g, (g) => {
              return `-${g[0].toLowerCase()}`;
            });
            // 如果有前輟，就將轉換後的名稱加上前輟。
            if (prefix !== void 0) {
              hyphenName = `${prefix}-${hyphenName}`;
            }
            if (((ref = object[name]) != null ? ref.constructor : void 0) === Object) {
              iterate(object[name], hyphenName);
            }
            // 建立相對應的元素屬性名稱。
            attr = $this.attr(`data-${hyphenName}`);
            if (attr == null) {
              // 如果元素沒有相對應的標籤，就略過這個設置。
              continue;
            }
            // 轉換標籤的字串型態到相對應的真正型態，例如：數字字串 -> 數值、布林字串 -> 布林值。
            switch (attr) {
              case attr === 'true':
              case attr === 'false':
                results.push(props[name] = attr === 'true');
                break;
              case !isNaN(attr):
                results.push(props[name] = parseInt(attr));
                break;
              default:
                results.push(props[name] = attr);
            }
          }
          return results;
        };
        // 開始遞迴設置。
        iterate(object);
        return props;
      };
      // init 會初始化一個元素，並讓他執行模組中的初始化函式。
      init = () => {
        var props;
        // 初始化一個屬性物件，用以保存此元素的自訂屬性。
        props = getAttributeOptions(localModule.props);
        // 用模組的預設選項加上元素標籤所設置的選項來初始化選取的模組。
        $this.data(extend({}, localModule.props, props));
        // 然後呼叫自定義的初始化模組函式。
        value = localModule.init(extend({}, localModule.props, props));
        // 將這個元素的 `tocas` 設置為 `true`，表示被初始化過了。
        return $this.data('tocas', true);
      };
      // 如果第一個參數是空的，那麼使用者想直接呼叫這個模組的初始化函式。
      if (arg === null) {
        if ($this.data('tocas') == null) {
          // 如果元素沒有 `tocas` 設置，就表示尚未被初始化。
          // 若真為此，則執行初始化函式。
          return init();
        }
      // 如果第一個參數是物件，就表示使用者想要傳入一個選項物件。
      } else if (typeof arg === 'object') {
        if ($this.data('tocas') != null) {
          // 如果該元素已經被初始化了，我們就呼叫摧毀函式。
          localModule.destroy();
        }
        // 初始化一個屬性物件，用以保存此元素的自訂屬性。
        props = getAttributeOptions(localModule.props);
        // 套用預設 + 元素設置 + 覆蓋的選項。
        $this.data(extend({}, localModule.props, props, arg));
        // 以新的選項執行初始化函式並傳入部分參數。
        value = localModule.init(extend({}, localModule.props, arg), arg2, arg3, arg4, arg5);
        // 將這個元素的 `tocas` 設置為 `true`，表示被初始化過了。
        return $this.data('tocas', true);
      // 如果第一個是字串，就表示使用者想要呼叫模組的自訂方法。
      } else if (typeof arg === 'string') {
        if ($this.data('tocas') == null) {
          // 如果該元素還沒被初始化，我們就要先呼叫初始化函式初始化這個元素。
          init();
        }
        // 呼叫指定的自訂方法並取得回傳值。
        return value = typeof (base = localModule.methods())[arg] === "function" ? base[arg](arg2, arg3, arg4, arg5) : void 0;
      }
    });
    return value;
  };
};

// 初始化選擇器。
ts.selector = {};

// 初始化 Tocas JS 的函式鏈。
ts.fn = {};
