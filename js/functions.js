/*Функция для проверки длины строки

@example имя_функции('проверяемая строка', 20); // Результат: true - строка проходит по длине
*/
function checkStringLength(str, length) {
  if (str.length === length) {
    return true;
  }
  return false;
}

checkStringLength('проверяемая строка 1', 20);
checkStringLength('проверяемая строка', 10);

/*Функция для проверки, является ли строка палиндромом

@example polindromeChecker('топот'); // Результат: true - строка является палиндромом
@example polindromeChecker('Кекс');  // Результат: false - это не палиндром
*/

function polindromeChecker(str) {
  const comparedStr = str.replaceAll(' ', '').toLowerCase().split('').reverse().join('');
  const baseStr = str.replaceAll(' ', '').toLowerCase();
  return (comparedStr === baseStr);
}

polindromeChecker('Лёша на полке клопа нашёл ');
polindromeChecker('А роза упала на лапу Азора');
polindromeChecker('Кекс');
polindromeChecker('ДовОд');


/*Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

@example getNumber('2023 год');            // Результат: число 2023
@example getNumber('1 кефир, 0.5 батона'); // Результат: число 105
@example getNumber('а я томат');           // Результат: NaN
@example getNumber(2023); // Результат: число 2023
*/


function getNumber(param) {
  if (typeof param === 'number') {
    return param;
  }
  const paramEdit = parseInt(param.replace(/[^\d]/g, ''), 10);
  return paramEdit;
}

getNumber('2023 год');
getNumber('1 кефир, 0.5 батона');
getNumber('а я томат');
getNumber(2023);
