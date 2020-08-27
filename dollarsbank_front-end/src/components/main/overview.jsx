import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Overview extends Component {

    render() {
        return(
            <div>
                <h3>Hello, </h3>
                <div className='accountcontainer'>
                    <div className='balance'>
                        <p>Account: </p>
                        <hr />  
                        <p>Balance: </p>
                    </div>
                </div>

                <div class='accountcontainer'>
                    <Link to='/new-account' className='link'>OPEN NEW ACCOUNT</Link>
			    </div>
            </div>
        )
    }
}