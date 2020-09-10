import React from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';

export default function NewAccount() {

    const accType = [
        {
            "value": "CHECKING",
            "label": "Checking"
        },
        {
            "value": "SAVINGS",
            "label": "Savings"
        }
    ];

        return(
            <div>
                <div>
                    <h3>New Account</h3>
                            
                    {/* <div class="error">{ this.state.errorMsg }</div>*/}
                            
                    <form action="" method="post" className="form">
                    
                        <div className="form-group">
                            <label htmlFor="accType">Account </label>
                            <Select name="accType"
                                    className="select"
                                    options={accType} 
                                    required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="accountName">Account Name </label>
                            <input type="text" name="accountName" className="accountName" required placeholder="Enter a name for your account"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="balance">Amount </label>
                            {/* Need to change the value to pennies */}
                            <input type="number" name="balance" required placeholder="0.00" min="0.00" step="0.01"/>
                        </div>
                        
                        <div className="form-group">
                            <button type="submit" className="btn">Open</button>
                            
                            <Link to="/overview" className="cancel">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
}