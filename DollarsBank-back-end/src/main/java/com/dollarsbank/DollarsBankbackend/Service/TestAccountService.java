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


        if (!accRepo.existsByCustIdAndAccountName(account.getCustId(),account.getAccountName())) {
            return accRepo.save(account);

        }

        else {
            return null;
        }

    }
    /************************Showing account data*****************/

    public Account showAcct(long custId, String accountName) {


       return accRepo.findByCustIdAndAccountName(custId, accountName);
    }

    /************Showing all accounts**************/

    public List<Account> showAllAcct(long custId) {

        return accRepo.findAllByCustId(custId);

    }



    /************************Deleting Accoount*********************/

    public String deleteAcct(long custId, String accountName) {


        accRepo.deleteByCustIdAndAccountName(custId, accountName);

        if (accRepo.existsByCustIdAndAccountName(custId, accountName)) {
            return "deletion failed";
        }


        return "success";
    }




}
