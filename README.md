# aEmoji

convert all emoji to background sprite icon. Regardless of the current system's emoji style or is not support emoji, aEmoji will convert them to Apple style.

like https://github.com/node-modules/emoji, but it is updated to the latest full emoji list, [v13.1](https://unicode.org/emoji/charts/index.html), and accessible, with providing a useful description in aria-label.

## Size

each emoji icon is 18x18 px, but raw data is 36x36 px for hdpi support.

## Demo

[demo](https://auver.github.io/aemoji/demo/)

in Windows 10. System's 'Segoe UI emoji' in the textarea. And aEmoji sprite image above.

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

### ES6 Module

```js
import unifiedToHTML, { emojiMap, getEmojiReg } from 'aemoji';
```

### Use by cloning

And you can convert emoji.png to WebP format.

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
