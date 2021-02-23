import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import GoogleBooksSearch from './GoogleBooksSearch';
import Poker from './Poker';
import MarchMadness from './MarchMadness';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import NavigationBar from './components/NavigationBar';
import { Footer } from './components/Footer';
import './index.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/googlebookssearch" component={GoogleBooksSearch} />
              <Route path="/poker" component={Poker} />
              <Route path="/marchmadness" component={MarchMadness} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
