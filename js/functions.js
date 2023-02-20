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

/* Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.

// Добавочный символ использован один раз
@example stringProcessor('1', 2, '0');      // Результат: строка '01'
// Добавочный символ использован три раза
@example stringProcessor('1', 4, '0');      // Результат: строка '0001'
// Добавочные символы обрезаны с конца
@example stringProcessor('q', 4, 'werty');  // Результат: строка 'werq'
// Добавочные символы использованы полтора раза
@example stringProcessor('q', 4, 'we');     // Результат: строка 'wweq'
// Добавочные символы не использованы, исходная строка не изменена
@example stringProcessor('qwerty', 4, '0'); // Результат: строка 'qwerty'
*/


function stringProcessor(str, minLength, addition) {
  if (str.length >= minLength) {
    return str;
  }
  const numberOfAddition = minLength / addition.length;
  while (str.length < numberOfAddition) {
    str = addition + str;
  }
  if (str.length < minLength) {
    const index = minLength - str.length;
    const residue = addition.slice(0, index);
    str = residue + str;
  }
  return str;
}

stringProcessor('1', 2, '0');// Результат: строка '01'
stringProcessor('1', 4, '0');// Результат: строка '0001'
stringProcessor('q', 4, 'werty');// Результат: строка 'werq'
stringProcessor('q', 4, 'we');// Результат: строка 'wweq'
stringProcessor('qwerty', 4, '0'); // Результат: строка 'qwerty'
