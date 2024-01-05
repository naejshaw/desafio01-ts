import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  private loanValue: number = 0

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanValue: number, status: boolean): void => {
    if(status){
      this.loanValue = loanValue
      console.log('Voce pegou um empréstimo de R$' + loanValue.toFixed(2))
      this.balance += loanValue
      console.log('Seu saldo atual é de R$' + this.balance.toFixed(2))
    }
  }
}
