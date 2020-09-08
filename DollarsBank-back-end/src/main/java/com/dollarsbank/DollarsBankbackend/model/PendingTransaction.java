package com.dollarsbank.DollarsBankbackend.model;

public class PendingTransaction {

	long sourceAccId;
	long targetAccId;
	String nameVerify;
	long amount;
	String memo;
	
	public PendingTransaction() {
		super();
	}
	
	public PendingTransaction(long sourceAccId, long targetAccId, String nameVerify, long balance, String memo) {
		super();
		this.sourceAccId = sourceAccId;
		this.targetAccId = targetAccId;
		this.nameVerify = nameVerify;
		this.amount = balance;
		this.memo = memo;
	}

	public long getSourceAccId() {
		return sourceAccId;
	}

	public void setSourceAccId(long sourceAccId) {
		this.sourceAccId = sourceAccId;
	}

	public long getTargetAccId() {
		return targetAccId;
	}

	public void setTargetAccId(long targetAccId) {
		this.targetAccId = targetAccId;
	}

	public String getNameVerify() {
		return nameVerify;
	}

	public void setNameVerify(String nameVerify) {
		this.nameVerify = nameVerify;
	}

	public long getAmount() {
		return amount;
	}

	public void setAmount(long balance) {
		this.amount = balance;
	}

	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}
	
	
}
