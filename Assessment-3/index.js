//BankAccount base class
class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
      this._accountNumber = accountNumber;
      this._accountHolder = accountHolder;
      this._balance = balance;
    }
  
    get accountNumber() {
      return this._accountNumber;
    }
  
    get accountHolder() {
      return this._accountHolder;
    }
  
    get balance() {
      return this._balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this._balance += amount;
        console.log(`Deposited Ksh.${amount} into ${this._accountNumber}`);
      } else{
        console.log(`Amount should be greater than 0.`)
      }
    }
  
    withdraw(amount) {
      if (this._balance >= amount) {
        this._balance -= amount;
        console.log(`Withdrawn Ksh.${amount} from account ${this._accountNumber}`);
      } else {
        console.log(`Insufficient balance in account ${this._accountNumber}`);
      }
    }
  }
  
  // SavingsAccount class
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, interestRate) {
      super(accountNumber, accountHolder, balance);
      this._interestRate = interestRate;
    }
  
    get interestRate() {
      return this._interestRate;
    }
  
    set interestRate(rate) {
      if (rate >= 0) {
        this._interestRate = rate;
      }
    }
  
    calculateInterest() {
      const interestAmount = this._balance * this._interestRate;
      console.log(`Interest amount for account ${this._accountNumber}: Ksh.${interestAmount}`);
      return interestAmount;
    }
  }
  
  // CheckingAccount Class
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, overdraftLimit) {
      super(accountNumber, accountHolder, balance);
      this._overdraftLimit = overdraftLimit;
    }
  
    get overdraftLimit() {
      return this._overdraftLimit;
    }
  
    set overdraftLimit(limit) {
      this._overdraftLimit = limit;
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this._balance + this._overdraftLimit) {
        this._balance -= amount;
        console.log(`Withdrew Ksh.${amount} from account ${this._accountNumber}`);
      } else {
        console.log(`Withdrawal amount exceeds overdraft limit for account ${this._accountNumber}`);
      }
    }
  }

  const savingsAccount = new SavingsAccount("Test0234", "Bake", 10000, 1.5);
  const checkingAccount = new CheckingAccount("Test4567", "John", 8000, 300);
  
  // Retrieve account information (account number, account holder, balance).
  console.log("Savings Account Information:");
  console.log("Account Number:", savingsAccount.accountNumber);
  console.log("Account Holder:", savingsAccount.accountHolder);
  console.log("Balance:", savingsAccount.balance);

  // Account Information for Checking Account
  console.log("\nChecking Account Information:");
  console.log("Account Number:", checkingAccount.accountNumber);
  console.log("Account Holder:", checkingAccount.accountHolder);
  console.log("Balance:", checkingAccount.balance);

  // Deposit into both accounts
  savingsAccount.deposit(1000);
  checkingAccount.deposit(2000);
  
  // Withdraw from both accounts
  savingsAccount.withdraw(13200);
  checkingAccount.withdraw(4900);
  
  // Calculate interest for SavingsAccount
  savingsAccount.calculateInterest();