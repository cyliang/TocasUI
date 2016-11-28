var normal  = 'normal'
var large   = 'large'
var small   = 'small'
var tiny    = 'tiny'
var source  = 'source'
var example = 'example'


export default
{
    header:
    {
        title   : '板岩',
        subTitle:
        `
            雖然僅有一塊，但卻有著多種用途。
        `
    },
    html:
    [
        {
            type       : large,
            title      : '說明',
            description:
            `
                <p>板岩是<a href="/elements/jumbotron">聚焦看板</a>的後繼者，板岩除了擁有作為頁面標題區塊的功能外，</p>
                <p>現在還可以當作一個預置區塊（Placeholder），例如一個空的購物車就可以用上板岩。</p>
                <br><br>
                <p>此外，板岩現在也支援標題、註釋、動作按鈕。</p>
            `
        },
        {
            type       : normal,
            title      : '種類',
            description: '一個板岩具有多個不同的種類。',
            link       : false
        },
        {
            type       : small,
            title      : '板岩',
            description: `一個正常的板岩。`,
            link       : 'slate'
        },
        {
            type: 'example',
            code: `<div class="ts slate">
    這是一塊普通的板岩，看起來十分無聊
</div>`,
            mark  : 'slate'
        },
        {
            type       : small,
            title      : '基本',
            description: `板岩可以僅有基本的結構。`,
            link       : 'basic'
        },
        {
            type: 'example',
            code: `<div class="ts basic slate">
    這是僅有基本結構的板岩。
</div>`,
            mark  : 'basic'
        },
        {
            type       : small,
            title      : '標題板岩',
            description: `板岩可以用來當作頁面標題區塊，這將使得文字預設向左對齊。`,
            link       : 'heading'
        },
        {
            type: 'example',
            code: `<div class="ts heading slate">
    <span class="header">使用者設定</span>
    <span class="description">你可以在這裡變更帳號、密碼與個人資訊。</span>
</div>`,
            mark  : 'heading'
        },
        {
            type       : normal,
            title      : '狀態',
            description: '你可以隨時透過樣式類別切換一個板岩的狀態。',
            link       : false
        },
        {
            type       : small,
            title      : '已停用',
            description: `顯示這個板岩已經被停用了。`,
            link       : 'disabled'
        },
        {
            type: 'example',
            code: `<div class="ts disabled slate">
    別看這裡，我已經不重要了。
</div>`,
            mark  : 'disabled'
        },
        {
            type       : normal,
            title      : '內容',
            description: '一個板岩可以有許多不同性質的內容。',
            link       : false
        },
        {
            type       : small,
            title      : '標題',
            description: `板岩內可以有標題。`,
            link       : 'header'
        },
        {
            type: 'example',
            code: `<div class="ts slate">
    <span class="header">使用者設定</span>
</div>`,
            mark  : 'header'
        },
        {
            type       : small,
            title      : '註釋',
            description: `板岩內也可含有註釋用以詳細解說。`,
            link       : 'description'
        },
        {
            type: 'example',
            code: `<div class="ts slate">
    <span class="header">Tryment 計畫</span>
    <span class="description">模擬就學制度，協助在年者再次就職支援計劃。</span>
</div>`,
            mark  : 'description'
        },
        {
            type       : small,
            title      : '圖示',
            description: `圖示可以被放置於板岩內。`,
            link       : 'icon'
        },
        {
            type: 'example',
            code: `<div class="ts slate">
    <i class="setting icon"></i>
    <span class="header">偏好設定</span>
    <span class="description">你可以在這裡改變你想改變的，但你還是沒女朋友。</span>
</div>`,
            mark  : 'icon'
        },
        {
            type       : small,
            title      : '代表性符號',
            description: `板岩內的圖示可以被設置為此板岩的代表性符號。`,
            link       : 'symbol'
        },
        {
            type: 'example',
            code: `<div class="ts basic padded dashed slate">
    <i class="upload symbol icon"></i>
    <span class="header">上傳圖片或影音</span>
    <span class="description">將圖片拖拉至此處進行上傳。</span>
</div>`,
            mark  : 'symbol'
        },
        {
            type       : small,
            title      : '淡化圖示',
            description: `如果圖示不重要，也可以將其淡化。`,
            link       : 'faded-icon'
        },
        {
            type: 'example',
            code: `<div class="ts slate">
    <i class="setting faded icon"></i>
    <span class="header">偏好設定</span>
    <span class="description">你可以在這裡改變你想改變的，但你還是沒女朋友。</span>
</div>`,
            mark  : 'faded'
        },
        {
            type       : small,
            title      : '圖示群組',
            description: `你也能夠將多個圖示一次放入板岩中。`,
            link       : 'icons'
        },
        {
            type: 'example',
            code: `<div class="ts slate">
    <div class="icons">
        <i class="file audio outline icon"></i>
        <i class="file text outline icon"></i>
        <i class="file word outline icon"></i>
    </div>
    <span class="header">行動辦公室</span>
    <span class="description">MeowWork 讓你到處都能夠辦公。</span>
</div>`,
            mark  : 'icons'
        },
        {
            type       : small,
            title      : '動作',
            description: `板岩中可以有動作區塊，使人進行操作。`,
            link       : 'action'
        },
        {
            type: 'example',
            code: `<div class="ts padded slate">
    <span class="header">尚無文件</span>
    <span class="description">你目前沒有任何文件，按下下方按鈕建立新文件。</span>
    <div class="action">
        <button class="ts primary button">現在開始</button>
    </div>
</div>`,
            mark  : 'action'
        },
        {
            type       : normal,
            title      : '外觀',
            description: '你可以更改板岩的位置、大小、或者形狀。',
            link       : false
        },
        {
            type       : small,
            title      : '增加內距',
            description: `你可以增加板岩的內距。`,
            link       : 'padded'
        },
        {
            type: 'example',
            code: `<div class="ts heading padded slate">
    <span class="header">增加內距</span>
    <span class="description">這可以讓你的聚焦看板看起來不那麼壅擠。</span>
</div>
<br>
<div class="ts heading very padded slate">
    <span class="header">非常內距</span>
    <span class="description">可以，這很內距。</span>
</div>
<br>
<div class="ts heading extra padded slate">
    <span class="header">超級內距</span>
    <span class="description">如果你還不滿足的話還有這樣增加內距地方式。</span>
</div>`,
            mark  : 'extra padded, very padded, padded'
        },
        {
            type       : small,
            title      : '指定方向增加內距',
            description: `你還可以指定增加垂直或是水平的內距。`,
            link       : 'specified-padded'
        },
        {
            type: 'example',
            code: `<div class="ts heading vertically padded slate">
    <span class="header">垂直內距</span>
    <span class="description">僅增加垂直內距，水平內距維持預設。</span>
</div>
<br>
<div class="ts heading horizontally very padded slate">
    <span class="header">水平非常內距</span>
    <span class="description">這會增加水平的內距，但是垂直內距保持預設。</span>
</div>`,
            mark  : 'horizontally very padded, vertically padded'
        },
        {
            type       : small,
            title      : '縮減',
            description: `你可以移除所有內距、或水平和垂直內距。`,
            link       : 'fitted'
        },
        {
            type: 'example',
            code: `<div class="ts heading fitted slate">
    <span class="header">縮減全部</span>
    <span class="description">這將使的你的板岩完全沒有內距。</span>
</div>
<br>
<div class="ts heading horizontally fitted slate">
    <span class="header">水平縮減</span>
    <span class="description">板岩的左右內距將會消失。</span>
</div>
<br>
<div class="ts heading vertically fitted slate">
    <span class="header">垂直縮減</span>
    <span class="description">這樣做的話上下內距將會消失。</span>
</div>`,
            mark  : 'horizontally fitted, vertically fitted, fitted'
        },
        {
            type       : small,
            title      : '無框線',
            description: `板岩可以不需要框線。`,
            link       : 'borderless'
        },
        {
            type: 'example',
            code: `<div class="ts basic borderless slate">
    <span class="header">無框線板岩</span>
    <span class="description">這個板岩沒有框線。</span>
</div>`,
            mark  : 'borderless'
        },
        {
            type       : small,
            title      : '文字對齊',
            description: `板岩內的文字可以靠左、右、甚至置中。`,
            link       : 'aligned'
        },
        {
            type: 'example',
            code: `<div class="ts right aligned slate">
    <span class="header">靠右置齊</span>
    <span class="description">這個看板的文字靠右。</span>
</div>
<br>
<div class="ts left aligned slate">
    <span class="header">靠左置齊</span>
    <span class="description">這個看板的文字靠左。</span>
</div>
<br>
<div class="ts center aligned slate">
    <span class="header">置中對齊</span>
    <span class="description">這個看板的文字置中。</span>
</div>`,
            mark  : 'right aligned, left aligned, center aligned'
        },
        {
            type       : small,
            title      : '流動',
            description: `這種板岩適合用在需要貼齊容器左右的時候，因為沒有圓角。`,
            link       : 'fluid'
        },
        {
            type: 'example',
            code: `<div class="ts fluid slate">
    <span class="header">流動板岩</span>
    <span class="description">這個板岩沒有圓角，適合貼齊左右邊。</span>
</div>`,
            mark  : 'fluid'
        },
        {
            type       : small,
            title      : '嵌入的',
            description: `板岩可以有內嵌陰影，看起來像是被嵌入一般。`,
            link       : 'insetted'
        },
        {
            type: 'example',
            code: `<div class="ts insetted slate">
    <span class="header">嵌入板岩</span>
    <span class="description">仔細看，這個板岩有內部陰影。</span>
</div>`,
            mark  : 'insetted'
        },
        {
            type       : small,
            title      : '虛線的',
            description: `板岩可以有虛線框線。`,
            link       : 'dashed'
        },
        {
            type: 'example',
            code: `<div class="ts basic dashed slate">
    <i class="upload icon"></i>
    <span class="header">上傳圖片或影音</span>
    <span class="description">將圖片拖拉至此處進行上傳。</span>
</div>`,
            mark  : 'basic dashed'
        },
        {
            type       : small,
            title      : '可點擊的',
            description: `板岩可以對點擊動作進行回饋。`,
            link       : 'clickable'
        },
        {
            type: 'example',
            code: `<div class="ts clickable slate">
    <i class="mouse pointer icon"></i>
    <span class="header">點此看看</span>
    <span class="description">點擊此處會有相關的回饋效果。</span>
</div>
<br>
<div class="ts clickable basic dashed slate">
    <i class="mouse pointer icon"></i>
    <span class="header">點此看看</span>
    <span class="description">點擊此處會有相關的回饋效果。</span>
</div>`,
            mark  : 'clickable'
        },
        {
            type       : small,
            title      : '輕巧版',
            description: `板岩可以是基於內容來當作寬度基準，而不是直接服貼附容器寬度。`,
            link       : 'compact'
        },
        {
            type: 'example',
            code: `<div class="ts compact slate">
    <i class="text width icon"></i>
    <span class="header">文字決定寬度</span>
    <span class="description">板岩內的文字越長，板岩的寬度就越寬。</span>
</div>`,
            mark  : 'compact'
        },
        {
            type       : small,
            title      : '尺寸',
            description: `板岩有多種尺寸。`,
            link       : 'sizes'
        },
        {
            type: 'example',
            code: `<div class="ts mini heading slate">
    <span class="header">迷你</span>
    <span class="description">這是一個迷你板岩。</span>
</div>
<br>
<div class="ts tiny heading slate">
    <span class="header">微小</span>
    <span class="description">這是一個微小板岩。</span>
</div>
<br>
<div class="ts small heading slate">
    <span class="header">小的</span>
    <span class="description">這是一個小的板岩。</span>
</div>
<br>
<div class="ts heading slate">
    <span class="header">適中</span>
    <span class="description">這是一個適中板岩。</span>
</div>
<br>
<div class="ts large heading slate">
    <span class="header">大的</span>
    <span class="description">這是一個大的板岩。</span>
</div>
<br>
<div class="ts big heading slate">
    <span class="header">較大</span>
    <span class="description">這是一個較大板岩。</span>
</div>
<br>
<div class="ts huge heading slate">
    <span class="header">巨大</span>
    <span class="description">這是一個巨大板岩。</span>
</div>
<br>
<div class="ts massive heading slate">
    <span class="header">重量級</span>
    <span class="description">這是一個重量級板岩。</span>
</div>`,
            mark  : 'mini, tiny, small, medium, large, big, huge, massive'
        },
    ]
}