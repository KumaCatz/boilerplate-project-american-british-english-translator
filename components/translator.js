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
        // find if theres a match:
        const allTranslations = [
            ...Object.entries(americanOnly),
            ...Object.entries(americanToBritishSpelling),
            ...Object.entries(americanToBritishTitles),
        ];

        let matchedWords = [];

        allTranslations.forEach(([key, value]) => {
            const regex = new RegExp(`\\b${key}(?!\\w)`, 'gi')
            let match

            while (match = regex.exec(text) !== null) {
                matchedWords.push([key, value]);
            }
        });
        // so we have all the matches. the next step would be then creating a new sentence that swaps the word used by the new one
        // let's try this:
        // current frase = text

        let translatedText = text

        translatedText = text.replace(/(\d{1,2}):(\d{1,2})/g, `<span class="highlight">$1.$2</span>`);

        matchedWords.forEach(([untranslated, translated]) => {
            const regex = new RegExp(`\\b${untranslated}(?!\\w)`, 'gi');
            translatedText = translatedText.replace(regex, `<span class="highlight">${translated}</span>`)
        })    

        return translatedText

        // code used before (didn't work cause of two word translations):
        // const arrayOfWords = text.split(' ');
        // const translatedWords = arrayOfWords.map((word) => {
        //     let translatedWord;
        //     if (word.endsWith('.')) {
        //         const isTitle = this.translateWord(word);
        //         if (isTitle) {
        //             translatedWord = isTitle;
        //         } else {
        //             const wordNoDot = word.slice(0, -1);
        //             if (this.translateWord(wordNoDot)) {
        //                 return `<span class="highlight">${this.translateWord(
        //                     wordNoDot
        //                 )}</span>.`;
        //             }
        //             translatedWord = wordNoDot + '.';
        //         }
        //     } else {
        //         translatedWord = this.translateWord(word) || word;
        //     }
        //     if (translatedWord !== word) {
        //         translatedWord = `<span class="highlight">${translatedWord}</span>`;
        //     }
        //     return translatedWord;
        // });
        // const translation = translatedWords.join(' ');
        // return translation;
    }
    britishToAmerican(text) {
        const translation = text;
        return translation;
    }
}

module.exports = Translator;
