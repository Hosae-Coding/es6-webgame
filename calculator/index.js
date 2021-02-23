const numberInput = document.querySelector('#input');
const clearButton = document.querySelector('#clear');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const calculateButton = document.querySelector('#calculate');
const resultInput = document.querySelector('#result');

let temp;
let operator;

plusButton.addEventListener('click', () => {
   if (numberInput.value) {
      temp = Number(numberInput.value);
      operator = '+';
      numberInput.value = null;
      resultInput.value = null;
   }
});
minusButton.addEventListener('click', () => {
   if (numberInput.value) {
      temp = Number(numberInput.value);
      operator = '-';
      numberInput.value = null;
      resultInput.value = null;
   }
});
multiplyButton.addEventListener('click', () => {
   if (numberInput.value) {
      temp = Number(numberInput.value);
      operator = '*';
      numberInput.value = null;
      resultInput.value = null;
   }
});
divideButton.addEventListener('click', () => {
   if (numberInput.value) {
      temp = Number(numberInput.value);
      operator = '/';
      numberInput.value = null;
      resultInput.value = null;
   }
});

clearButton.addEventListener('click', () => {
   numberInput.value = '';
   temp = null;
   operator = null;
});

calculateButton.addEventListener('click', () => {
   if (operator) {
      if (operator === '+') {
         resultInput.value = temp + Number(numberInput.value);
      } else if (operator === '-') {
         resultInput.value = temp - Number(numberInput.value);
      } else if (operator === ' *') {
         resultInput.value = temp * Number(numberInput.value);
      } else if (operator === '/') {
         resultInput.value = temp / Number(numberInput.value);
      }
   } else {
      if (numberInput.value) {
         resultInput.value = temp;
      }
   }
});
