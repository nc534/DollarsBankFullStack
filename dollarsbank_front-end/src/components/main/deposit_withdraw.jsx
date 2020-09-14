import React, { useState, useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { AppContext } from "../App";
import Select from 'react-select';
import * as Utils from "../Utils";

export default function DepositWithdraw(){
    const history = useHistory();
    const [state, dispatch] = useContext(AppContext);
    const transaction = [
        {
            "value": "deposit",
            "label": "Deposit"
        },
        {
            "value": "withdraw",
            "label": "Withdraw"
        }
    ];
    const accounts = state.accounts.map(a => ({
        "value": a.id,
        "label": a.accountName
    }));

    const [transactionType, setTransactionType] = useState(undefined);
    const [account, setAccount] = useState(null);
    const [balance, setAccountBalance] = useState(null);
    const [memo, setMemo] = useState(undefined);
    const [errorMsg, setErrorMsg] = useState(null);

    async function handleTransaction(event) {
        event.preventDefault();

        const sourceBalance = () => {for(var a in state.accounts){if(state.accounts[a].id === account){return state.accounts[a].balance}}};

        if(transactionType === undefined){
            setErrorMsg("Choose to deposit or withdraw");
        }else if(account == null){
            setErrorMsg("Choose an account to transfer to or from.");
        }else{
            if(transactionType === "deposit"){
                await Utils.makeDeposit(
                    account,
                    balance,
                    memo
                );
            }else if (transactionType === "withdraw"){
                if(balance > sourceBalance()){
                    setErrorMsg("Insufficient funds to withdraw.");
                    return;
                }else{
                    await Utils.makeWithdrawal(
                        account,
                        balance,
                        memo
                    );
                }
                
            }
    
            const resAccts = await Utils.getAccounts(state.user.id);
    
            dispatch({
                type: "SET_ACCOUNTS",
                payload: resAccts,
            });
    
            history.push("/overview");
        }

    }

        return(
            <div className="customerMain">
                <div>
                    <h3>Deposit/Withdraw</h3>
                            
                    <div className="error">{ errorMsg }</div>
                            
                    <form onSubmit={handleTransaction} className="form">
                    
                        <div className="form-group">
                            <label htmlFor="transaction">Transaction Type </label>
                            <Select name="transaction"
                                    className="select"
                                    options={transaction}
                                    onChange={(v) => setTransactionType(v.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="account">Account </label>
                            <Select name="account"
                                    className="select"
                                    options={accounts}
                                    onChange={(v) => setAccount(v.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Amount </label>
                            <input type="number" name="amount" required placeholder="0.00" min="0.00" step="0.01" onChange={(v) => setAccountBalance(v.target.value*100)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="memo">Note </label>
                            <input type="text" name="memo" className="memo" value={memo} required placeholder="e.g. paycheck" onChange={(v) => setMemo(v.target.value)}/>
                        </div>
                        
                        <div className="form-group">
                            <button type="submit" className="btn">Submit</button>
                            
                            <Link to="/overview" className="cancel">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        )

}