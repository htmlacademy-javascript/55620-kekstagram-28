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
