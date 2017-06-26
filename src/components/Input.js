import React, { Component } from 'react'
import './input.css'

class Input extends Component {
  renderError() {

    return <div className="inputErrorMessage">{this.props.error}</div>
  }

  render() {
    const {label, type, error, onFocus} = this.props

    return (
      <div>
        <div className="inputLabel">{label}</div>
        <input className={!error ? "inputField" : "inputFieldError"} type={type} onFocus={onFocus} />
        {error ? this.renderError(): null}
      </div>
    )
  }
}

export default Input
