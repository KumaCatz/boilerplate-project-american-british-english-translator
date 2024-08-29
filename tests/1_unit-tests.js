const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator;

suite('Unit Tests', () => {
  suite('Translate to British English', () => {
    test('Mangoes are my favorite fruit.', () => {
      assert.equal(translator.americanToBritish('Mangoes are my favorite fruit.'), 'Mangoes are my favourite fruit.')
    })
    test('I ate yogurt for breakfast.', () => {
      assert.equal(translator.americanToBritish('I ate yogurt for breakfast.'), 'I ate yoghurt for breakfast.')
    })
    test("We had a party at my friend's condo.", () => {
      assert.equal(translator.americanToBritish("We had a party at my friend's condo.", "We had a party at my friend's flat."))
    })
  })
  // Translate Can you toss this in the trashcan for me? to British English
  // Translate The parking lot was full. to British English
  // Translate Like a high tech Rube Goldberg machine. to British English
  // Translate To play hooky means to skip class or work. to British English
  // Translate No Mr. Bond, I expect you to die. to British English
  // Translate Dr. Grosh will see you now. to British English
  // Translate Lunch is at 12:15 today. to British English
  // Translate We watched the footie match for a while. to American English
  // Translate Paracetamol takes up to an hour to work. to American English
  // Translate First, caramelise the onions. to American English
  // Translate I spent the bank holiday at the funfair. to American English
  // Translate I had a bicky then went to the chippy. to American English
  // Translate I've just got bits and bobs in my bum bag. to American English
  // Translate The car boot sale at Boxted Airfield was called off. to American English
  // Translate Have you met Mrs Kalyani? to American English
  // Translate Prof Joyner of King's College, London. to American English
  // Translate Tea time is usually around 4 or 4.30. to American English
  // Highlight translation in Mangoes are my favorite fruit.
  // Highlight translation in I ate yogurt for breakfast.
  // Highlight translation in We watched the footie match for a while.
  // Highlight translation in Paracetamol takes up to an hour to work.
});
