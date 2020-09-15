## Accessing the database

### Customer Data
| Name | Type | Description |
| --- | --- | ---|
| id            | long   | Customer specific id given by SQL server on creation | 
| username      | String | Username of Customer, used to log in                 |
| password      | String | Password of Customer, used to log in                 |
| name          | String | Full Name of Customer, used in verifying transfers   |
| address       | String | Mailing address of Customer                          |
| contactNumber | String | Phone number of Customer                             |

#### Obtain Customer
| url | method| json inputs |
| --- | --- | --- |
| http://localhost:8080/login | POST | username, password |

#### Register Customer
| url | method| json inputs |
| --- | --- | --- |
| http://localhost:8080/signup | POST | username, password, name, address, contactNumber |

#### Delete Customer
| url | method| json inputs |
| --- | --- | --- |
| http://localhost:8080/deleteUser | DELETE | id, username, password |

### Account Data
| Name | Type | Description |
| --- | --- | --- |
| custId      | long   | Customer specific id given by SQL server on creation, used by Accounts to track owner |
| accountName | String | Name of Account given by Customer, unique to each Customer                            |
| accType     | enum   | "CHECKING" or "SAVINGS" for such Accounts respectively                                |

#### Obtain All Accounts Of A Customer
| url | method|
| --- | --- |
| http://localhost:8080/showAllAcct/{custId} | GET |

#### Obtain Account
| url | method|
| --- | --- |
| http://localhost:8080/showAcct/{custId}/{accountName} | GET |

#### Add Account
| url | method| json inputs |
| --- | --- | --- |
| http://localhost:8080/addacct | POST | custId, accountName, accType |

#### Delete Account
| url | method| json inputs |
| --- | --- | --- |
| http://localhost:8080/deleteAcct | DELETE | custId, accountName |

### Perform Transaction
| Name | Type | Description |
| --- | --- | --- |
| sourceAccId | long   | Account specific id given by SQL server on creation, this is for 'sender' Accounts                   |
| targetAccId | long   | Account specific id given by SQL server on creation, this is for 'recipient' Accounts                |
| amount      | long   | The sum of money, in pennies, that is part of the transaction                                        |
| nameVerify  | String | Some or all of the full name of the recipient, used to ensure correctnes on the part of the 'sender' |
| memo        | String | A message or memo a Customer has provided as an explanation of the transaction                       |
                                                                                                                              |
#### Deposit
| url | method| json inputs |
| --- | --- | --- |
| http://localhost:8080/makeDeposit | POST | targetAccId, amount, memo |

#### Withdraw
| url | method| json inputs |
| --- | --- | --- |
| http://localhost:8080/makeWithdrawal | POST | sourceAccId, amount, memo |

#### Transfer
| url | method| json inputs |
| --- | --- | --- |
| http://localhost:8080/makeTransfer | POST | sourceAccId, targetAccId, nameVerify, amount, memo |

## Encryption

The only variable that is ever encrypted is Customer.password, and the only time it is expected to be unencrypted is on Customer registration, at which point the encryption is applied. After that, all operations which take the password must use the encrypted variant.