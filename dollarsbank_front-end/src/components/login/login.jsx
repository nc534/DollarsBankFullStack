import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default class Login extends Component {

    render() {
        return (
            <div class="main">
            <h1>DOLLARSBANK Welcomes You!!</h1>
                <div class="container">
                    <div class="header">
                        Login
                    </div>
                    
                    {/* <div class="error">{ this.state.errorMsg }</div>
                    <div class="message">{this.state.message}</div> */}
                    
                    <form action=/*{this.handleLogin}*/"" method="post" class="form">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" required placeholder="username" /*value={this.state.username} onChange={this.handleChange}*//>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" required placeholder="password" /*value={this.state.username} onChange={this.handleChange}*//>
                        </div>
                        <div>
                            <button type="submit" class="btn">Login</button>
                        </div>
                        <div>
                            <p>Don't have an account? </p><Link to='/register'><p>Register</p></Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}