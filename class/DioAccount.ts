export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true
  private depositValue: number = 0
  private withdrawValue: number = 0

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (depositValue: number): void => {
    this.depositValue = depositValue
    if(this.validateStatus()){
      console.log('Voce depositou R$' + depositValue.toFixed(2))
      this.balance += depositValue 
    }
  }

  withdraw = (withdrawValue:number): void => {
    this.withdrawValue= withdrawValue
    if(this.validateStatus() && this.balance>=withdrawValue){
      console.log('Voce sacou R$' + withdrawValue.toFixed(2))
      this.balance -= withdrawValue 
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
