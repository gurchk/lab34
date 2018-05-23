export function toFarenheit(degrees) {
    if (degrees < -273.15 || degrees === Infinity || degrees === -Infinity ) {
        return NaN;
    }
    return degrees * 9 / 5 + 32;
}
