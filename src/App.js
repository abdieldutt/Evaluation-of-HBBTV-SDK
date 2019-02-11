import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import TodaysMatches from './components/TodaysMatches';
import Summary from './components/Summary';
import Statistics from './components/Statistics';
import Rankings from './components/Rankings';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path= '/' component= {Home} exact />
              <Route path= '/todaysmatches' component= {TodaysMatches}  />
              <Route path= '/summary' component= {Summary}  />
              <Route path= '/statistics' component={Statistics}/>
              <Route path= '/rankings' component={Rankings}/>
              <Route component={Error} exact/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
