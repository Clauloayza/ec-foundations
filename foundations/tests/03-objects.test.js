const getTrueNumbers = require('../03-objects');

describe('objectos - expresiones regulares', () => {
    test('expresiones regulares - debe regresar los que sí son números', () => {
        const numArray = [1,'2', '-1', '1.2.3', '1+', '.5.'];
        expect(getTrueNumbers(numArray)).toEqual([1,'2', '-1']);
    });
});
