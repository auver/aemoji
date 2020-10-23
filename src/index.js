import '../sprite/emoji.css';
import emojiMap from '../sprite/emoji.json';

let emojiReg = null;

const createRegexp = () => {
    const keys = Object.keys(emojiMap);
    keys.sort(function (a, b) {
        return b.length - a.length;
    });
    keys.forEach(function (item, index, array) {
        array[index] = item.replace(/\*/g, '\\*');
    });
    return new RegExp(`(${keys.join('|')})`, 'g');
};

const getEmojiReg = () => {
    if (!emojiReg) {
        emojiReg = createRegexp();
    }
    return emojiReg;
};

const unifiedToHTML = (text = '') => {
    return text.replace(getEmojiReg(), function (_, raw) {
        const [className, ariaLabel] = emojiMap[raw];
        return `<span class="emoji emoji${className}" aria-label="${ariaLabel}" alt="${raw} role="img"></span>`;
    });
};

export {
    emojiMap,
    getEmojiReg,
    unifiedToHTML
}

export default unifiedToHTML;
