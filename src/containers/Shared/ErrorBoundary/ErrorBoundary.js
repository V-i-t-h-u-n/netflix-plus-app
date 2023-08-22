import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError (Error) {
    return {
      hasError: true
    }
  }

  render () {
    if (this.state.hasError) {
      return (
        <div>
          <p className='alert alert-danger'>Some error occured!!!Contact Admin</p>
        </div>
      )
    }
    return (
      <div>{this.props.children}</div>
    )
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element

}

export default ErrorBoundary
