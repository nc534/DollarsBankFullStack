package com.dollarsbank.DollarsBankbackend.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.dollarsbank.DollarsBankbackend.model.Account;

@Repository
public interface AccountRepository extends CrudRepository<Account, String>{

	boolean existsById(long id);
	boolean existsByCustIdAndAccountName(long custId, String accountName);
	
	List<Account> findAllByCustId(long custId);
	
	Account findByCustIdAndAccountName(long custId, String accountName);
	Account findById(long id);
	
	@Transactional
	void deleteByCustIdAndAccountName(long custId, String accountName);
}
