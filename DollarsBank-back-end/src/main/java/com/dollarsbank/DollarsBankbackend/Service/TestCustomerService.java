package com.dollarsbank.DollarsBankbackend.Service;

import com.dollarsbank.DollarsBankbackend.dao.CustomerRepository;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import com.dollarsbank.DollarsBankbackend.utility.ValidationUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TestCustomerService {

    @Autowired
    private CustomerRepository custRepo;

    /************************* User Login ****************************/
    public boolean loginUser(String username, String password) {


        String truePassword = ValidationUtility.generatePassword(username, password);

        return custRepo.existsByUsernameAndPassword(username, truePassword);





    }

    /******************************* Create User ******************************/

    public String makeUser(String enteredString) {
        enteredString = enteredString.substring(1, enteredString.length()-1);
        String delim = "/n";
        String[] onlyValues = enteredString.split(delim);

        Customer newCustomer = new Customer();
        int numAdded = 0;


            if(!custRepo.existsByUsername(onlyValues[0])) {
                newCustomer.setId(0);
                newCustomer.setUsername(onlyValues[0]);
                newCustomer.setNewPassword(onlyValues[1]);
                newCustomer.setName(onlyValues[2]);
                newCustomer.setAddress(onlyValues[3]);
                newCustomer.setContactNumber(onlyValues[4]);
                newCustomer = custRepo.save(newCustomer);
                if(newCustomer != null){
                    ++numAdded;
                }
            }

        return numAdded + " accounts have been added";
    }




}

