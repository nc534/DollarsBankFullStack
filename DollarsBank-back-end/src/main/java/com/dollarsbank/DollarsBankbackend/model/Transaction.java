package com.dollarsbank.DollarsBankbackend.model;

import java.time.LocalDateTime;

import javax.persistence.Embeddable;

import com.dollarsbank.DollarsBankbackend.utility.TransactionUtility;

@Embeddable
public class Transaction {

	public long amount;
	public String message;
	public LocalDateTime date;
	
	public Transaction(long amount, String message, LocalDateTime date) {
		super();
		this.amount = amount;
		this.message = message;
		this.date = date;
	}
	
	public Transaction() {
		super();
		amount = 0;
		message = null;
		date = null;
	}

	@Override
	public String toString() {
		return getAmountAsString() + " (" + message + ") [" + date + "]";
	}

	public long getAmount() {
		return amount;
	}

	public String getAmountAsString() {
		return TransactionUtility.parseAmount(amount);
	}

	public void setAmount(long amount) {
		this.amount = amount;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	
	
}