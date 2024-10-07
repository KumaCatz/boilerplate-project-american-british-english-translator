'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
    const translator = new Translator();

    app.route('/api/translate').post((req, res) => {
        const { text, locale } = req.body;
        let translation;
        try {
            if (text === '') {
                return res.json({ error: 'No text to translate' });
            }

            if (!locale || !text) {
                return res.json({ error: 'Required field(s) missing' });
            }

            if (locale === 'american-to-british') {
                translation = translator.americanToBritish(text);
            } else if (locale === 'british-to-american') {
                translation = translator.britishToAmerican(text);
            } else {
                return res.json({
                    error: 'Invalid value for locale field',
                });
            }
            if (translation === text) {
                translation = 'Everything looks good to me!';
            }

            return res.json({ text, translation });
        } catch (err) {
            return res.json({ error: 'Required field(s) missing' });
        }
    });
};
