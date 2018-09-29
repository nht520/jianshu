import React, { Component } from 'react';
import Header from './common/header/header';
import { BrowserRouter,Route } from 'react-router-dom'
//引用redux 和 store 仓库
import { Provider } from 'react-redux'
import store from './store/index'
//
import Home from './pages/home/home';
import Detail from './pages/detail/detail';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div id='App'>
                {/*header组件*/}
                <Header/>
                <BrowserRouter>
                   <div>
                       <Route path='/' exact component={Home}>
                       </Route>
                       <Route path='/detail' exact component={Detail}>
                       </Route>
                   </div>
                </BrowserRouter>
            </div>
        </Provider>
    );
  }
}
export default App;
