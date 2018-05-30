// canGetLicense(license, age) är en funktion som svarar på frågan: är jag tillräckligt gammal för att ta ett körkort av en viss typ?
//     Om båda parametrarna har tillåtna värden så ska funktionen returnera antingen true eller false.
// Annars ska funktionen kasta ett Error med throw.
// Tillåtna värden på license är alla strängar som matchar en licenstyp i tabellen nedan.
//     Tillåtna värden på age är alla åldrar som är ett Number i intervallet 0 <= x <= 120.
//
// Licenstyp
// A
// B, BE
// C
// D
// Lägsta ålder
// 24
// 18
// 21
// 24


export function canGetLicense(license, age) {
    let licenses = [{type: 'A', age: 24}, {type: 'B', age: 18}, {type: 'BE', age: 18}, {type: 'C', age: 21}, {
        type: 'D',
        age: 24
    }];
    if (typeof(license) !== 'string' || typeof(age) !== 'number') {
        throw new Error('Parameters undefined');
    }
    let licenseObj = licenses.find(x => x.type === license);
    if (!licenseObj) {
        throw new Error('That is not a valid license');
    }
    if (age < 0 || age > 120) {
        throw new Error('Age outside range');
    }
    return age >= licenseObj.age;


}



