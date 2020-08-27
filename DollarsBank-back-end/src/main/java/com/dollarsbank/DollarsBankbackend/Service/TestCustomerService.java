package com.dollarsbank.DollarsBankbackend.Service;

import com.dollarsbank.DollarsBankbackend.dao.AccountRepository;
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


/***** Create User
    public String makeUser(String enteredString) {
        List<Customer> allUsers = new ArrayList<>();
        allUsers = (List<Customer>) custRepo.findAll();
        enteredString = enteredString.substring(1, enteredString.length()-1);
        String delim = "[,]";
        String[] onlyValues = enteredString.split(delim);

        for(int i = 0; i < allUsers.size(); i++)
            if(allUsers.get(i).getUsername().contentEquals(onlyValues[0])) {
                return "Username already used!";
            }
        }

        Customer newCustomer = new Customer();
        newCustomer.setId(0);
        newCustomer.setUsername(onlyValues[0]);
        newCustomer.setPassword(onlyValues[1]);
        newCustomer.setName(onlyValues[2]);
        newCustomer.setAddress(onlyValues[3]);
        newCustomer.setContactNumber(onlyvalues[4]);
        custRepo.save(newCustomer);
        return "Added";


} */
}
