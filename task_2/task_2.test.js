import {getPercents} from './task_2';
describe('test for getPercents function', () => {
    it('should operate correctly with positive number and positive percent', () => {
     expect(getPercents(30, 100)).toBe(30);
    });
    it('should operate correctly with null number', () => {
     expect(getPercents(100, 0)).toBe(0);
    });
    it('should operate correctly with null percent', () => {
        expect(getPercents(0, 100)).toBe(0);
    });
    it('should operate correctly, if percent is not a number', () => {
        expect(getPercents('тест', 100)).toBe('Вы ввели не число!');
    });
    it('should operate correctly, if number is not a number', () =>
        expect(getPercents(30, 'тест')).toBe('Вы ввели не число!'));
})
