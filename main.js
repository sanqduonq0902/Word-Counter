let inputText = document.querySelector('.input-text');
let wordText = document.querySelector('.word-count');
let characterText = document.querySelector('.character-count');
let sentenceText = document.querySelector('.sentence-count');
let paragraphText = document.querySelector('.paragraph-count');

inputText.addEventListener('input', () => {
    let text = inputText.value.trim();

    let characterCount = text.length;

    let wordCount = text === '' ? 0 : text.split(/\s+/).length;

    let sentenceCount = text === '' ? 0 : text.split(/[.?!]+/).filter(s => s.trim().length > 0).length;

    let paragraphCount = text === '' ? 0 : text.split(/[\n+]/).filter(s => s.trim().length > 0).length;

    characterText.textContent = characterCount;
    wordText.textContent = wordCount;
    sentenceText.textContent = sentenceCount;
    paragraphText.textContent = paragraphCount;
})