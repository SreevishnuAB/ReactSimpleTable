import React, { useState, useEffect} from 'react';
import './react-simple-table.css';
import PropTypes from 'prop-types';

const resolveClassNameTr = (object) =>{
  if(Object.values(object).includes(undefined))
    return "rst-data-placeholder";
}

const resolveClassName = (value)=>{

  if(value === undefined)
    return "";

  if(isNaN(parseInt(value)))
    return "rst-align-lt rst-data";
  else
    return "rst-align-rt rst-data";
}

const generateTableBody = (tableData)=>{
  const tableBody = (tableData.map((object, index)=>(
    <tr className={resolveClassNameTr(object)} key={`trow${index}`}>
      {Object.values(object).map((value, index)=>(
        <td className={resolveClassName(value)} key={`tdata${index}`}>
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
  const [propData, setPropData] = useState(props.tableData);

  useEffect(()=>{
    let data = propData;
    const dataObj = {};

    if(data.length % props.rowsPerPage > 0 && props.pagination ){

      Object.keys(data[0]).forEach((key)=>{
        dataObj[key] = undefined;
      });
      const placeholder = new Array(props.rowsPerPage - (data.length % props.rowsPerPage));
      placeholder.fill(dataObj);
//      console.log(placeholder);
      data = data.concat(placeholder);
      console.log(data);
      setPropData(data);
    }
  },[propData, props.rowsPerPage, props.pagination]);

  const tableData = propData;//for testing, actual: props.tableData

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
                              <button className={(disablePrevious())?"rst-btn rst-btn-hidden" :"ripple rst-btn"} onClick={handlePrevious}>
                                {'<'}
                              </button>
                              <span>
                                {currPage+1} of {numPages}
                              </span>
                              <button className={(disableNext())?"rst-btn rst-btn-hidden" :"ripple rst-btn"} onClick={handleNext}>
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
  rowsPerPage: 5,
}