import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ReactSimpleTable(props){

  const testData = [{key1:"value1",key2:"value2"}, {key1:"value1",key2:"value2"}, {key1:"value1",key2:"value2"}]; //for testing

  const tableData = testData;
  const tableHeader = (<thead>
                    <tr>
                      {Object.keys(tableData[0]).map((value,index)=>(
                        <th key={`theader${index}`}>
                          {value}
                        </th>))
                      }
                    </tr>
                  </thead>);

  const tableBody = (<tbody>
                  {tableData.map((object, index) =>(
                    <tr key={`trow${index}`}>
                      {Object.values(object).map((value, index) =>(
                        <td key={`tdata${index}`}>
                          {value}
                        </td>))
                      }
                    </tr>))
                  }
                </tbody>);

//  console.log(testData[0]);
    return(
      <table>
        {tableHeader}
        {tableBody}
      </table>
    );

}
