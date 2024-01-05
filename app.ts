import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount';
import { NewAccount } from './class/NewAccount'
import { PeopleAccount } from './class/PeopleAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.setName('Marcos')
peopleAccount.getBalance()
peopleAccount.deposit(1250)
peopleAccount.withdraw(2000)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getBalance()
companyAccount.deposit(250)
// companyAccount.getLoan(3000, true)
companyAccount.getLoan(1000, false)
companyAccount.withdraw(100)
console.log(companyAccount)

const newAccount: NewAccount = new NewAccount('Jean', 30)
newAccount.getBalance()
newAccount.newDeposit(500)
newAccount.withdraw(500)
console.log(newAccount)