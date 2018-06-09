import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = props => {
  return (
    <Employee name="Elizabeth" age={27} />
  )
}
const Employee = props => (
    <ul>
      <li>{props.name}</li>
      <li>{props.age}</li>
      <li>{props.position}</li>
    </ul>
  );

  Employee.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    position: PropTypes.string
  }

  Employee.defaultProps = {
    position: 'employee'
  }

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
