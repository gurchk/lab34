// Tänk dig att någon har skrivit ett betalningssystem för en bank. Dessvärre tänkte inte första utvecklaren på att använda TDD, så det finns inga testfall. Din uppgift är att skriva testfall för alla tre funktionerna i koden nedan. Observera att första utvecklaren var en total noob, så det kan finnas buggar i koden. På VG-nivå ska du dessutom skriva klart funktionerna och rätta felen.
//
//     Allmänt gäller att om funktionerna anropas med tillåtna värden på sina parametrar så ska de åstadkomma side effects på parametrarna. Funktionerna ska inte returnera något.
//     Men om man försöker ta ut eller överföra mer pengar än det finns på kontot, då ska funktionen kasta ett Error.
//
//     let kalle = { name: 'Kalle', balance: 150 };
// let greta = { name: 'G
// reta', balance: 1200 };
// // exempel på användning:
// deposit(kalle, 200);
// withdraw(kalle, 150);
// transfer(kalle, greta, 400);

export function deposit(account, amount) {
    if (
        !account.hasOwnProperty('name') ||
        typeof(amount) !== 'number' ||
        amount <= 0 ||
        account.name.length <= 1
    ) {
        throw new Error('Not valid input');
    }

    account.balance += amount;
}

export function withdraw(account, amount) {
    if (
        typeof(account) !== 'object' ||
        !account.hasOwnProperty("name") ||
        !account.hasOwnProperty("balance") ||
        typeof(amount) !== 'number' ||
        amount <= 0 ||
        account.name.length <= 1
    ) {
        throw new Error('Wrong input');
    }
    if (account.balance <= amount) {
        throw new Error('Not enough funds');
    }
    account.balance -= amount;
}

export function transfer(accountSender, accountReceiver, amount) {
    if (
        typeof(accountSender) !== 'object' ||
        typeof(accountReceiver) !== 'object' ||
        typeof(amount) !== 'number' ||
        amount <= 0 ||
        !accountSender.hasOwnProperty('name') ||
        !accountReceiver.hasOwnProperty('name') ||
        accountSender.name.length <= 1 ||
        accountReceiver.name.length <= 1
    ) {
        throw new Error('Wrong input');
    }
    accountSender.balance -= amount;
    accountReceiver.balance += amount;
}

