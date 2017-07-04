import React, {Component} from 'react'
import Input from './components/Input'
import './form.css'

class Form extends Component {
  state = {}

  inputValueOf(field) {
    return this.state[field]
  }

  handleSetFieldValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createRequest() {
    return {
      name: this.inputValueOf('name'),
      email: this.inputValueOf('email'),
      birthday: this.inputValueOf('birthday'),
      password: btoa(this.inputValueOf('password'))
    }
  }

  handleNameValidation() {
    const value = this.inputValueOf('name')

    if (value === '' || value === undefined) {
      return 'Please fill out your name.' 
    }
  }

  handleEmailValidation() {
    const value = this.inputValueOf('email')
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!value.match(emailRegex)) {
      return 'Please enter a valid email address.' 
    }
  }

  handleBirthDateValidation() {
    const value = this.inputValueOf('birthday')

    if (value === '' || value === undefined) {
      return 'Please choose a birthday.' 
    }
  }

  handlePasswordValidation() {
    const value = this.inputValueOf('password')

    if (value === '') {
      return 'Please enter a password.'
    }

    if (value.length < 5) {
      return 'Passwords must be over 5 characters.'
    }
  }

  handleSubmit = () => {
    this.setState({
      nameInputErrors: this.handleNameValidation(),
      emailInputErrors: this.handleEmailValidation(),
      birthdayInputErrors: this.handleBirthDateValidation(),
      passwordInputErrors: this.handlePasswordValidation()
    }, () => {
      if (
        !this.state.nameInputErrors && 
        !this.state.emailInputErrors && 
        !this.state.birthdayInputErrors && 
        !this.state.passwordInputErrors) {
        
        console.log(this.createRequest())
      }
    })
  }

  handleClearError = e => {
    if (e.target.type === 'text') {
      this.setState({
        nameInputErrors: null,
      })
    }

    if (e.target.type === 'email') {
      this.setState({
        emailInputErrors: null,
      })
    }

    if (e.target.type === 'date') {
      this.setState({
        birthdayInputErrors: null,
      })
    }

    if (e.target.type === 'password') {
      this.setState({
        passwordInputErrors: null,
      })
    }
  }

  render() {
    return (
      <div className="app">
        <div className="formContainer">
          <h3 className="formHeader">
            Create an Account
          </h3>
          <div className="divider"></div>
          <Input label="name" onChange={this.handleSetFieldValue} placeholder="First Last" type="text" error={this.state.nameInputErrors} onFocus={this.handleClearError} />
          <Input label="email" onChange={this.handleSetFieldValue} type="email" error={this.state.emailInputErrors} onFocus={this.handleClearError} />
          <Input label="birthday" onChange={this.handleSetFieldValue} type="date" error={this.state.birthdayInputErrors} onFocus={this.handleClearError} />
          <Input label="password" onChange={this.handleSetFieldValue} type="password" error={this.state.passwordInputErrors} onFocus={this.handleClearError} />
          <div className="submitForm" onClick={this.handleSubmit}>Create an Account</div>
        </div>
      </div>
    )
  }
}

export default Form
