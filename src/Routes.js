
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Safer from './components/portfolio/Safer';
import FoodiePhonetics from './components/portfolio/FoodiePhonetics';
import ForTheWin from './components/portfolio/ForTheWin';
import coc69th from './components/portfolio/69th';
import NCSS from './components/portfolio/NCSS';
import FreshMarket from './components/portfolio/FreshMarket';
import About from './components/AboutMe';
import Footer from './components/Footer';


export default class Routes extends Component {

  render() {

    return (
      <Router>
        <div className='appPage'>
          <main className='main' role='main'>
            <Route exact path='/' component={Home} />
            <Route exact path='/' component={Portfolio} />
            <Route exact path='/' component={About} />
            <Route exact path='/' component={Footer} />
            
            <Route exact path='/safer' component={Safer} />
            <Route exact path='/foodiephonetics' component={FoodiePhonetics} />
            <Route exact path='/forthewin' component={ForTheWin} />
            <Route exact path='/69th' component={coc69th} />
            <Route exact path='/ncss' component={NCSS} />
            <Route exact path='/freshmarket' component={FreshMarket} />
          </main>
        </div>
      </Router>
    );
  }
}