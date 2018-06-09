import React from 'react';
import ReactDOM from 'react-dom';


const App = props => {
  const favoriteCars = [
    { make: 'Honda', model: 'CR-V' }, { make: 'Toyota', model: 'Highlander' },
    { make: 'Ford', model: 'F-150' }, { make: 'BMW', model: 'X3' },
    { make: 'Subaru', model: 'Crosstrek' }
  ];
return (
  <div>
    <List favoriteCars={favoriteCars} />
  </div>
  );
};

const List = props => {
  const listCars = props.favoriteCars.map((item, index) => (
    <li key={index}>
      {item.make}: {item.model}
    </li>
  ));
  return <ol>{listCars}</ol>;
};

ReactDOM.render(<App/>, document.getElementById('root'));
