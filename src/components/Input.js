import React, { Component } from 'react'
import './input.css'

class Input extends Component {
  renderError() {

    return <div className="inputErrorMessage">{this.props.error}</div>
  }

  render() {
    const {label, type, error, onFocus, onChange} = this.props

    return (
      <div>
        <div className="inputLabel">{label}</div>
        <input onChange={onChange} className={!error ? "inputField" : "inputFieldError"} type={type} placeholder={this.props.placeholder} onFocus={onFocus} name={label} />
        {error ? this.renderError(): null}
      </div>
    )
  }
}

export default Input
