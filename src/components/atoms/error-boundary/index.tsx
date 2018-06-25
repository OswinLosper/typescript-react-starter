import React, { Component } from 'react';
import ErrorDisplayContainer from './styles';

interface IProps {
  children: any;
  silent?: boolean;
}

interface IState {
  hasError: boolean;
  errorMessage: Error;
  errorInfo: any;
}

class ErrorBoundary extends Component<IProps, IState> {
  static defaultProps = {
    children: null,
    silent: false,
  };

  state = {
    hasError: false,
    errorMessage: new Error(),
    errorInfo: { componentStack: {} },
  };

  // @ts-ignore
  componentDidCatch = (error: Error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error,
      errorInfo: info,
    });
  }

  render() {
    const { children, silent } = this.props;

    if (this.state.hasError) {
      return !silent ? (
        <ErrorDisplayContainer>
          <pre>{this.state.errorMessage.toString()}</pre>
          <pre>{this.state.errorInfo.componentStack}</pre>
        </ErrorDisplayContainer>
      ) : (
          <div />
        );
    }

    return children;
  }
}

export default ErrorBoundary;
