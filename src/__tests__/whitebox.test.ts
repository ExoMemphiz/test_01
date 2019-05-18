import { whiteBox } from '../whitebox';

describe('Testing WhiteBox', () => {

    test('Throws an error when no numbers are given', () => {
        expect(() => whiteBox([])).toThrowError("No numbers");
    });
   
    test('Throws an error when no input is given', () => {
        //@ts-ignore
        expect(() => whiteBox()).toThrowError("Cannot read property 'length' of undefined");
    });
   
    test('Throws an error when input is a number instead of an array', () => {
        //@ts-ignore
        expect(whiteBox(1)).toMatchObject({
            maximum: NaN,
            minimum: NaN
        });
    });

    test('Can run normally', () => {
        expect(whiteBox(["1", "2", "3"])).toMatchObject({maximum: 3, minimum: 1});
    });

    test('Can run normally', () => {
        expect(whiteBox(["1", "2", "3", "5", "19", "-24", "233", "14"])).toMatchObject({maximum: 233, minimum: -24});
    });

});

