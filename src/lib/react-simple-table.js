import React, { useState } from 'react';
import PropTypes from 'prop-types';

const generateTableBody = (tableData)=>{
  const tableBody = (tableData.map((object, index)=>(
    <tr key={`trow${index}`}>
      {Object.values(object).map((value, index)=>(
        <td key={`tdata${index}`}>
          {value}
        </td>
      ))}
    </tr>
  )));
  return tableBody;
}

const generateTableBodyPagination = (tableData, currPage,rowsPerPage)=>{
  const tableDataPaginated = new Array();
  
  for(var i = 0;i<tableData.length;i+=rowsPerPage)
    tableDataPaginated.push(tableData.slice(i,i+rowsPerPage));
  return generateTableBody(tableDataPaginated[currPage]);
//  console.log(tableDataPaginated);
}

export default function ReactSimpleTable(props){

  const testData = [{key1:"value1",key2:"value2"}, {key1:"value1",key2:"value2"}, {key1:"value1",key2:"value2"}]; //for testing

  const [currPage, setCurrPage] = useState(0);
  const tableData = testData;//for testing, actual: props.tableData
  const rowsPerPage = 2;//for testing, actual: props.rowsPerPage
  const numPages = (parseInt(tableData.length / rowsPerPage)) + ((tableData.length % rowsPerPage > 0)? 1: 0);

  const handleNext = ()=>{
    setCurrPage(currPage+1);
  }

  const handlePrevious = ()=>{
    setCurrPage(currPage-1);
  }

  const disableNext = ()=>{
    return (currPage == numPages-1)?true:false;
  }
  
  const disablePrevious = ()=>{
    return (currPage == 0)?true:false;
  }
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
                            <button disabled={disablePrevious()} onClick={handlePrevious}>
                              {'<'}
                            </button>
                            <span>
                              {currPage+1} of {numPages}
                            </span>
                            <button disabled={disableNext()} onClick={handleNext}>
                              {'>'}
                            </button>
                          </td>
                        </tr>
                      </tfoot>);

  const tableBody = (<tbody>
                      {(false)?generateTableBodyPagination(tableData,currPage,2):generateTableBody(tableData)/* for testing, actual:props.pagination */}
                    </tbody>);

//  console.log(testData[0]);
    return(
      <table>
        {tableHeader}
        {tableBody}
        {/*props.pagination && */tableFooter }
      </table>
    );

}
