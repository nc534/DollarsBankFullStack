package com.dollarsbank.DollarsBankbackend.controller;

import com.dollarsbank.DollarsBankbackend.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.dollarsbank.DollarsBankbackend.Service.TestCustomerService;

@CrossOrigin(origins = "http://localhost:3000")
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

    @RequestMapping(method = RequestMethod.GET, value = "/login/{username}/{password}")
    public Customer loginClicked(@PathVariable(value = "username") String username, @PathVariable(value = "password") String password){
        return CustomerService.loginUser(username, password);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/signup")
    public Customer signup(@RequestBody Customer customer){
        return CustomerService.makeUser(customer);
    }


    @RequestMapping(method = RequestMethod.GET, value = "/deleteUser/{username}/{password}/{custId}")
    public String deleteUser(@PathVariable(value = "username") String username, @PathVariable(value = "password") String password, @PathVariable(value = "custId") long custId){
//        customer.setNewPassword(customer.getPassword());
        return  CustomerService.deleteUser(username, password, custId);
    }
}
