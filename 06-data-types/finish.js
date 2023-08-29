/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const someString = 'строка';
const someNumber = 1;
const someBoolean  = true;
const someNull = null;
const someUndefined = undefined;
const someObject = {
    a: 'asdf',
    b: 'fdsa'
};
const someArray = [1, 2, 3];

console.log(typeof someString);
console.log(typeof someNumber);
console.log(typeof someBoolean);
console.log(typeof someNull);
console.log(typeof someUndefined);
console.log(typeof someObject);
console.log(typeof someArray);