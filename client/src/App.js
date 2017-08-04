import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './containers/Landing'
import PhotoGallery from './containers/PhotoGallery'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={ Landing } />
            <Route path='/showtime' component={ PhotoGallery} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
