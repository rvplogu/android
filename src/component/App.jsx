import React, { Component } from 'react';
import { Button } from 'antd';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            {' '}
            <Button type="link"> Link </Button>
          </Route>
          <Route exact path="/topics">
            {' '}
            <h3> Please select a topic. </h3>
          </Route>
        </Switch>{' '}
      </BrowserRouter>
    );
  }
}
export default App;
