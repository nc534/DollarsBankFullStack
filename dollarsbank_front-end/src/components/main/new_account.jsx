import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NewAccount extends Component {

    render() {
        return(
            <div>
                <div>
                    <h3>New Account</h3>
                            
                    {/* <div class="error">{ this.state.errorMsg }</div>*/}
                            
                    <form action="" method="post" className="form">
                    
                        <div>
                            <label htmlFor="account">Account </label>
                            <select name="account">
                                <option value="">--Please choose an option--</option>
                                <option value="savings">Savings</option>
                                <option value="checking">Checking</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="initial_deposit">Amount </label>
                            <input type="number" name="initial_deposit" required placeholder="0.00" min="0.00" step="0.01"/>
                        </div>
                        
                        <div>
                            <button type="submit" className="btn">Open</button>
                            
                            <Link to="/overview" className="cancel">Cancel</Link>
                            {/* <button type="button" name="cancel" onclick="history.back()" class="cancel">Cancel</button> */}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}