//Функция для проверки длины строки
/*@example имя_функции('проверяемая строка', 20); // Результат: true - строка проходит по длине
*/
function checkStringLength(str, length) {
  if (str.length === length) {
    return true;
  }
  return false;
}

checkStringLength('проверяемая строка 1', 20);
checkStringLength('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом
/*
@example polindromeChecker('топот'); // Результат: true - строка является палиндромом
@example polindromeChecker('Кекс');  // Результат: false - это не палиндром
*/

function polindromeChecker(str) {
  const originalStr = str.trim().toLowerCase().split('').reverse();
  const baseStr = str.trim().toLowerCase().split(' ').join('');
  let resultStr = '';
  for (let i = 0; i < originalStr.length; i++) {
    if (originalStr[i] !== ' ') {
      resultStr += originalStr[i];
    }
  }

  return (resultStr === baseStr);
}

polindromeChecker('Лёша на полке клопа нашёл ');
polindromeChecker('А роза упала на лапу Азора');
polindromeChecker('Кекс');
polindromeChecker('ДовОд');
