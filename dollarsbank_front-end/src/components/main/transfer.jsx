import React, {Component} from 'react';

export default class Transfer extends Component {

    render() {

        return(
            <div className="customerMain">
                <div>
                    <h3>Transfer</h3>
                            
                    {/* <div class="error">{ this.state.errorMsg }</div> */}
                            
                    <form action="" method="post" class="form">
                    
                        <div>
                            <label for="account_from">Transfer From </label>
                            <select name="account_from">
                                <option value="">--Please choose an option--</option>
                                <option value="savings">Savings</option>
                                <option value="checking">Checking</option>
                            </select>
                        </div>
                        <div>
                            <label for="account_to">Transfer To </label>
                            <select id="selection" name="account_to" onchange="other()">
                                <option value="">--Please choose an option--</option>
                                <option value="savings">Savings</option>
                                <option value="checking">Checking</option>
                                <option value="other">Another Customer</option>
                            </select>
                        </div>
                        {/* State would be needed to hide or show option below */}
                        {/* <div id="another">
                            <label for="other_account">To Account Id:</label>
                            <input type="number" name="other_account" min="0" step="1" placeholder="account id"/>
                            <label for="phone">Phone of Other Customer: </label>
                            <input type="text" name="phone" placeholder="phone"/>
                        </div> */}
                        <div>
                            <label for="transaction_amount">Amount </label>
                            <input type="number" name="transaction_amount" required placeholder="0.00" min="0.00" step="0.01"/>
                        </div>
                        <div>
                            <p>Date: <input type="text" id="date" readonly placeholder=""></input></p>
                        </div>
                        
                        <div>
                            <button type="submit" class="btn">Submit</button>
                            
                            <button type="button" name="cancel" class="cancel" onclick="history.back()">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}