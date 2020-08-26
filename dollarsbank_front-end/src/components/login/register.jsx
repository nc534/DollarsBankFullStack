import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default class Register extends Component {

    render() {

        return (
            <div class="main">
                <div class="container">
                    <div class="header">
                        Register
                    </div>
                            
                    {/* <div class="error">{ this.state.errorMsg }</div>*/}
                            
                    <form action="/*{this.handleLogin}*/" method="post" class="form">
                        <div class="form-group">
                            <label for="account">Account </label>
                            <select name="account">
                                <option value="">--Please choose an option--</option>
                                <option value="savings">Savings</option>
                                <option value="checking">Checking</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="initial_deposit">Amount</label>
                            <input type="number" name="initial_deposit" required placeholder="0.00" min="0.00" step="0.01"/>
                        </div>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" required placeholder="name" /*value={this.state.name} onChange={this.handleChange}*//>
                        </div>
                        <div class="form-group">
                            <label for="address">Address</label>
                            <input type="text" name="address" required placeholder="address" /*value={this.state.address} onChange={this.handleChange}*//>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="text" name="phone" required placeholder="phone" /*value={this.state.phone} onChange={this.handleChange}*//>
                        </div>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" required placeholder="username" /*value={this.state.username} onChange={this.handleChange}*//>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" required placeholder="password"
                            pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must contain at least one number, one uppercase, one lowercase letter, and at least 8 or more characters"
                            /*value={this.state.password} onChange={this.handleChange}*//>
                        </div>
                            <button type="submit" class="btn">Register</button>
                        <div>
                            <p>Already have an account?</p><Link to='/login'><p>Login</p></Link>
                        </div>
                    </form>
                </div>
	        </div>
        )
    }
}