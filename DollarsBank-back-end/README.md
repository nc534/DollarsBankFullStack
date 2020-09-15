## Accessing the database

### Customer Data
Types:
  id              long      Customer specific id given by SQL server on creation  
  username        String    Username of Customer, used to log in  
  password        String    Password of Customer, used to log in  
  name            String    Full Name of Customer, used in verifying transfers  
  address         String    Mailing address of Customer  
  contactNumber   String    Phone number of Customer

#### Obtain Customer
url:          http://localhost:8080/login  
method:       POST  
json inputs:  username, password

#### Register Customer
url:          http://localhost:8080/signup  
method:       POST  
json input:   username, password, name, address, contactNumber

#### Delete Customer
url:          http://localhost:8080/deleteUser  
method:       DELETE  
json input:   id, username, password

### Account Data
Types:
  custId          long      Customer specific id given by SQL server on creation, used by Accounts to track owner  
  accountName     String    Name of Account given by Customer, unique to each Customer  
  accType         enum      "CHECKING" or "SAVINGS" for such Accounts respectively

#### Obtain All Accounts Of A Customer
url:          http://localhost:8080/showAllAcct/{custId}  
method:       GET

#### Obtain Account
url:          http://localhost:8080/showAcct/{custId}/{accountName}  
method:       GET

#### Add Account
url:          http://localhost:8080/addacct  
method:       POST  
json input:   custId, accountName, accType

#### Delete Account
url:          http://localhost:8080/deleteAcct  
method:       DELETE  
json input:   custId, accountName

### Perform Transaction
Types:
  sourceAccId     long      Account specific id given by SQL server on creation, this is for 'sender' Accounts  
  targetAccId     long      Account specific id given by SQL server on creation, this is for 'recipient' Accounts  
  amount          long      The sum of money, in pennies, that is part of the transaction  
  nameVerify      String    Some or all of the full name of the recipient, used to ensure correctnes on the part of the 'sender'  
  memo            String    A message or memo a Customer has provided as an explanation of the transaction
  
#### Deposit
url:          http://localhost:8080/makeDeposit  
method:       POST  
json input:   targetAccId, amount, memo

#### Withdraw
url:          http://localhost:8080/makeWithdrawal  
method:       POST  
json input:   sourceAccId, amount, memo

#### Transfer
url:          http://localhost:8080/makeTransfer  
method:       POST  
json input:   sourceAccId, targetAccId, nameVerify, amount, memo

## Encryption

The only variable that is ever encrypted is Customer.password, and the only time it is expected to be unencrypted is on Customer registration, at which point the encryption is applied. After that, all operations which take the password must use the encrypted variant.