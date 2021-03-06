// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
} console.log(compareTrue(false, true));

console.log('==================================================');

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return base * height / 2;
} console.log(calcArea(10, 50));

console.log('==================================================');

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = [];
  let palavra = '';
  for (let caractere = 0; caractere < string.length; caractere += 1) {
    if (string[caractere] !== ' ') {
      palavra = palavra + string[caractere];
    } else {
      array.push(palavra);
      palavra = '';
    }
  }
  array.push(palavra);
  return array;
} console.log(splitSentence("go Trybe"));

console.log('==================================================');

// Desafio 4
function concatName(array) {
  // seu código aqui
  let nomes = array[array.length-1] + ', ' + array[0];

  return nomes;
} console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

console.log('==================================================');

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
} console.log(footballPoints(14, 8));

console.log('==================================================');

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior=array[0];
  let cont = 0;
  for (let index=0; index < array.length; index +=1) {
      if (maior<array[index]) {
          maior=array[index];
      }
  }
  for (let index=0; index < array.length; index +=1) {
    if (array[index] === maior) {
      cont += 1;
    }
  }
  return cont;
} console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

console.log('==================================================');

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return 'cat1';
  }
} console.log(catAndMouse(0, 2, 3));

console.log('==================================================');

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let bzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      bzz.push('fizzBuzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      bzz.push('fizz');
    } else if (array[index] % 3 !== 0 && array[index] % 5 === 0) {
      bzz.push('buzz');
    } else {
      bzz.push('bug!');
    }
  }
  return bzz;
} console.log(fizzBuzz([2, 15, 7, 9, 45]));

console.log('==================================================');

// Desafio 9
function encode(string) {
  // seu código aqui
  let referencia = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  let encoded = '';
  for (let index in string) {
    if (string[index] === 'a' || string[index] === 'e' || string[index] === 'i' || string[index] === 'o' || string[index] === 'u') {
      encoded = encoded + referencia[string[index]];
    } else {
      encoded = encoded + string[index];
    }
  }
  return encoded;
} console.log(encode('hi there!'));

function decode(string) {
  // seu código aqui
  let referencia = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  let decoded = '';
  for (let index in string) {
    if (string[index] === '1' || string[index] === '2' || string[index] === '3' || string[index] === '4' || string[index] === '5') {
      decoded = decoded + referencia[string[index]];
    } else {
      decoded = decoded + string[index];
    }
  }
  return decoded;
} console.log(decode('h3 th2r2!'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
