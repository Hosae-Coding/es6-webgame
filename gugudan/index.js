document.querySelector('#click').addEventListener('click', () => {
   const a = document.querySelector('#first').value;
   const b = document.querySelector('#second').value;

   if (a) {
      if (b) {
         document.querySelector('#result').textContent = a * b;
      } else {
         document.querySelector('#result').textContent = '두번째 값입력';
      }
   } else {
      document.querySelector('#result').textContent = '첫번째값 입력';
   }
});
