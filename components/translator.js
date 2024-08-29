const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
    translateWord(word) {
        return (
            americanOnly[word] ||
            americanToBritishSpelling[word] ||
            americanToBritishTitles[word] ||
            britishOnly[word]
        );
    }

    americanToBritish(text) {
        const arrayOfWords = text.split(' ');
        const translatedWords = arrayOfWords.map((word) => {
            let translatedWord
            if (word.endsWith('.')) {
                const isTitle = this.translateWord(word);
                if (isTitle) {
                    translatedWord = isTitle;
                } else {
                    const wordNoDot = word.slice(0, -1);
                    return `<span class="highlight">${(this.translateWord(wordNoDot) || wordNoDot)}</span>.`;
                }
            } else {
                translatedWord = this.translateWord(word) || word
            }
            if (translatedWord !== word) {
                translatedWord = `<span class="highlight">${translatedWord}</span>`
            }
            return translatedWord
        });
        const translation = translatedWords.join(' ');
        return translation;
    }
    britishToAmerican(text) {
        const translation = text;
        return translation;
    }
}

module.exports = Translator;
