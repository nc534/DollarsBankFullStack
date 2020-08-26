package com.dollarsbank.DollarsBankbackend.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dollarsbank.DollarsBankbackend.dao.CustomerRepository;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import com.dollarsbank.DollarsBankbackend.utility.ValidationUtility;

@RestController
public class TestController {
	@Autowired
	CustomerRepository custRepo;

	@GetMapping(value = "/testDatabase")
	public String testDatabase(HttpSession session){
		
		String inputUsername = "Karl";
		String inputPassword = "ShieldBash!";
		String truePassword = ValidationUtility.generatePassword(inputUsername, inputPassword);
		
		System.out.println();
		
		if(custRepo.existsByUsername(inputUsername)) {
			System.out.println("Test User already exists, attempting deletion");
			custRepo.deleteByUsernameAndPassword(inputUsername, truePassword);
		}
		
		System.out.println("Creating Customer");
		Customer cust = new Customer();
		cust.setName("Karrejahl Jigneison");
		cust.setUsername(inputUsername);
		cust.setNewPassword(inputPassword);
		cust.setAddress("The Open Road");
		cust.setContactNumber("9999999999");
		
		System.out.println("Saving Customer");
		cust = custRepo.save(cust);
		
		if(cust == null) {
			System.out.println("Customer failed to be saved to the database");
			return "Failure";
		}
		
		System.out.println("Looking for Customer");
		if(!custRepo.existsByUsername(inputUsername))
			return "Failure";
		
		System.out.println("Loading Customer");
		Customer loadedCust = custRepo.findByUsernameAndPassword("Karl", truePassword);
		
		if(loadedCust == null) {
			System.out.println("Customer failed to be returned from the database");
			return "Failure";
		}
		System.out.println("All Completed");
		return loadedCust.toString();
	}
}
