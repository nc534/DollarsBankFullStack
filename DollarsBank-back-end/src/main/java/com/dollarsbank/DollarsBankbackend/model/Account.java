package com.dollarsbank.DollarsBankbackend.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
	
	public enum AccType {
		CHECKING, SAVINGS
	}
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private long id;
	private long custId;
	private String accountName;
	@Enumerated(EnumType.ORDINAL)
	private AccType accType;
	private long balance = 0;
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

	public Account(long id, long custId, String accountName, AccType accType, long balance, List<Transaction> transactions) {
		super();
		this.id = id;
		this.custId = custId;
		this.accountName = accountName;
		this.accType = accType;
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

	public AccType getAccType() {
		return accType;
	}

	public void setAccType(AccType accType) {
		this.accType = accType;
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
	
	@Override
	public String toString() {
		return "Account [id=" + id + ", custId=" + custId + ", accountName=" + accountName + ", accType=" + accType
				+ ", balance=" + balance + ", transactions=" + transactions + "]";
	}
	
	// PRIVATE METHODS

	private void addTransaction(long amount, String msg, LocalDateTime date) {
//		if(transactions.size() == 5)
//			transactions.remove(0);
		transactions.add(new Transaction(amount, msg, date));
	}
}
