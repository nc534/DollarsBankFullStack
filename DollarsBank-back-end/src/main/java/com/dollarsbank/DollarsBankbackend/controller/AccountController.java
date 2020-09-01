package com.dollarsbank.DollarsBankbackend.controller;


import com.dollarsbank.DollarsBankbackend.Service.TestAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AccountController {
    @Autowired
    private TestAccountService AccountService;

    @RequestMapping(method = RequestMethod.POST, value = "/addacct")
    public @ResponseBody String addAcct(String enteredString) throws Exception {
        return AccountService.AcctAdd(enteredString);
    }
}
