---
layout: single
tabs  :
    - styles
    - module
---

# 核取方塊

.ts.checkbox

## 種類

核取方塊有不同的種類可供選擇。

### 基本

最基本的核取方塊。

```html
<div class="ts [[checkbox]]">
    <input type="checkbox" id="thirdGender">
    <label for="thirdGender">第三性</label>
</div>
```

### 單選方塊

一個僅能夠在多個選項中核取其中一項的單選方塊。

```html
<div class="ts [[radio]] checkbox">
    <input type="radio" id="radio">
    <label for="radio">男性</label>
</div>
```

### 指撥開關

一個可供切換的指撥開關。

```html
<div class="ts [[toggle]] checkbox">
    <input type="checkbox" id="toggle">
    <label for="toggle">暫離</label>
</div>
```

## 群組

多個核取方塊可以組成一個群組。

### 核取群組

核取方塊群組可以用來排列。

```html
<div class="ts [[checkboxes]]">
    <div class="ts radio checkbox">
        <input type="radio" name="gender" id="male">
        <label for="male">男性</label>
    </div>
    <div class="ts radio checkbox">
        <input type="radio" name="gender" id="female">
        <label for="female">女性</label>
    </div>
    <div class="ts radio checkbox">
        <input type="radio" name="gender" id="third">
        <label for="third">第三性</label>
    </div>
</div>
```

### 水平群組

群組可以是水平排列的。

```html
<div class="ts [[horizontal]] checkboxes">
    <div class="ts checkbox">
        <input type="checkbox" id="blue">
        <label for="blue">小藍</label>
    </div>
    <div class="ts checkbox">
        <input type="checkbox" id="seed">
        <label for="seed">小芽</label>
    </div>
    <div class="ts checkbox">
        <input type="checkbox" id="orenji">
        <label for="orenji">橙希</label>
    </div>
</div>
```

### 輕巧版

群組可以是依照內容為寬度基準，而不是一開始就服貼容器的寬度。

```html
<div class="ts [[compact]] horizontal checkboxes">
    <div class="ts checkbox">
        <input type="checkbox" id="apple">
        <label for="apple">蘋果</label>
    </div>
    <div class="ts checkbox">
        <input type="checkbox" id="polo">
        <label for="polo">菠蘿</label>
    </div>
    <div class="ts checkbox">
        <input type="checkbox" id="bavone">
        <label for="bavone">拔鳳梨</label>
    </div>
</div>
```

### 水平對齊

群組可以靠右、左、甚至置中。

```html
<div class="ts [[left aligned]] compact horizontal checkboxes">
    <div class="ts checkbox">
        <input type="checkbox" id="lelia">
        <label for="lelia">雷莉亞</label>
    </div>
    <div class="ts checkbox">
        <input type="checkbox" id="avane">
        <label for="avane">亞凡芽</label>
    </div>
</div>
<br><br>
<div class="ts [[center aligned]] compact horizontal checkboxes">
    <div class="ts checkbox">
        <input type="checkbox" id="aoi">
        <label for="aoi">吳雨藍</label>
    </div>
    <div class="ts checkbox">
        <input type="checkbox" id="shirone">
        <label for="shirone">羽田白音</label>
    </div>
</div>
<br><br>
<div class="ts [[right aligned]] compact horizontal checkboxes">
    <div class="ts checkbox">
        <input type="checkbox" id="caris">
        <label for="caris">卡莉絲</label>
    </div>
    <div class="ts checkbox">
        <input type="checkbox" id="iknore">
        <label for="iknore">依可諾爾</label>
    </div>
</div>
```

## 狀態

核取方塊有不同的狀態。

### 已停用

一個核取方塊可以顯示已經被停用、不可使用的樣子。

```html
<div class="ts [[disabled]] checkbox">
    <input type="checkbox">
    <label>你不能點擊我</label>
</div>
```

## 外觀

核取方塊有不同的外觀。

### 自動層疊

核取方塊群組可以在行動裝置上自動層疊，而不是保持水平排列。欲要觀看效果，你可能需要使用手機裝置瀏覽此範例。

```html
<div class="ts horizontal [[stackable]] checkboxes">
    <div class="ts radio checkbox">
        <input type="radio" name="os" id="windows">
        <label for="windows">Windows</label>
    </div>
    <div class="ts radio checkbox">
        <input type="radio" name="os" id="linux">
        <label for="linux">Linux</label>
    </div>
    <div class="ts radio checkbox">
        <input type="radio" name="os" id="macos">
        <label for="macos">macOS</label>
    </div>
</div>
```

### 反色

核取方塊可以是反色的。

```html
<div class="ts inverted {{segment}}">
    <div class="ts [[inverted]] checkboxes">
        <div class="ts checkbox">
            <input type="checkbox" id="xiaoan">
            <label for="xiaoan">洨安</label>
        </div>
        <div class="ts checkbox">
            <input type="checkbox" id="kataya">
            <label for="kataya">卡特雅</label>
        </div>
        <div class="ts checkbox">
            <input type="checkbox" id="pear">
            <label for="pear">皮爾</label>
        </div>
    </div>
</div>
```