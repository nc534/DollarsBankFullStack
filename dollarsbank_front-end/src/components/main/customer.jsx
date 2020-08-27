import React, {Component} from 'react';

export default class Customer extends Component {

    render() {
        return(
            <div class="customerMain"> 
                <div class="accountInfo">
                <h3>Your Account Information</h3>
                
                <table>
                    <tr><td>Name: </td></tr>
                    <tr><td>Phone: </td></tr>
                    <tr><td>Address: </td></tr>
                    <tr><td>User Id: </td></tr>
                </table>

                </div>
            </div>
            
        )
    }
}