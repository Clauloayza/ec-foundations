const powerOfTwo = require('../00-flow');

describe('flow control - ciclos', () => {
    test('obtener potencia de 2 - debe regresar la potencia correcta', () => {
        expect(powerOfTwo(10)).toBe(1024);
    });

    test ('obtener potencia de 2 - debe transformar los numeros negativos en positivos', () => {
        expect(powerOfTwo(-10)).toBe(1024);
    });
});
