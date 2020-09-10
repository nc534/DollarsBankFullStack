import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import { AppContext } from "../App";
import Select from 'react-select';

export default function DepositWithdraw(){
    const [state] = useContext(AppContext);
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

    const [memo, setMemo] = useState(undefined);

        return(
            <div className="customerMain">
                <div>
                    <h3>Deposit/Withdraw</h3>
                            
                    {/* <div class="error">{ this.state.errorMsg }</div> */}
                            
                    <form action="" method="post" className="form">
                    
                        <div className="form-group">
                            <label htmlFor="transaction">Transaction Type </label>
                            <Select name="transaction"
                                    className="select"
                                    options={transaction}
                            />
                        </div>
                        {/* Change to list Account Name */}
                        {/* Need to convert account name to id */}
                        <div className="form-group">
                            <label htmlFor="account">Account </label>
                            <Select name="account"
                                    className="select"
                                    options={accounts}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Amount </label>
                            <input type="number" name="amount" required placeholder="0.00" min="0.00" step="0.01"/>
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