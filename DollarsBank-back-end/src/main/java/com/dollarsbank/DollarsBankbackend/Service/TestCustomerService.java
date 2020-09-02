package com.dollarsbank.DollarsBankbackend.Service;

import com.dollarsbank.DollarsBankbackend.dao.CustomerRepository;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TestCustomerService {

    @Autowired
    private CustomerRepository custRepo;

    /************************* User Login ****************************/
    public boolean loginUser(String enteredString) {
        String removeBrackets = enteredString.substring(1, enteredString.length() - 1);

        String delim = "[,]";
        String valueString = "";
        String[] values = removeBrackets.split(delim);
        Customer returnedCust = null;
        ArrayList<String> onlyValues = new ArrayList<String>();

        for (int i = 0; i < values.length; i++) {
            valueString = values[i].substring(values[i].indexOf("\"") + 1, values[i].length() - 1);
            onlyValues.add(valueString);
        }

        ArrayList<Customer> allUsers = (ArrayList<Customer>) custRepo.findAll();
        for (int i = 0; i < allUsers.size(); i++) {
            if (allUsers.get(i).getUsername().contentEquals(onlyValues.get(0))) {
                if (allUsers.get(i).getUsername().contentEquals(onlyValues.get(1))) {
                    returnedCust = allUsers.get(i);
                    System.out.println(allUsers.get(i).getUsername());
                    return true;
                }
            }
        }
        return false;


    }

    /******************************* Create User ******************************/

    public String makeUser(String enteredString) {
        enteredString = enteredString.substring(1, enteredString.length()-1);
        String delim = "/n";
        String[] onlyValues = enteredString.split(delim);

        Customer newCustomer = new Customer();
        int numAdded = 0;

        for(int i = 0; i < onlyValues.length; ++i) {
            if(!custRepo.existsByUsername(onlyValues[0])) {
                newCustomer.setId(0);
                newCustomer.setUsername(onlyValues[0]);
                newCustomer.setNewPassword(onlyValues[1]);
                newCustomer.setName(onlyValues[2]);
                newCustomer.setAddress(onlyValues[3]);
                newCustomer.setContactNumber(onlyValues[4]);
                custRepo.save(newCustomer);
                if(newCustomer != null){
                    ++numAdded;
                }
            }
        }
        return numAdded + "test accounts have been added";
    }




}

