import React, { useState } from 'react';
import PropTypes from 'prop-types';

const generateTableBody = (tableData)

export default function ReactSimpleTable(props){

  const [enablePagination, setEnablePagination] = useState(false);

  const testData = [{key1:"value1",key2:"value2"}, {key1:"value1",key2:"value2"}, {key1:"value1",key2:"value2"}]; //for testing

  const tableData = testData;
  const rowsPerPage = 2;//for testing
  const currPage = 1;
  const numPages = (parseInt(tableData.length/rowsPerPage)) + ((tableData.length%rowsPerPage > 0)? 1: 0);
  const tableHeader = (<thead>
                        <tr>
                          {Object.keys(tableData[0]).map((value,index)=>(
                            <th key={`theader${index}`}>
                              {value}
                            </th>))
                          }
                        </tr>
                      </thead>);
  const tableFooter = (<tfoot>
                        <tr>
                          <td colSpan={Object.keys(tableData).length}>
                            <button>
                              Previous
                            </button>
                            <span>
                              {currPage} of {numPages}
                            </span>
                            <button>
                              Next
                            </button>
                          </td>
                        </tr>
                      </tfoot>);

  const tableBody = (<tbody>
                      {

                      }
                    </tbody>);

//  console.log(testData[0]);
    return(
      <table>
        {tableHeader}
        {tableBody}
        {tableFooter}
      </table>
    );

}
