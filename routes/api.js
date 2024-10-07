'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {text, locale} = req.body
      let translation
      try {
        if (locale === 'american-to-british') {
          translation = translator.americanToBritish(text)
        } else if (locale === 'british-to-american') {
          translation = translator.britishToAmerican(text)
        } else {
          return res.json({
            error: 'ops wrong thing pal :('
          })
        }

        if (text === '' || !text) {
          translation = `<span id="error-msg">{"error":"No text to translate"}</span>`
        } else if (translation === text) {
          translation = 'Everything looks good to me!'
        }

        return res.json({text, translation})
      } catch(err) {
        return res.json({translation: `<span id="error-msg">{"error":"No text to translate"}</span>`})
      }
    });
};
