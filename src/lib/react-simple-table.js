import React, { useState } from 'react';
import './react-simple-table.css';
import PropTypes from 'prop-types';

const generateTableBody = (tableData)=>{
  const tableBody = (tableData.map((object, index)=>(
    <tr key={`trow${index}`}>
      {Object.values(object).map((value, index)=>(
        <td className={(isNaN(parseInt(value)))?"rst-align-lt rst-data":"rst-align-rt rst-data"} key={`tdata${index}`}>
          {value}
        </td>
      ))}
    </tr>
  )));
  return tableBody;
}

const generateTableBodyPagination = (tableData, currPage,rowsPerPage)=>{
  const tableDataPaginated = [];
  
  for(var i = 0;i<tableData.length;i+=rowsPerPage)
    tableDataPaginated.push(tableData.slice(i,i+rowsPerPage));
  return generateTableBody(tableDataPaginated[currPage]);
//  console.log(tableDataPaginated);
}

export default function ReactSimpleTable(props){

//  const testData = [{key1:"value1",key2:"key2"}, {key1:"value1",key2:"key2"}, {key1:"value1",key2:"key2"}]; //for testing

  const [currPage, setCurrPage] = useState(0);
  const tableData = props.tableData;//for testing, actual: props.tableData
  if(tableData.length % props.rowsPerPage > 0){
    
  }
  const rowsPerPage = props.rowsPerPage;//for testing, actual: props.rowsPerPage
  const numPages = (parseInt(tableData.length / rowsPerPage)) + ((tableData.length % rowsPerPage > 0)? 1: 0);

  const handleNext = ()=>{
    setCurrPage(currPage+1);
  }

  const handlePrevious = ()=>{
    setCurrPage(currPage-1);
  }

  const disableNext = ()=>{
    return (currPage === numPages-1)?true:false;
  }
  
  const disablePrevious = ()=>{
    return (currPage === 0)?true:false;
  }
  const tableHeader = (<thead >
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
                          <td colSpan={`${Object.keys(tableData[0]).length}`}>
                            <span className="rst-footer">
                              <button className="ripple rst-btn" disabled={disablePrevious()} onClick={handlePrevious}>
                                {'<'}
                              </button>
                              <span>
                                {currPage+1} of {numPages}
                              </span>
                              <button className="ripple rst-btn" disabled={disableNext()} onClick={handleNext}>
                                {'>'}
                              </button>
                            </span>
                          </td>
                        </tr>
                      </tfoot>);

  const tableBody = (<tbody >
                      {(props.pagination)?generateTableBodyPagination(tableData,currPage,props.rowsPerPage):generateTableBody(tableData)/* for testing, actual:props.pagination */}
                    </tbody>);

//  console.log(testData[0]);
    return(
      <div className="rst-container">
        <table className="rst-base">
          {tableHeader}
          {tableBody}
          {props.pagination && tableFooter }
        </table>
      </div>
    );

}

ReactSimpleTable.propTypes = {
  tableData: PropTypes.array.isRequired,
  pagination: PropTypes.bool,
  rowsPerPage : PropTypes.number,
};

ReactSimpleTable.defaultProps = {
  pagination: false,
  rowsPerPage: 2,
}