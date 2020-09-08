package com.dollarsbank.DollarsBankbackend.Service;

import com.dollarsbank.DollarsBankbackend.dao.AccountRepository;
import com.dollarsbank.DollarsBankbackend.dao.CustomerRepository;
import com.dollarsbank.DollarsBankbackend.model.Account;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import com.dollarsbank.DollarsBankbackend.model.PendingTransaction;
import com.dollarsbank.DollarsBankbackend.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {

    @Autowired
    AccountRepository accRepo;

    @Autowired
    CustomerRepository custRepo;


    Customer customer = new Customer();
    Account account = new Account();


    public String makeTransfer(PendingTransaction transfer){

        Account from = accRepo.findById(transfer.getSourceAccId());
        Account to = accRepo.findById(transfer.getTargetAccId());

        if(from == null || to == null) {
            return "invalid does not exist";
        }

        String targetFullName = custRepo.selectNameFromCustomerById(to.getCustId());


        if (targetFullName.contains(transfer.getNameVerify())) {
           String transfer_from_memo = "Transfer to " + targetFullName + " : " + transfer.getMemo();
           if(from.subtractAmount(transfer.getAmount(), transfer_from_memo)) {
               String source_fullname = custRepo.selectNameFromCustomerById(from.getCustId());
               String transfer_to_memo = "Transfer from " + source_fullname + " : " + transfer.getMemo();
               to.addAmount(transfer.getAmount(), transfer_to_memo);

               accRepo.save(from);
               accRepo.save(to);

               return "success";


           }

        }



        return "Transaction made";
    }



}
