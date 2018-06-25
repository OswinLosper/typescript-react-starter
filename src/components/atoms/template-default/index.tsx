import * as React from 'react';
const { Component } = React;

export default class TemplateDefault extends Component<any, any> {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}
