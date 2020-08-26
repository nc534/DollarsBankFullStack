import React, {Component} from 'react';
import {Header} from './header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Overview from './overview'
import NewAccount from './new_account';
import DepositWithdraw from './deposit_withdraw';
import Transfer from './transfer';
import Transactions from './transactions';
import Customer from './customer';
import Login from '../login/login';
import './style.css'

export default class Main extends Component {

    render() {

        return(
            <div className="customerMain">
                <Router>
                    <Header />
                    
                    <Switch>
                        {/* Default page */}
                        <Route exact path='/main' component={Overview} />
                        <Route exact path='/overview' component={Overview} />
                        <Route exact path='/new-account' component={NewAccount} />
                        <Route exact path='/transaction' component={DepositWithdraw} />
                        <Route exact path='/transfer' component={Transfer} />
                        <Route exact path='/transactions' component={Transactions} />
                        <Route exact path='/accountinfo' component={Customer} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </Router>
            </div>
        )
    }
}