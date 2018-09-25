import React, { Component } from 'react';
import Header from './common/header/header';
import { Provider } from 'react-redux'
import store from './store/index'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Header/>
        </Provider>
      </div>
    );
  }
}

export default App;
