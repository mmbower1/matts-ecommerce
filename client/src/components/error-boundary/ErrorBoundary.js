import React, { Component } from 'react';
import './ErrorBoundary.styles.scss';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(err) {
    // process err
    return { 
      hasError: true 
    }
  }

  componentDidCatch(err, info) {
    console.log(err);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-boundary">https://mikes-cbd.us is under construction :( Please try again later.</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
