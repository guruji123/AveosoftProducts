import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Navbar from './Components/Navbar';


class App extends Component {

  render() {
    return (
      <React.Fragment>
         <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details/:id" component={Details} />
        </Switch>
        
      </React.Fragment>
    );
  }
}

export default App;
 