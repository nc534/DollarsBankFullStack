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
                            <label htmlFor="accType">Account </label>
                            <select name="accType" required>
                                <option value="">--Please choose an option--</option>
                                <option value="SAVINGS">Savings</option>
                                <option value="CHECKING">Checking</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="accountName">Account Name </label>
                            <input type="text" name="accountName" className="accountName" required placeholder="Enter a name for your account"/>
                        </div>
                        <div>
                            <label htmlFor="balance">Amount </label>
                            {/* Need to change the value to pennies */}
                            <input type="number" name="balance" required placeholder="0.00" min="0.00" step="0.01"/>
                        </div>
                        
                        <div>
                            <button type="submit" className="btn">Open</button>
                            
                            <Link to="/overview" className="cancel">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}