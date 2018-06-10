import React from 'react';
import { render } from 'react-dom';
import Home from '../src/screens/Home';
import About from '../src/screens/About';
import Topics from '../src/screens/Topics';
import {BrowserRouter as Router, Route, Link } from 'react router dom';

const Index = ({ pathname }) => {
  switch (pathname) {
    case '/about':
      return <About />;
    case '/topics':
      return <Topics />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});
