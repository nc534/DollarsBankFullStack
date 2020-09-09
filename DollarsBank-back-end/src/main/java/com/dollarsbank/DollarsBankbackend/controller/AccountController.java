package com.dollarsbank.DollarsBankbackend.controller;


import com.dollarsbank.DollarsBankbackend.Service.TestAccountService;
import com.dollarsbank.DollarsBankbackend.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AccountController {
    @Autowired
    private TestAccountService AccountService;

    @RequestMapping(method = RequestMethod.POST, value = "/addacct")
    public Account AcctAdd(@RequestBody Account account) {
//        System.out.println(account.toString());
        return AccountService.AcctAdd(account);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/deleteAcct")
    public String deleteAcct(@RequestBody Account account) {
        return AccountService.deleteAcct(account);
    }


    @RequestMapping(method = RequestMethod.POST, value = "/showAcct")
    public Account showAcct(@RequestBody Account account) {


        return AccountService.showAcct(account.getCustId(), account.getAccountName());
    }

}
