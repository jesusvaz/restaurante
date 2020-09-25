import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import Main from './components/main/main.component';
import About from './components/about/about.component';
import Reviews from './components/reviews/review.component';
import Header from './components/header/header.component';
import './App.css';
 
function App() {
 return (
   <div className="App">
     <Header/>
     <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/about' exact component={About} />
      
        <Route
                path="/reviews"
                render={props => (
                    <Reviews {  ...props}  />
                )}
            />
      </Switch>
   </div>
 );
}
 
export default App;