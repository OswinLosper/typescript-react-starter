import * as React from 'react';
const { Component } = React;

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
      <div>
        {title}
      </div>
    );
  }
}
