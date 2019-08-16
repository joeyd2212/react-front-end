import React, {Component} from 'react';
import {Link, Router, Route} from "react-router-dom";
import Country from "./Country";
import Create from "./Create";




class App extends Component {


  render(){
    return (

        <div className="App">
          <h1>List of Countries</h1>
          <nav>
            <Link to= "/">Country</Link>
          </nav>
          <nav>
            <Link to= "/create">Create</Link>
          </nav>


          <main>
            <Route path="/"  exact component={Country}/>
            <Route path="/create"  exact component={Create}/>
          </main>
        
          
        </div>
    );
  }
  
}

export default App;
