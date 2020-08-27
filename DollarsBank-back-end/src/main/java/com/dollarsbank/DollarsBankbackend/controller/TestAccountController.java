package com.dollarsbank.DollarsBankbackend.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dollarsbank.DollarsBankbackend.dao.AccountRepository;
import com.dollarsbank.DollarsBankbackend.dao.CustomerRepository;
import com.dollarsbank.DollarsBankbackend.model.Account;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import com.dollarsbank.DollarsBankbackend.utility.ValidationUtility;

@RestController
public class TestAccountController {

	@Autowired
	AccountRepository accRepo;
	
	@Autowired
	CustomerRepository custRepo;
	
	private Customer fetchCust(int index) {
		String password = ValidationUtility.generatePassword(TestCustomerController.testUsernames[index],
															TestCustomerController.testPasswords[index]);
		return custRepo.findByUsernameAndPassword(TestCustomerController.testUsernames[index], password);
	}
	
	@GetMapping(value = "/testAccDatabase")
	public String testDatabase() {
		Account account = new Account();
		
		System.out.println("Creating Account");
		account.setAccountName("TestAccount");
		account.setAccType(Account.AccType.SAVINGS);
		account.setBalance(0);
		account.setCustId(0);
		
		System.out.println("Saving Account");
		account = accRepo.save(account);
		if(account == null) {
			System.out.println("Account failed to be saved to the database");
			return "Failure";
		}
		
		System.out.println("Looking for Account");
		if(!accRepo.existsById(account.getId()))
			return "Failure";
		
		System.out.println("Loading Account");
		account = accRepo.findById(account.getId());
		
		if(account == null) {
			System.out.println("Account failed to be returned from the database");
			return "Failure";
		}
		
		System.out.println("Adding Transactions");
		account.addAmount(100, "Test Deposit");
		account.subtractAmount(50, "Test Withdrawal");
		
		System.out.println("Attempting bad transaction");
		if(account.subtractAmount(100000, "Test Bad Withdrawal")) {
			System.out.println("Account failed to stop a withdrawal larger than the balance");
			accRepo.deleteById(account.getId());
			return "Failure";
		}
		System.out.println(account.getTransactions().toString());
		accRepo.save(account);
		
		System.out.println("Success, deleting test data");
		accRepo.deleteById(account.getId());
		return "Success";
	}
	
	@GetMapping(value = "/addAccTestData")
	public String addTestData(){
		Account account;
		Customer cust;
		int numAdded = 0;
		boolean noCustomersExist = true;
		for(int i = 0; i < TestCustomerController.testUsernames.length; ++i) {
			cust = fetchCust(i);
			if(cust != null) {
				noCustomersExist = false;
				if(accRepo.existsByCustIdAndAccountName(cust.getId(), "TestAccount"))
					continue;
				account = new Account();
				account.setAccountName("TestAccount");
				account.setAccType(Account.AccType.SAVINGS);
				account.setBalance(0);
				account.setCustId(cust.getId());
				account.addAmount(105, "Initial test deposit for " + cust.getUsername());
				account.addAmount(5, "test withdrawal");
				accRepo.save(account);
				++numAdded;
			}
		}
		if(noCustomersExist)
			return "No Accounts were added because no test customers exist, use url \"addCustTestData\" to make them";
		else
			return numAdded + " accounts were added";
	}
	
	@GetMapping(value = "/removeAccTestData")
	public String removeTestData(){
		Customer cust;
		int numRemoved = 0;
		for(int i = 0; i < TestCustomerController.testUsernames.length; ++i) {
			cust = fetchCust(i);
			if(cust != null && accRepo.existsByCustIdAndAccountName(cust.getId(), "TestAccount")) {
				accRepo.deleteByCustIdAndAccountName(cust.getId(), "TestAccount");
				++numRemoved;
			}
		}
		return numRemoved + " accounts were removed";
	}
	
	@GetMapping(value = "/showAccTestData")
	public String showTestData(){
		Customer cust;
		StringBuilder result = new StringBuilder();
		for(int i = 0; i < TestCustomerController.testUsernames.length; ++i) {
			cust = fetchCust(i);
			if(cust != null && accRepo.existsByCustIdAndAccountName(cust.getId(), "TestAccount")) {
				result.append("<br>");
				result.append(accRepo.findByCustIdAndAccountName(cust.getId(), "TestAccount").toString());
			}
		}
		return result.toString();
	}
}
