import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';
function Home() {
  return (
    <div>
      <div className="card">
        <Link className="me-2" to={'/BeersList'}>
          <img src={beers} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h1>All Beers</h1>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </div>
      </div>
      <div className="card">
        <Link className="me-2" to={'/RandomBeers'}>
          <img src={randomBeer} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h1>Random Beers</h1>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing est. Vivamus
            pharetra egestas lacus sit amet eleifend ex unic cunt in Nam.
          </p>
        </div>
      </div>
      <div className="card">
        <Link className="me-2" to={'/NewBeer'}>
          <img src={newBeer} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <h1>New Beers</h1>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing est. Vivamus
            pharetra egestas lacus sit amet eleifend ex unic cunt in Nam.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
