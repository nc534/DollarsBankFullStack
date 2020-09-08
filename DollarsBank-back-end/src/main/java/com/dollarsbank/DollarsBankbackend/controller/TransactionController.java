package com.dollarsbank.DollarsBankbackend.controller;
import com.dollarsbank.DollarsBankbackend.Service.TestAccountService;
import com.dollarsbank.DollarsBankbackend.Service.TransactionService;
import com.dollarsbank.DollarsBankbackend.model.Account;
import com.dollarsbank.DollarsBankbackend.model.PendingTransaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @RequestMapping(method = RequestMethod.POST, value = "/makeTransfer")
    public String makeTransfer(@RequestBody PendingTransaction transfer){
        return transactionService.makeTransfer(transfer);
    }

}
