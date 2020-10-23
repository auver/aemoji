const inputElement = document.getElementById('n-txt');
const previewElement = document.getElementById('n-preview');

inputElement.value = Object.keys(aEmoji.emojiMap);
previewElement.innerHTML = aEmoji.unifiedToHTML(inputElement.value);

inputElement.addEventListener('input', function() {
    previewElement.innerHTML = aEmoji.unifiedToHTML(inputElement.value);
});