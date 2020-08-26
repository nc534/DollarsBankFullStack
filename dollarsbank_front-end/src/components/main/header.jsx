import React from 'react';
import {Link} from 'react-router-dom';

export const Header = (props) => {
    return(
        <nav>
            <div className="bank">Dollars Bank</div>
                <ul className="nav">
                    <li><Link to='/overview' className='link'>Overview</Link></li>
                    <li><Link to='/transaction' className='link'>Deposit/Withdraw</Link></li>
                    <li><Link to='/transfer' className='link'>Transfer</Link></li>
                    <li><Link to='/transactions' className='link'>Recent Transactions</Link></li>
                    <li><Link to='/accountinfo' className='link'>Account Information</Link></li>
                    <li><Link to='/login' className='link'>Log Out</Link></li>
                </ul>
        </nav>
    )
}