import React, {Component} from 'react';

export default class Transactions extends Component {
  
  // TODO fetch latest transaction when accessing this component

    render() {

        return(
            <div className="customerMain">
                <h3>Recent Transactions</h3>
                <div className='transactions'>
                    <table>
                        <thead>
                            <tr>
                                <th>Account ID</th>
                                <th>Transaction Date</th>
                                <th>Transaction Type</th>
                                <th>Transfer From</th>
                                <th>Transfer To</th>
                                <th>Transaction Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}