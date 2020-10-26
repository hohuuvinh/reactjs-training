import React, { Component } from 'react';
import fire from './config/fire';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u);
        }).catch((err) => {
            console.log(err);
        })
    }
    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u);
        }).catch((err) => {
            console.log(err);
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form>
                    <input type="email" id="email" name="email" placeholder="email"
                        onChange={this.handleChange}
                        value={this.state.email}>
                    </input>
                    <input type="password" id="password" name="password" placeholder="password"
                        onChange={this.handleChange}
                        value={this.state.password}>
                    </input>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Signup</button>
                </form>
            </div>
        )
    }
}
