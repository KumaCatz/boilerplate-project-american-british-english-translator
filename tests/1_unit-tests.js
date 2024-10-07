const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator;

suite('Unit Tests', () => {
  suite('Translate to British English', () => {
    test('Mangoes are my favorite fruit.', () => {
      assert.equal(translator.americanToBritish('Mangoes are my favorite fruit.'), 'Mangoes are my <span class="highlight">favourite</span> fruit.')
    })
    test('I ate yogurt for breakfast.', () => {
      assert.equal(translator.americanToBritish('I ate yogurt for breakfast.'), 'I ate <span class="highlight">yoghurt</span> for breakfast.')
    })
    test("We had a party at my friend's condo.", () => {
      assert.equal(translator.americanToBritish(`We had a party at my friend's condo.`), `We had a party at my friend's <span class="highlight">flat</span>.`)
    })
    test('Can you toss this in the trashcan for me?', () => {
      assert.equal(translator.americanToBritish('Can you toss this in the trashcan for me?'), 'Can you toss this in the <span class="highlight">bin</span> for me?')
    })
    test('The parking lot was full.', () => {
      assert.equal(translator.americanToBritish('The parking lot was full.'), 'The <span class="highlight">car park</span> was full.')
    })
    test('Like a high tech Rube Goldberg machine.', () => {
      assert.equal(translator.americanToBritish('Like a high tech Rube Goldberg machine.'), 'Like a high tech <span class="highlight">Heath Robinson device</span>.')
    })
    test('To play hooky means to skip class or work.', () => {
      assert.equal(translator.americanToBritish('To play hooky means to skip class or work.'), 'To <span class="highlight">bunk off</span> means to skip class or work.')
    })
    test('No Mr. Bond, I expect you to die.', () => {
      assert.equal(translator.americanToBritish('No Mr. Bond, I expect you to die.'), 'No <span class="highlight">Mr</span> Bond, I expect you to die.')
    })
    test('Dr. Grosh will see you now.', () => {
      assert.equal(translator.americanToBritish('Dr. Grosh will see you now.'), '<span class="highlight">Dr</span> Grosh will see you now.')
    })
    test('Lunch is at 12:15 today.', () => {
      assert.equal(translator.americanToBritish('Lunch is at 12:15 today.'), 'Lunch is at <span class="highlight">12.15</span> today.')
    })
  })
  // suite('Translate to American English', () => {
  //   test('We watched the footie match for a while.', () => {
  //     assert.equal(translator.britishToAmerican('We watched the footie match for a while.'), '')
  //   })
  //   test('Paracetamol takes up to an hour to work.', () => {
  //     assert.equal(translator.britishToAmerican('Paracetamol takes up to an hour to work.'), '')
  //   })
  //   test('First, caramelise the onions.', () => {
  //     assert.equal(translator.britishToAmerican('First, caramelise the onions.'), '')
  //   })
  //   test('I spent the bank holiday at the funfair.', () => {
  //     assert.equal(translator.britishToAmerican('I spent the bank holiday at the funfair.'), '')
  //   })
  //   test('I had a bicky then went to the chippy.', () => {
  //     assert.equal(translator.britishToAmerican('I had a bicky then went to the chippy.'), '')
  //   })
  //   test("I've just got bits and bobs in my bum bag.", () => {
  //     assert.equal(translator.britishToAmerican("I've just got bits and bobs in my bum bag."), '')
  //   })
  //   test('The car boot sale at Boxted Airfield was called off.', () => {
  //     assert.equal(translator.britishToAmerican('The car boot sale at Boxted Airfield was called off.'), '')
  //   })
  //   test('Have you met Mrs Kalyani?', () => {
  //     assert.equal(translator.britishToAmerican('Have you met Mrs Kalyani?'), '')
  //   })
  //   test("Prof Joyner of King's College, London.", () => {
  //     assert.equal(translator.britishToAmerican("Prof Joyner of King's College, London."), '')
  //   })
  //   test('Tea time is usually around 4 or 4.30.', () => {
  //     assert.equal(translator.britishToAmerican('Tea time is usually around 4 or 4.30.'), '')
  //   })
  //   test('Mangoes are my favorite fruit.', () => {
  //     assert.equal(translator.britishToAmerican('Mangoes are my favorite fruit.'), '')
  //   })
  //   test('I ate yogurt for breakfast.', () => {
  //     assert.equal(translator.britishToAmerican('I ate yogurt for breakfast.'), '')
  //   })
  //   test('We watched the footie match for a while.', () => {
  //     assert.equal(translator.britishToAmerican('We watched the footie match for a while.'), '')
  //   })
  //   test('Paracetamol takes up to an hour to work.', () => {
  //     assert.equal(translator.britishToAmerican('Paracetamol takes up to an hour to work.'), '')
  //   })
  // })
});
