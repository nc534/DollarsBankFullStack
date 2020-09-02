package com.dollarsbank.DollarsBankbackend.controller;

import com.dollarsbank.DollarsBankbackend.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dollarsbank.DollarsBankbackend.Service.TestCustomerService;

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
    public Customer loginClicked(@RequestBody Customer customer){
        return CustomerService.loginUser(customer);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/signup")
    public Customer signup(@RequestBody Customer customer){
        return CustomerService.makeUser(customer);
    }
}
