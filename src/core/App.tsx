import * as React from 'react';
import Router from './router';

import './App.css';

// import mainlogo from '~/resources/mainlogo.svg';

// const originalComponent = () => (
//   <div className="App">
//     <header className="App-header">
//       <img src={mainlogo} className="App-logo" alt="logo" />
//       <h1 className="App-title">Welcome to React</h1>
//     </header>
//     <p className="App-intro">
//       To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>
//   </div>
// );

class App extends React.Component {

  componentDidMount() {

  }

  public render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

export default App;
