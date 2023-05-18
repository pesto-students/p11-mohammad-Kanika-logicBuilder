class BankingId {
    #idNo = 0;
  
    // Function to generate unique transaction IDs
    generateTransactionId() {
      // Increment the private idNo field to get the next transaction number
      this.#idNo++;
  
      // Create a unique string for the transaction ID by concatenating a constant string with the transaction number
      const transactionIdString = `TRANSACTION_ID_${this.#idNo}`;
  
      // Create a new symbol using the transaction ID string
      const transactionId = Symbol(transactionIdString);
  
      return transactionId;
    }
  }
  
  // Create an instance of BankingId
  let bankingId = new BankingId();
  
  // Example usage:
  const transaction1 = bankingId.generateTransactionId();
  console.log(transaction1); // Symbol(TRANSACTION_ID_1)
  
  const transaction2 = bankingId.generateTransactionId();
  console.log(transaction2); // Symbol(TRANSACTION_ID_2)
  
  const transaction3 = bankingId.generateTransactionId();
  console.log(transaction3); // Symbol(TRANSACTION_ID_3)
  