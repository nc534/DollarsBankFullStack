package com.dollarsbank.DollarsBankbackend.Service;

import com.dollarsbank.DollarsBankbackend.dao.AccountRepository;
import com.dollarsbank.DollarsBankbackend.dao.CustomerRepository;
import com.dollarsbank.DollarsBankbackend.model.Account;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import com.dollarsbank.DollarsBankbackend.utility.ValidationUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    public Account showAcct(long id, String accountName) {


       return accRepo.findByCustIdAndAccountName(id, accountName);
    }

    /************Showing all accounts**************/

    public List<Account> showAllAcct(Customer customer) {

        return accRepo.findAllByCustId(customer.getId());

    }



    /************************Deleting Accoount*********************/

    public String deleteAcct(Account account) {

        accRepo.deleteByCustIdAndAccountName(account.getCustId(), account.getAccountName());

        if (accRepo.existsById(account.getId())) {
            return "deletion failed";
        }


        return "success";
    }




}
