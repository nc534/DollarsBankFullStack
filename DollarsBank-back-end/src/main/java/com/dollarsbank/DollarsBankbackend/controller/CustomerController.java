package com.dollarsbank.DollarsBankbackend.controller;

import java.net.URI;
import java.util.ArrayList;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import com.dollarsbank.DollarsBankbackend.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.dollarsbank.DollarsBankbackend.Service.TestCustomerService;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class CustomerController {

    @Autowired
    private TestCustomerService CustomerService;

    /*@PostMapping("/makeuser")
    public ResponseEntity<Customer> makeUser(@RequestBody Customer customer) throws Exception {
        Customer newCust = CustomerService.makeUser(customer);
        if(newCust == null) {
            return ResponseEntity.notFound().build();
        }
        else {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newCust.getId()).toUri();

            return ResponseEntity.created(uri).body(newCust);
        }


    }*/

    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public boolean loginClicked(@RequestBody String enteredString) throws Exception {
        System.out.println(enteredString);
        return CustomerService.loginUser(enteredString);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/signup")
    public String signup(@RequestBody String enteredString) throws Exception {
        System.out.println(enteredString);
        return CustomerService.makeUser(enteredString);
    }
}
