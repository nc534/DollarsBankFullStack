package com.dollarsbank.DollarsBankbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dollarsbank.DollarsBankbackend.dao.CustomerRepository;
import com.dollarsbank.DollarsBankbackend.model.Customer;
import com.dollarsbank.DollarsBankbackend.utility.ValidationUtility;

@RestController
public class TestCustomerController {
	@Autowired
	CustomerRepository custRepo;
	
	public static final String[] testUsernames = {
			"Karl",
			"George",
			"Fred",
			"Barney",
			"TestUsername!"
		};
		
	public static final String[] testPasswords = {
			"ShieldBash!0",
			"The8th!!",
			"Flinstone!0",
			"Rubble!0",
			"TestPassword!0"
		};
	
	// FULL TEST

	@GetMapping(value = "/testCustDatabase")
	public String testDatabase(){
		
		String inputUsername = "SpecialOneTimeUsername!";
		String inputPassword = "SpecialOneTimePassword!";
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
		Customer loadedCust = custRepo.findByUsernameAndPassword(inputUsername, truePassword);
		
		if(loadedCust == null) {
			System.out.println("Customer failed to be returned from the database");
			return "Failure";
		}
		
		System.out.println("Fetching Customer name using id");
		String name = custRepo.selectNameFromCustomerById(loadedCust.getId());
		if(!name.equals(loadedCust.getName())) {
			System.out.println("Customer name does not match that acquire from custRepo.getNameFromId");
			return "Failure";
		}
		
		System.out.println("Success, deleting test data");
		custRepo.deleteByUsernameAndPassword(inputUsername, truePassword);
		return "Success";
	}
	
	// SINGLE DATA
	
	@GetMapping(value = "/addCustTestData/{username}/{password}")
	public String addTestDataInput(@PathVariable(value="username") String username, @PathVariable(value="password") String password){
		if(!custRepo.existsByUsername(username)) {
			String error = ValidationUtility.validPassword(password);
			if(error != null)
				return "Failed: " + error;
			
			Customer cust = new Customer();
			cust.setName("Karrejahl Jigneison");
			cust.setUsername(username);
			cust.setNewPassword(password);
			cust.setAddress("The Open Road");
			cust.setContactNumber("9999999999");
			custRepo.save(cust);
			return "Success:<br>" + cust.toString();
		}
		else
			return "Failed: Username in use";
	}
	
	@GetMapping(value = "/showCustTestData/{username}/{password}")
	public String showTestDataInput(@PathVariable(value="username") String username, @PathVariable(value="password") String password){
		
		String truePassword = ValidationUtility.generatePassword(username, password);
		Customer cust = custRepo.findByUsernameAndPassword(username, truePassword);
		if(cust != null)
			return cust.toString();
		else
			return "User doesn't exist";
	}
	
	@GetMapping(value = "/removeCustTestData/{username}/{password}")
	public String removeTestDataInput(@PathVariable(value="username") String username, @PathVariable(value="password") String password){
		if(custRepo.existsByUsername(username)) {
			String truePassword = ValidationUtility.generatePassword(username, password);
			custRepo.deleteByUsernameAndPassword(username, truePassword);
			if(custRepo.existsByUsername(username))
				return "Invalid Credentials";
		}
		else
			return "User doesn't exist";
		return "Success";
	}
	
	// MULTI DATA
	
	@GetMapping(value = "/addCustTestData")
	public String addTestData(){
		
		Customer cust;
		int numAdded = 0;
		for(int i = 0; i < testUsernames.length; ++i) {
			if(!custRepo.existsByUsername(testUsernames[i])) {
				cust = new Customer();
				cust.setName("TestData_Name");
				cust.setUsername(testUsernames[i]);
				cust.setNewPassword(testPasswords[i]);
				cust.setAddress("TestData_Address");
				cust.setContactNumber("9999999999");
				cust = custRepo.save(cust);
				if(cust != null)
					++numAdded;
			}
		}
		return numAdded + " test accounts have been added";
	}
	
	@GetMapping(value = "/removeCustTestData")
	public String removeTestData(){
		
		int numRemoved = 0;
		for(int i = 0; i < testUsernames.length; ++i) {
			if(custRepo.existsByUsername(testUsernames[i])) {
				custRepo.deleteByUsernameAndPassword(testUsernames[i], ValidationUtility.generatePassword(testUsernames[i], testPasswords[i]));
				if(!custRepo.existsByUsername(testUsernames[i]))
					++numRemoved;
			}
		}
		return numRemoved + " test accounts have been removed";
	}
	
	@GetMapping(value = "/showCustTestData")
	public String showTestData(){
		
		Customer cust;
		StringBuilder results = new StringBuilder();
		for(int i = 0; i < testUsernames.length; ++i) {
			if(custRepo.existsByUsername(testUsernames[i])) {
				cust = custRepo.findByUsernameAndPassword(testUsernames[i], ValidationUtility.generatePassword(testUsernames[i], testPasswords[i]));
				if(cust != null) {
					results.append("<br>");
					results.append(cust.toString());
				}
			}
		}
		return results.toString();
	}
}
