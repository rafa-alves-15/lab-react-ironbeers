import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import BeersList from './BeersList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/beerslist" component={BeersList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
