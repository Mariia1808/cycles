import { walkUpBindingElementsAndPatterns } from 'typescript';

/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let summa = 0;
    for (let i = start; i < end + 1; i++) {
        if (i % 2 === 0) {
            summa += i;
        }
    }
    return summa;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let i = 0;
    while (a > 0.1) {
        a = a / 2;
        i++;
    }
    return i;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let textArray = message.split('');
    let length = 0;
    do {
        length += 3;
        textArray[length - 1] = '_';
    } while (length <= textArray.length - 3);
    message = textArray.join('');
    return message;
}
