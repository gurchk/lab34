import {toFarenheit} from "../toFarenheit";

describe("Farenheit test", () => {
    test("Number to farenheit", () => {
        expect(toFarenheit(1)).toBe(33.8);
    });
    test("Stringconvert to farenheit", () => {
        expect(toFarenheit("1")).toBe(33.8);
    });
    test("Randomstring should be NaN", () => {
        expect(toFarenheit("Hallå")).toBeFalsy();
    });
    test("Array to farenheit", () => {
        expect(toFarenheit([1, 2])).toBeFalsy();
    });
    test("Absolute zero", () => {
        expect(toFarenheit(-273.16)).toBeFalsy();
    });
    test("Infinity", () => {
        expect(toFarenheit(Infinity)).toBeFalsy();
    });
    test("Undefined", () => {
        expect(toFarenheit()).toBeFalsy();
    });
});

