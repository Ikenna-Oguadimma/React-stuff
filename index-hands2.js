import React from 'react';
import ReactDOM from 'react-dom';

// function censusTable() {
//   return (
//     <div>
//     <tr>
//       <th>State</th>
//       <th>Population</th>
//       <th>Capital</th>
//     </tr>
//     <tr>
//       <td>Idaho</td>
//       <td>1.683 million</td>
//       <td>Boise</td>
//     </tr>
//     <tr>
//       <td>Tennessee</td>
//       <td>6.651 million</td>
//       <td>Nashville</td>
//     </tr>
//     <tr>
//       <td>Maine</td>
//       <td>1.331 million</td>
//       <td>Agusta</td>
//     </tr>
//     <tr>
//       <td>Wisconsin</td>
//       <td>5.779 million</td>
//       <td>Madison</td>
//     </tr>
//     </div>
//   );
// }

const censusTable = (
  header1,
  header2,
  header3,
  info1row1,
  info2row1,
  info3row1,
  info1row2,
  info2row2,
  info3row2,
  info1row3,
  info2row3,
  info3row3,
  info1row4,
  info2row4,
  info3row4) => {
  return(
    <div>
      <tr>
        <th>{header1}</th>
        <th>{header2}</th>
        <th>{header3}</th>
      </tr>
      <tr>
        <td>{info1row1}</td>
        <td>{info2row1}</td>
        <td>{info3row1}</td>
      </tr>
      <tr>
        <td>{info1row2}</td>
        <td>{info2row2}</td>
        <td>{info3row2}</td>
      </tr>
      <tr>
        <td>{info1row3}</td>
        <td>{info2row3}</td>
        <td>{info3row3}</td>
      </tr>
      <tr>
        <td>{info1row4}</td>
        <td>{info2row4}</td>
        <td>{info3row4}</td>
      </tr>
    </div>
  );
}


ReactDOM.render(
  censusTable(
  'State',
  'Population',
  'Capital',
  'Idaho',
  '1.683 million',
  'Boise',
  'Tennessee',
  '6.651 million',
  'Nashville',
  'Maine',
  '1.331 million',
  'Agusta',
  'Wisconsin',
  '5.779 million',
  'Madison'
),
  document.getElementById('form')
);
