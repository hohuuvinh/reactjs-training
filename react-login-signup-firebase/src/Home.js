import React, { Component } from 'react';
import fire from './config/fire';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    logout = () => {
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <h1>Welcome to Appication</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
