package com.dollarsbank.DollarsBankbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import com.dollarsbank.DollarsBankbackend.utility.ValidationUtility;

@Component
@Entity
@Table(name = "customer")
public class Customer {
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private long id;
	private String username;
	private String password;
	
	private String name;
	private String address;
	@Column(name = "contact_number")
	private String contactNumber;
	
	// NON-STANDARD PUBLIC METHODS
	
	public boolean correctPassword(String password) {
		return this.password.equals(ValidationUtility.generatePassword(username, password));
	}
	
	public void setNewPassword(String password) {
		this.password = ValidationUtility.generatePassword(username, password);
	}
	
	// STANDARD PUBLIC METHODS
	
	public Customer(long id, String username, String password, String name, String address, String contactNumber) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.name = name;
		this.address = address;
		this.contactNumber = contactNumber;
	}

	public Customer() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", username=" + username + ", password=" + password + ", name=" + name
				+ ", address=" + address + ", contactNumber=" + contactNumber + "]";
	}
	
	
}
