import emoji from './emoji-png-path';
let realEmojiPath = typeof __aemoji_url__ !== 'undefined' ? __aemoji_url__ : emoji;
export default realEmojiPath;
