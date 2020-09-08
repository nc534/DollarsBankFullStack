package com.dollarsbank.DollarsBankbackend.Service;

import com.dollarsbank.DollarsBankbackend.dao.AccountRepository;
import com.dollarsbank.DollarsBankbackend.dao.CustomerRepository;
import com.dollarsbank.DollarsBankbackend.model.Account;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import com.dollarsbank.DollarsBankbackend.utility.ValidationUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TestAccountService extends Customer{

    @Autowired
    AccountRepository accRepo;


    @Autowired
    CustomerRepository custRepo;



/************ Adding Account**************/

    public Account AcctAdd(Account account) {

        Account newAccount = new Account();

        if (!accRepo.existsByCustIdAndAccountName(account.getCustId(),account.getAccountName())) {
            newAccount = accRepo.save(new Account(account.getCustId(),account.getAccountName(), account.getAccType(), account.getBalance(), account.getTransactions()));
        }
        return newAccount;




    }
    /************************Showing account data*****************/

    public String showAcct(String username, String password, String accName) {
        String truePassword = ValidationUtility.generatePassword(username, password);
        Customer customer = custRepo.findByUsernameAndPassword(username, truePassword);

        if(customer == null) {
            return "Invalid";
        }

        Account account = accRepo.findByCustIdAndAccountName(customer.getId(), accName);
        if(account == null) {
            return "Does not exist";
        }
        else {
            return account.toString();
        }

       
    }




/************************Deleting Accoount*********************/

    public String deleteAcct(String accName, String username, String password) {
        String truePassword = ValidationUtility.generatePassword(username, password);
        Customer customer = custRepo.findByUsernameAndPassword(username, truePassword);
        if (accRepo.existsByCustIdAndAccountName(customer.getId(), accName)) {

            Account account = accRepo.findByCustIdAndAccountName(customer.getId(), accName);
            accRepo.deleteByCustIdAndAccountName(customer.getId(), accName);

        }

        else {
            return "account does not exist";

        }

        return "success";
    }




}
