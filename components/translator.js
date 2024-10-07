const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
    // something i used but not anymore:
    // translateWord(word) {
    //     return (
    //         americanOnly[word] ||
    //         americanToBritishSpelling[word] ||
    //         americanToBritishTitles[word] ||
    //         britishOnly[word]
    //     );
    // }

    swapKeyValue(object) {
        return Object.entries(object).map(([key, value]) => [value, key])
    }

    findMatchesInDatabase(keyValuePairsArray, text) {
        let matchedKeyValuePairs = [];

        keyValuePairsArray.forEach(([key, value]) => {
            const regex = new RegExp(`\\b${key}(?!\\w)`, 'gi')
            let match

            while (match = regex.exec(text) !== null) {
                matchedKeyValuePairs.push([key, value]);
            }
        });

        return matchedKeyValuePairs
    }

    translateWords(matches, text, hoursFormat, hoursFormatTranslated) {
        const hoursRegex = new RegExp(`(\\d{1,2})${hoursFormat}(\\d{1,2})`, "g");
        let translation = text.replace(hoursRegex, `<span class="highlight">$1${hoursFormatTranslated}$2</span>`);

        matches.forEach(([untranslated, translated]) => {
            const regex = new RegExp(`\\b${untranslated}(?!\\w)`, 'gi');
            translation = translation.replace(regex, `<span class="highlight">${translated}</span>`)
        })

        return translation
    }

    americanToBritish(text) {
        // find if theres a match:
        const americanToBritishKeyValuePairs = [
            ...Object.entries(americanOnly),
            ...Object.entries(americanToBritishSpelling),
            ...Object.entries(americanToBritishTitles)
        ];

        const matches = this.findMatchesInDatabase(americanToBritishKeyValuePairs, text)
  
        // so we have all the matches. the next step would be then creating a new sentence that swaps the word used by the new one
        // let's try this:
        // current frase = text

        let translation = this.translateWords(matches, text, ':', '.')

        // translation = text.replace(/(\d{1,2}):(\d{1,2})/g, `<span class="highlight">$1.$2</span>`);

        // matches.forEach(([untranslated, translated]) => {
        //     const regex = new RegExp(`\\b${untranslated}(?!\\w)`, 'gi');
        //     translation = translation.replace(regex, `<span class="highlight">${translated}</span>`)
        // })

        return translation

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

        // stuff
        const britishToAmericanKeyValuePairs = [
            ...this.swapKeyValue(americanToBritishSpelling),
            ...this.swapKeyValue(americanToBritishTitles),
            ...Object.entries(britishOnly)
        ];

        
        const matches = this.findMatchesInDatabase(britishToAmericanKeyValuePairs, text)
  
        // so we have all the matches. the next step would be then creating a new sentence that swaps the word used by the new one
        // let's try this:
        // current frase = text

        let translation = this.translateWords(matches, text, '.', ':')
        //

        return translation;
    }
}

module.exports = Translator;
