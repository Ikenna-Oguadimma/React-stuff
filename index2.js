import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Home, Mine, Search } from './screens';


const Index = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/mine" component={Mine} />
      </div>
    </Router>
  </Provider>
);

let pathname = window.location.pathname;

render(<Index />, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});


const route = (WrappedComponent, routes) => {
  return class extends React.Component {
    render() {
      const ComponentForPathname = routes[this.props.pathname];
      return (
        <WrappedComponent>
          <ComponentForPathname {...this.props} />
        </WrappedComponent>
      );
    }
  };
};

const Root = props =>
  <div>
    {props.children}
  </div>;

  const Router = route(Root, {
  "/": Home,
  "/search": Search,
  "/mine:": Mine
});

let pathname = window.location.pathname;

ReactDOM.render(<Router pathname={pathname} />, document.getElementById("root"));

window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
}
