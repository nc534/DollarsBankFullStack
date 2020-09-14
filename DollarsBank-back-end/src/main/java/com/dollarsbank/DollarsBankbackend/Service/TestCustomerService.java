package com.dollarsbank.DollarsBankbackend.Service;

import com.dollarsbank.DollarsBankbackend.dao.AccountRepository;
import com.dollarsbank.DollarsBankbackend.dao.CustomerRepository;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import com.dollarsbank.DollarsBankbackend.utility.ValidationUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestCustomerService {

    @Autowired
    private CustomerRepository custRepo;

    @Autowired
    private AccountRepository accRepo;

    /************************* User Login ****************************/

    public Customer loginUser(String username, String password) {
        String truePassword = ValidationUtility.generatePassword(username, password);

        return custRepo.findByUsernameAndPassword(username, truePassword);

    }

    /******************************* Create User ******************************/


    public Customer makeUser(Customer customer) {


        //returns a customer with null values if customer already exists
        //would not add already existing customer to db

        customer.setNewPassword(customer.getPassword());
        if (!custRepo.existsByUsername(customer.getUsername())) {

            return custRepo.save(customer);
        }

        else {
            return null;
        }


    }


    /********************Delete User**********************/

    public String deleteUser(String username, String password, long custId) {

       custRepo.deleteByUsernameAndPassword(username, password);


       if(custRepo.existsByUsername(username)){
           return "deletion failed";
       }

       else {
           accRepo.deleteByCustId(custId);
       }

       return "deleted";
    }





}

