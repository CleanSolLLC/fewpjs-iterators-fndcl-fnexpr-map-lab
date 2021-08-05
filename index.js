const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  let newArray = tutorials.map(titleCase);
  return newArray;
}

function titleCase(tutorial) {
  let newStringArray = [];
    let stringArray = tutorial.split(" ")
    stringArray.map(function(phrase) {
      let firstLetter = phrase[0].toUpperCase();
      let wordTrunc = phrase.slice(1); 
      let word = firstLetter + wordTrunc;
      newStringArray.push(word);
    });
    return newStringArray.join(" ")
}