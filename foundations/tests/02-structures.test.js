const equalObj = require('../02-structures');

describe('objetos - comparador de objetos', () => {
    test('objetos iguales - debe comparar objetos iguales', () => {
        const obj = {aqui: {hay: "un"}, objeto: 2};
        expect(equalObj(obj, obj)).toBe(true);
    });

    test('objetos distintos - debe regresar falso en objetos distintos', () => {
        const obj = {aqui: {hay: "un"}, objeto: 2};
        expect(equalObj(obj, {aqui: {hay: 2}})).toBe(false);
    });
});
