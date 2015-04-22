'use strict';

import React from 'react';
import { default as Router, Route, Redirect, Link, RouteHandler } from 'react-router';
import Demo from './demo';

window.React = React;

class App extends React.Component {
  render () {
    return (
      <div>
        <RouteHandler />
      </div>
    )
  }
}

var routes = (
  <Route handler={App} path="/">
    <Route name="demo" handler={Demo} />
    <Redirect from="/" to="demo" />
  </Route>
);

Router.run(routes, Router.HashLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

