import React, {Component} from 'react';

export default class Transactions extends Component {

    render() {

        return(
            <div class="customerMain">
                <h3>Recent Transactions</h3>
                <div className='transactions'>
                    <table>
                        <thead>
                            <th>Account ID</th>
                            <th>Transaction Date</th>
                            <th>Transaction Type</th>
                            <th>Transfer From</th>
                            <th>Transfer To</th>
                            <th>Transaction Amount</th>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}