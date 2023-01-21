const someString = 'This is some strange string';

/*function reverse(str) {

   return str.split('').reverse().join('');
}
*/

const reverse = (str => typeof str === 'string' ? 
                        str.split('').reverse().join('') 
                        : 'Ошибка!');

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
   let finalStr = arr.length === 0 ? 'Нет доступных валют' : 'Доступные валюты:\n';
   for (let item of arr) {
      if (item !== missingCurr) {
         finalStr += `${item}\n`;
      }
   }
   return finalStr;
}

console.log(isNaN(-12));