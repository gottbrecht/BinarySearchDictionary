const fs = require('fs');

function createWordObject(line) {
  const [inflectedForm, headword, homographNumber, partOfSpeech, uniqueId] = line.split('\t');

  return {
    form: inflectedForm,
    headword: headword,
    homographNumber: homographNumber,
    partOfSpeech: partOfSpeech,
    uniqueId: uniqueId,
  };
}

const data = fs.readFileSync('./data/DDO_fullforms.txt', 'utf-8');
const lines = data.split('\n');

const wordsArray = lines.map(line => createWordObject(line));// array of objects

const searchInflectedForm = 'desired_inflection'; //simulate searching
console.time('Search Time');
const searchResult = wordsArray.filter(word => word.form === searchInflectedForm);
console.timeEnd('Search Time');

console.log('Search Result:', searchResult);


console.time('JavaScript .find Time'); //compareswith build ind .find method
const jsFindResult = wordsArray.find(word => word.form === searchInflectedForm);
console.timeEnd('JavaScript .find Time');

console.log('JavaScript .find Result:', jsFindResult);
