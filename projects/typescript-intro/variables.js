//string, number, boolean, null, undefined
var myName = '';
myName = 'Edu';
//ARRAYS
var itens = [5, 'edu'];
;
var account = {
    name: 'Edu',
    balance: 10
};
var accounts;
var InvestmentAccount = /** @class */ (function () {
    function InvestmentAccount(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
