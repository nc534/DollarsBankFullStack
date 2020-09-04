package com.dollarsbank.DollarsBankbackend.controller;


import com.dollarsbank.DollarsBankbackend.Service.TestAccountService;
import com.dollarsbank.DollarsBankbackend.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
public class AccountController {
    @Autowired
    private TestAccountService AccountService;

    @PostMapping("/addacct")
    public ResponseEntity<Account> AcctAdd(@RequestBody Account account) throws Exception {
        Account newAcct = AccountService.AcctAdd(account);
        if(newAcct == null) {
            return ResponseEntity.notFound().build();
        }
        else {
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newAcct.getCustId().toUri();
            return ResponseEntity.created(uri).body(newAcct);

        }
    }
}
