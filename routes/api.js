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
        }
        return res.json({text, translation})
      } catch(err) {
        return res.send(err)
      }
    });
};
