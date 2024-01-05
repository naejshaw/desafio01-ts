import { DioAccount } from "./DioAccount"

export class NewAccount extends DioAccount {
  private valor: number = 0

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  newDeposit = (valor: number): void => {
    this.valor = valor + 10
    console.log('Voce depositou R$' + this.valor.toFixed(2))
    this.balance += this.valor 
  }

}