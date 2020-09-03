package com.dollarsbank.DollarsBankbackend.Service;

import com.dollarsbank.DollarsBankbackend.dao.AccountRepository;
import com.dollarsbank.DollarsBankbackend.dao.CustomerRepository;
import com.dollarsbank.DollarsBankbackend.model.Account;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TestAccountService extends Customer{

    @Autowired
    AccountRepository accRepo;


    @Autowired
    CustomerRepository custRepo;



    public String AcctAdd(Account account) {

        Account newAccount = new Account();

        if (!accRepo.existsByCustIdAndAccountName(account.getCustId(),account.getAccountName())) {
            newAccount = accRepo.save(new Account(account.getCustId(),account.getAccountName(), account.getAccType(), account.getBalance(), account.getTransactions()));
        }
        return "account added";




    }




}
