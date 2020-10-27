# aEmoji

English | [简体中文](./README-zh_CN.md)

![logo](https://repository-images.githubusercontent.com/306268570/f0d45c00-1888-11eb-874c-b29f8544697d)

convert all emoji to CSS image Sprites icon. Regardless of the current system's emoji style or is not support emoji, `aEmoji` will convert them to Apple style.

like https://github.com/node-modules/emoji, but it is updated to the latest full emoji list, [v13.1](https://unicode.org/emoji/charts/index.html), and accessible, with providing a useful description in aria-label.

## Size of icon

single emoji icon is 18x18 px, but raw data is 36x36 px for hdpi support.

## Demo

[demo](https://auver.github.io/aemoji/demo/)

in Windows 10. System's 'Segoe UI emoji' in the textarea. And `aEmoji` CSS image Sprites icon above.

![in win10](https://user-images.githubusercontent.com/6441838/96964620-5ea51e80-153d-11eb-9a90-e49a35d6d556.png)

## Usage

### Browser

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

In css, we use `emoji.png` as the background image.

Now, The problem is that the path of `emoji.png` cannot be changed. So we provide a way to modify the url of `emoji.png` at runtime. Before you import `aemoji`, set global `__aemoji_url__` as the `emoji.png` real path in your webpack project.

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

Here is an example within [create-react-app](https://create-react-app.dev/).

https://github.com/auver/aemoji-cra-example

### Use by cloning

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
