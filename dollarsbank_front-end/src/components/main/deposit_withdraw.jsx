import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class DepositWithdraw extends Component {

    render() {

        return(
            <div className="customerMain">
                <div>
                    <h3>Deposit/Withdraw</h3>
                            
                    {/* <div class="error">{ this.state.errorMsg }</div> */}
                            
                    <form action="" method="post" className="form">
                    
                        <div>
                            <label htmlFor="transaction">Transaction Type </label>
                            <select name="transaction">
                                <option value="">--Please choose an option--</option>
                                <option value="deposit">Deposit</option>
                                <option value="withdraw">Withdraw</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="account">Account </label>
                            <select name="account">
                                <option value="">--Please choose an option--</option>
                                <option value="savings">Savings</option>
                                <option value="checking">Checking</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="transaction_amount">Amount </label>
                            <input type="number" name="transaction_amount" required placeholder="0.00" min="0.00" step="0.01"/>
                        </div>
                        
                        <div>
                            <button type="submit" className="btn">Submit</button>
                            
                            <Link to="/overview" className="cancel">Cancel</Link>
                            {/* <button type="button" name="cancel" class="cancel" onclick="history.back()">Cancel</button> */}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}