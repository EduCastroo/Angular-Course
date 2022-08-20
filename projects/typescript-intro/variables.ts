//string, number, boolean, null, undefined
let myName = '';
myName = 'Edu'; 

//ARRAYS
let itens = [5, 'edu'];

interface IAccount{
    name: string,
    balance: number,
    status?: string
    deposit?: () => void
};
const account: IAccount = {
    name: 'Edu',
    balance: 10
}

let accounts: IAccount[];


class InvestmentAccount implements IAccount{
    constructor(
        public name, public balance
    ){

    }

    private withdraw(){

    }
}