import React, { Component } from "react";

class RegistrationForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:"",
            user:'stas008',
            password1:'123454321',
            isGoing: false
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
         if(this.state.email === this.state.user && this.state.password === this.state.password1 && this.state.isGoing === true) {
            alert('You are loge in')
        }
        else{
            alert('u are bad hacker +_+')
        }
        
      }

    handleEmailChange(event) {
        console.log('email was changed', event.target.value);
        this.setState({email: event.target.value})
    }
    handlePasswordChange(event) {
        console.log('email was changed', event.target.value);
        this.setState({password: event.target.value})
    }
    handleCheckboxChange(event) {
        console.log('status', event.target.checked);
        this.setState({isGoing: event.target.checked})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                className="firstinput" 
                type="text"
                placeholder="E-mail"
                value={this.state.email}
                onChange={this.handleEmailChange}
                />
                <p>
                <input
                className="firstinput"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                />
                </p>
                <p>
                <p>
                <input type="checkbox"
                onChange={this.handleCheckboxChange}
                />
                </p>
                <button
                className="firstbtn"
                >SIGN IN</button>
                </p>

            </form>
         );
    }
}

export default RegistrationForm;