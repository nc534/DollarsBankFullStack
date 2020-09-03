package com.dollarsbank.DollarsBankbackend.Service;

import com.dollarsbank.DollarsBankbackend.dao.CustomerRepository;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestCustomerService {

    @Autowired
    private CustomerRepository custRepo;

    /************************* User Login ****************************/
    public Customer loginUser(Customer customer) {
        return custRepo.findByUsernameAndPassword(customer.getUsername(), customer.getPassword());
    }

    /******************************* Create User ******************************/

    public Customer makeUser(Customer customer) {

        Customer newCustomer = new Customer();

        //returns a customer with null values if customer already exists
        //would not add already existing customer to db
        if (!custRepo.existsByUsername(customer.getUsername())) {
            newCustomer = custRepo.save(new Customer(customer.getUsername(), customer.getPassword(), customer.getName(), customer.getAddress(), customer.getContactNumber()));
        }
        return newCustomer;

    }




}

