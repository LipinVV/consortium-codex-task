import { palindrome, fibonacci, squareRoot } from '../service';

export const data = {
  tasks: [
    {
      id: 1, text: ' в чем разница между null и undefined?', answer: 'null - пустое значение, присваивается явно,\nundefined - неприсвоенное значение',
    },
    {
      id: 2, text: ' почему вывод в консоль obj.someprop.x приводит к ошибке?', answer: 'JavaScript проверяет цепочки прототипов, есть ли\nв свойстве x свойства someprop какое-то значение и\nполучает undefined из-за того, что изначально такого\nсвойства у объекта не имеется',
    },
    {
      id: 3, text: ' как проверить, является ли значение массивом?', answer: 'Воспользоваться методом Array.isArray.\nНапример Array.isArray([1,3,4]) вернёт true',
    },
    {
      id: 4, text: ' проверить, является ли целое число квадратом, не используя математические функции', answer: `const squareRoot = ${squareRoot.toString()}`,
    },
    {
      id: 5, text: ' написать функцию, которая принимает в качестве аргумента строку и возвращает значение true, если строка является палиндромом, и false, если это не так. Учитывать пробелы и знаки препинания, регистр не учитывать', answer: `const palindrome = ${palindrome.toString()}`,
    },
    {
      id: 6, text: ' напишите функцию, которая возвращает n-ую запись в последовательности Фибоначчи, где n — это число, которое вы передаёте в качестве аргумента функции', answer: `const fibonacci = ${fibonacci.toString()}`,
    },
    {
      id: 7, text: ' попробуйте проанализировать, что делает следующий код: const nums = [0, 39, 28, 34, 1, 3, 6, 8, 4, 72, 7], nums.forEach(num => {setTimeout(() => {console.log(num)}, num)})', answer: 'Числа появляются одно за другим с той задержкой (num),\nкоторая основана на значениях массива, следовательно итерирование\nвозвращает вначале самые маленькие значения и далее по возрастанию',
    },
    {
      id: 8, text: ' задача по Jquery: результат находится в папке public проекта, название файла с кодом - jquery.html. ', answer: <a href="https://github.com/LipinVV/consortium-codex-task/blob/0eb1041f61c532ed74a4436902abdac7ee0ad00b/public/jquery.html#L46" target="_blank" rel="noreferrer">Нажмите на этот текст, чтобы посмотреть файл на GitHub</a>,
    },
  ],
};
