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
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Transaction</th>
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