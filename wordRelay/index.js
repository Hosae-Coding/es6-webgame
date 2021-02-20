const btn = document.querySelector('#button');

btn.addEventListener('click', () => {
   let wordTag = document.querySelector('#word');
   let word = wordTag.textContent;

   let inputTag = document.querySelector('#input');
   let errorTag = document.querySelector('#error');
   let input = inputTag.value;
   if (word[word.length - 1] === input[0]) {
      wordTag.textContent = input;
      errorTag.textContent = '';
      inputTag.value = '';
      inputTag.focus();
   } else {
      errorTag.textContent = '땡';
      inputTag.value = '';
      inputTag.focus();
   }
});
