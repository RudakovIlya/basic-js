const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(a) {
  //Фильтруем массив и оставляем только числа больше 0. Затем сортируем по возрастанию.
  const sortArray = a.filter(item => item > 0)
    .sort((a, b) => a - b)

  return a.map(item => item > 0 ? sortArray.shift() : item)
  //Возвращаем мап массива, где проверяем если текущий элемент больше нуля, то вырезаем его из массива SortArray, а если условие не проходит, то оставляем наш элемент.
}

module.exports = {
  sortByHeight,
};
