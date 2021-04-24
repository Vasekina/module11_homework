/* Задание 2.
Выбрать любую реализованную функцию из тренажера JavaScript, раздел «Функции»
- добавить ее в репозиторий;
- продумать тест-кейсы (успешное/неуспешное выполнение функции);
- продумать корнер-кейсы;
- написать unit-тесты (минимум 3).*/
export function getPercents(percent, number) {
    let result;
    if (typeof percent != 'number' || typeof number != 'number') {
        result = 'Вы ввели не число!';
    } else {
        result = number / 100 * percent;
    }
    return result
}