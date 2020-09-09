package com.dollarsbank.DollarsBankbackend.controller;


import com.dollarsbank.DollarsBankbackend.Service.TestAccountService;
import com.dollarsbank.DollarsBankbackend.model.Account;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        return AccountService.deleteAcct(account.getCustId(), account.getAccountName());
    }


    @RequestMapping(method = RequestMethod.GET, value = "/showAcct/{custId}/{accountName}")
    public Account showAcct(@PathVariable(value = "custId") long custId, @PathVariable(value = "accountName") String accountName) {


        return AccountService.showAcct(custId, accountName);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/showAllAcct/{custId}")
    public List<Account> showAllAcct(@PathVariable(value = "custId") long custId) {
        return AccountService.showAllAcct(custId);
    }

}
