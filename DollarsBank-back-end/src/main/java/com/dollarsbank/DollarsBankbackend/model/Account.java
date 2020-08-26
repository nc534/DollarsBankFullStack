package com.dollarsbank.DollarsBankbackend.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import com.dollarsbank.DollarsBankbackend.model.Transaction;
import com.dollarsbank.DollarsBankbackend.utility.TransactionUtility;

@Component
@Entity
@Table(name = "account")
public class Account {
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	@Column
	private long id;
	@Column
	private long custId;
	@Column
	private String accountName;
	@Column
	private long balance = 0;
	@Column
	@ElementCollection(targetClass=Transaction.class)
	private List<Transaction> transactions;
	
	// NON-STANDARD PUBLIC METHODS
	
	public boolean addAmount(long amount, String message) {
		if(amount < 0)
			return false;
		addTransaction(amount, message, TransactionUtility.getTime());
		this.balance += amount;
		return true;
	}
	
	public boolean subtractAmount(long amount, String message) {
		if((amount < 0) || (balance - amount < 0))
			return false;
		addTransaction(-amount, message, TransactionUtility.getTime());
		this.balance -= amount;
		return true;
	}
	
	// STANDARD PUBLIC METHDOS
	
	public Account() {
		super();
		transactions = new ArrayList<Transaction>();
	}

	public Account(long id, long custId, String accountName, long balance, List<Transaction> transactions) {
		super();
		this.id = id;
		this.custId = custId;
		this.accountName = accountName;
		this.balance = balance;
		this.transactions = transactions;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getCustId() {
		return custId;
	}

	public void setCustId(long custId) {
		this.custId = custId;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public long getBalance() {
		return balance;
	}

	public void setBalance(long balance) {
		this.balance = balance;
	}

	public List<Transaction> getTransactions() {
		return transactions;
	}

	public void setTransactions(List<Transaction> transactions) {
		this.transactions = transactions;
	}
	
	// PRIVATE METHODS
	
	private void addTransaction(long amount, String msg, String date) {
		if(transactions.size() == 5)
			transactions.remove(0);
		transactions.add(new Transaction(amount, msg, date));
	}
}
