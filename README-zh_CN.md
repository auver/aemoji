# aEmoji

[English](./README.md) | 简体中文

![logo](https://repository-images.githubusercontent.com/306268570/f0d45c00-1888-11eb-874c-b29f8544697d)

将所有 emoji 转为以 CSS 雪碧图实现的图标。不管当前系统是否支持 emoji 以及其样式如何，`aEmoji` 会将它们转为 Apple 风格。

这个项目和 https://github.com/node-modules/emoji 是类似的, 但是更新到了最新的 emoji 列表，[v13.1](https://unicode.org/emoji/charts/index.html), 并且通过 aria-label 的描述增强了可访问性。

## 图标的尺寸

单个 emoji 图标设置的尺寸为 18x18 px，但为了支持高清屏，原图其实是 36x36 px 的。

## Demo

[demo](https://auver.github.io/aemoji/demo/)

例如在 Windows 10 操作系统中，系统自带的 'Segoe UI emoji' 会直接在 textarea 中显示。而在下方可以看到 `aEmoji` 将其转换为了 apple 风格的图标。

![in win10](https://user-images.githubusercontent.com/6441838/96964620-5ea51e80-153d-11eb-9a90-e49a35d6d556.png)

## 使用方式

### 在浏览器中

```html
<script src="dist/main.js"></script>
```

```js
aEmoji.unifiedToHTML('❤');
// <span class="emoji emoji2764" aria-label="red heart" role="img"></span>
```

### webpack

```js
import unifiedToHTML, { emojiMap, getEmojiReg } from 'aemoji';
```

为了实现雪碧图，我们使用了 `emoji.png` 作为背景图。

问题在于将 `aemoji` 作为第三方库引入你的项目时，这张 emoji 图片的路径无法改变，而图片往往是要打包并部署到静态服务器的。所以我们提供了在运行时修改这张图片路径的方式。在你引入 `aemoji` 前，设置 `__aemoji_url__` 作为 `emoji.png` 的实际路径。

aemoji-path.js

```js
import emojiPath from "aemoji/dist/emoji.png";
window.__aemoji_url__ = emojiPath;
```

App.js

```js
import './aemoji-path.js';
import { emojiMap, getEmojiReg } from "aemoji";
```

这里有个使用了 [create-react-app](https://create-react-app.dev/) 的例子。

https://github.com/auver/aemoji-cra-example

### 可以通过 github 下载源码进行二次编译

## API

### unifiedToHTML(text)

convert emoji texts to `<span>` element which show emoji by background-image.

### getEmojiReg()

return a RegExp object, `String.prototype.replace()` method may need it.

### emojiMap

```js
text.replace(getEmojiReg(), function (_, m) {
    const [className, ariaLabel] = emojiMap[m];
    return `<span class="emoji emoji${className}" aria-label="${ariaLabel}" role="img"></span>`;
});
```

You could use `getEmojiReg()` and `emojiMap` to convert text by yourself.
