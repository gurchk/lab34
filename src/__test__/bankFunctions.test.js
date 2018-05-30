import {withdraw, deposit, transfer} from "../bankFunctions";

describe('Withdraw function', () => {
    test('Over withdrawal', () => {
        const user = {name: 'Greta', balance: 1200};

        function test() {
            withdraw(user, 1201);
        }

        expect(test).toThrow();
    });
    test('Withdrawal high range check', () => {
        const user = {name: 'Greta', balance: 1200};

        function test() {
            withdraw(user, 0);
        }

        expect(test).toThrow();
    });
    test('Withdrawal low range check', () => {
        const user = {name: 'Greta', balance: 1200};

        function test() {
            withdraw(user, 0);
        }

        expect(test).toThrow();
    });
    test('Input check', () => {
        const user = {};
        expect(() => withdraw(user, 123)).toThrow();
    });
    test('balance check', () => {
        let user = {name: "steve", balance: 124};
        withdraw(user, 123);
        expect(user.balance).toBe(1);
    });
    test('Shortname check', () => {
        let user = {name: "w", balance: 100};
        expect(() => withdraw(user, 50)).toThrow();
    })
});

describe('Deposit function', () => {
    it('Deposit check', () => {
        let user = {name: "steve", balance: 0};
        deposit(user, 1000);
        expect(user.balance).toBe(1000);
    });
    it('Input check', () => {
        let user = {};
        expect(() => deposit(user, 120)).toThrow();
    });
    it('input check 2', () => {
        let user = {name: "", balance: 0};
        expect(() => deposit(user, 100)).toThrow();
    })
});

describe('Transfer function', () => {
    it('Valid accounts', () => {
        let user1 = {name: "2", balance: 100};
        let user2 = {name: "StevenLeekBoi", balance: 400};
        expect(() => transfer(user1, user2, 100)).toThrow();
    });
    it('Has balance', () => {
        let user1 = {name: "2", balance: 100};
        let user2 = {name: "StevenLeekBoi", balance: 400};
        expect(() => transfer(user1, user2, 101)).toThrow();
    });
    it('Valid inputs', () => {
        let user1 = {};
        let user2 = undefined;
        expect(() => transfer(user1, user2, 100)).toThrow();
    });
    it('Transfer completed', () => {
        let user1 = {name: "Hello", balance: 100};
        let user2 = {name: "StevenLeekBoi", balance: 400};
        transfer(user1, user2, 100);
        expect(user1.balance).toBe(0);
        expect(user2.balance).toBe(500);
    });
});


//     let kalle = { name: 'Kalle', balance: 150 };
// let greta = { name: 'Greta', balance: 1200 };
// // exempel på användning:
// deposit(kalle, 200);
// withdraw(kalle, 150);
// transfer(kalle, greta, 400);
