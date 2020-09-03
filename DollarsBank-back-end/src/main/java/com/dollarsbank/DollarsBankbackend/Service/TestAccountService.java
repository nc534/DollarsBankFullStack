package com.dollarsbank.DollarsBankbackend.Service;

import com.dollarsbank.DollarsBankbackend.dao.AccountRepository;
import com.dollarsbank.DollarsBankbackend.dao.CustomerRepository;
import com.dollarsbank.DollarsBankbackend.model.Account;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class TestAccountService {

    @Autowired
    AccountRepository accRepo;


    @Autowired
    CustomerRepository custRepo;

    public ArrayList<String> extracted(String enteredString) {
        // Create a new string, and set it equal to the passed in string but take off
        // the first and
        // last chars becaues they are [ and ] respectively and we don't need that.
        // [id=0, make=dodge, model=kljhkj]
        // [0, dodge, kljhjk]
        String mySubstr;
        mySubstr = enteredString.substring(1, enteredString.length() - 1);

        // Parse through the entered string on the , followed by a space.
        String delim = ",\\s";

        // Create a string array that is equal to the array of values, and split it
        // on the , to get each value by itself. Then create a new array list.
        String[] parsedData = mySubstr.split(delim);
        ArrayList<String> onlyValues = new ArrayList<>();


        // split on the equal sign, and take everything after the equal sign all the way
        // to the end
        // of that specific entry so make=Dodge just becomes Dodge. Then push that value
        // into our array list.
        for (int i = 0; i < parsedData.length; i++) {
            onlyValues.add(parsedData[i].substring(parsedData[i].indexOf("=") + 1));
        }

        // return our value array list.
        return onlyValues;
    }

    public String AcctAdd(String enteredString) {
        ArrayList<String> onlyValues = extracted(enteredString);


        Account newAcct = new Account();
        Customer customer = new Customer();
//
//
//        int numAdded = 0;
//
//        if(customer == null) {
//            return "invalid Credentials";
//
//        }
//
//        if(accRepo.existsByCustIdAndAccountName(cust))
        return "Added!";


    }




}
