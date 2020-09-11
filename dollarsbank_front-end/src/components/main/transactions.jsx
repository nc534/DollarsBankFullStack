import React, {useContext} from 'react';
import { AppContext } from "../App";

export default function Transactions() {

    const [state] = useContext(AppContext);

        return(
            <div className="customerMain">
                <h3>Recent Transactions</h3>
                {state.accounts.map(account => {
                    return (
                        <div className='transactions' key={account.id}>
                            <h4>{account.accountName}</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Transaction</th>
                                    </tr>
                                </thead>
                                {account.transactions.slice(0, 5).map(transactions => {
                                    return(
                                        <tbody key={transactions.date}>
                                            <tr>
                                                <td className="transDate">{transactions.date}</td>
                                                <td className="transAmount">${(transactions.amount/100).toFixed(2)}</td>
                                                <td className="transMessage">{transactions.message}</td>
                                            </tr>
                                        </tbody>
                                    )
                                
                                })}
                            </table>
                        </div>
                    );
                })};
            </div>
        )
}