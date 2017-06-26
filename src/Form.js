import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Input from './components/Input'
import './form.css'

class Form extends Component {
  state = {}

  inputValueOf(ref) {
    return findDOMNode(ref).children[1].value
  }

  createRequest() {
    return {
      name: this.inputValueOf(this.nameInput),
      email: this.inputValueOf(this.emailInput),
      birthday: this.inputValueOf(this.birthdayInput),
      password: this.inputValueOf(this.passwordInput)
    }
  }

  handleNameValidation() {
    const value = this.inputValueOf(this.nameInput)

    if (value === '' || value === undefined) {
      return 'Please fill out your name.' 
    }
  }

  handleEmailValidation() {
    const value = this.inputValueOf(this.emailInput)
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!value.match(emailRegex)) {
      return 'Please enter a valid email address.' 
    }
  }

  handleBirthDateValidation() {
    const value = this.inputValueOf(this.birthdayInput)

    if (value === '' || value === undefined) {
      return 'Please choose a birthday.' 
    }
  }

  handlePasswordValidation() {
    const value = this.inputValueOf(this.passwordInput)

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
        !this.state.nameInputError && 
        !this.state.emailInputErrors && 
        !this.state.birthdayInputErrors && 
        !this.state.passwordInputErrors) {

        console.log(this.createRequest())
      }
    })
  }

  handleClearError = e => {
    this.setState({
      nameInputErrors: null,
      emailInputErrors: null,
      birthdayInputErrors: null,
      passwordInputErrors: null
    })
  }

  render() {
    return (
      <div className="app">
        <div className="formContainer">
          <h3 className="formHeader">
            Create an Account
          </h3>
          <div className="divider"></div>
          <Input label="NAME" placeholder="First Last" ref={input => {this.nameInput = input}} type="text" error={this.state.nameInputErrors} onFocus={this.handleClearError} />
          <Input label="Email" ref={input => {this.emailInput = input}} type="email" error={this.state.emailInputErrors} onFocus={this.handleClearError} />
          <Input label="biRThDAy" ref={input => {this.birthdayInput = input}} type="date" error={this.state.birthdayInputErrors} onFocus={this.handleClearError} />
          <Input label="password" ref={input => {this.passwordInput = input}} type="password" error={this.state.passwordInputErrors} onFocus={this.handleClearError} />
          <div className="submitForm" onClick={this.handleSubmit}>Create an Account</div>
        </div>
      </div>
    )
  }
}

export default Form
