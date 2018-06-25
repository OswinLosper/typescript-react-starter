import React, { Component } from 'react';

export interface IHomePageProps {
  title?: string;
}

export default class HomePage extends Component<IHomePageProps, any> {
  static defaultProps = {
    title: 'Welcome!',
  };

  render() {
    const { title } = this.props;
    return (
      <div className="container">
        This is a test
      </div>
    );
  }
}
