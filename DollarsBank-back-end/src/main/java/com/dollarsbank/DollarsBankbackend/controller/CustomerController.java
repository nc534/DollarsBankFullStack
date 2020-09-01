package com.dollarsbank.DollarsBankbackend.controller;

import java.util.ArrayList;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.dollarsbank.DollarsBankbackend.Service.TestCustomerService;

@RestController
public class CustomerController {

    @Autowired
    private TestCustomerService CustomerService;

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
