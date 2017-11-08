const invert = require('../01-flow');

describe('flow control - ciclos', () => {
    test('invertir un arreglo - debe regresar el arreglo invertido correctamente', () => {
        expect(invert([1,2,3,4])).toEqual([4,3,2,1]);
    });

    test('invertir un arreglo - debe regresar el arreglo invertido correctamente con numeros negativos', () => {
        expect(invert([1,-2,3,4])).toEqual([4,3,-2,1]);
    });
});
