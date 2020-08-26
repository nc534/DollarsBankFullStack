package com.dollarsbank.DollarsBankbackend.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.dollarsbank.DollarsBankbackend.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, String>{

	boolean existsByUsername(String username);
	Customer findByUsernameAndPassword(String username, String password);
	
	@Transactional
	void deleteByUsernameAndPassword(String username, String password);
}
