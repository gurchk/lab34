import {canGetLicense} from "../getLicense";

describe('License check and value', () => {
    test('Has Params', () => {
        const testUndefined = () => {
            canGetLicense();
        };
       expect(testUndefined).toThrowError(/undefined/);
    });
    test('Valid license type', () => {
        const testLicenseType = () => {
          canGetLicense("W", 18);
        };
        expect(testLicenseType).toThrow();
    });
    test('Lowest range value', () => {
        const testRangeValue = () => {
            canGetLicense("A", -1);
        };
        expect(testRangeValue).toThrow();
    });
    test('Highest range value', () => {
        const testRangeValue = () => {
            canGetLicense("A", 121);
        };
        expect(testRangeValue).toThrow();
    });
    test('Valid number', () => {
       expect(canGetLicense('A', 120)).toBe(true);
    });
});
describe('Valid age corresponding license', () => {
   test('A check', () => {
       expect(canGetLicense('A', 23)).toBe(false);
   });
    test('A check', () => {
        expect(canGetLicense('A', 24)).toBe(true);
    });
    test('B, BE check', () => {
        expect(canGetLicense('B', 17.9)).toBe(false);
    });
    test('B, BE check', () => {
        expect(canGetLicense('BE', 18)).toBe(true);
    });
    test('C check', () => {
        expect(canGetLicense('C', 20)).toBe(false);
    });
    test('C check', () => {
        expect(canGetLicense('C', 21)).toBe(true);
    });
    test('D check', () => {
        expect(canGetLicense('D', 23)).toBe(false);
    });
    test('D check', () => {
        expect(canGetLicense('D', 24)).toBe(true);
    });
});


