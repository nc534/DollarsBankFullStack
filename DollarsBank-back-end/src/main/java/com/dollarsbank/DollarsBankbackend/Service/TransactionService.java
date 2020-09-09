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


    public String deposit(PendingTransaction deposit) {

        Account makeDeposit = accRepo.findById(deposit.getTargetAccId());

        String deposit_memo = "Local deposit : " + deposit.getMemo();

        if (makeDeposit == null) {
            return "invalid does not exist";
        }

        if(makeDeposit.addAmount(deposit.getAmount(), deposit_memo)) {



            accRepo.save(makeDeposit);


        }

        else {
            return "failed to deposit";
        }

        return "Deposit done";

    }

    public String withdrawal(PendingTransaction withdrawal) {

        Account makeWithdrawal = accRepo.findById(withdrawal.getSourceAccId());

        String withdrawal_memo = "Local withdrawal : " + withdrawal.getMemo();

        if (makeWithdrawal == null) {
            return "invalid does not exist";

        }

        if(makeWithdrawal.subtractAmount(withdrawal.getAmount(), withdrawal_memo)) {
            accRepo.save(makeWithdrawal);

        }

        else{
            return "failed to withdraw";
        }

        return "success";
    }



}
