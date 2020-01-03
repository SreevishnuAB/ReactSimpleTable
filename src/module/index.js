import React from 'react';
import ReactSimpleTable from '../lib';

const demoData = [
	{
		color: "red",
		value: "#f00",
    asd: "123",
    qwe: "qwe"
	},
	{
		color: "green",
		value: "#0f0",
    asd: "23",
    qwe: "qwe"
	},
	{
		color: "blue",
		value: "#00f",
    asd: "345",
    qwe: "qwe"
	},
	{
		color: "cyan",
		value: "#0ff",
    asd: "6786",
    qwe: "qwe"
	},
	{
		color: "magenta",
		value: "#f0f",
    asd: "235",
    qwe: "qwe"
	},
	{
		color: "yellow",
		value: "#ff0",
    asd: "353",
    qwe: "qwe"
	},
	{
		color: "black",
		value: "#000",
    asd: "75678",
    qwe: "qwe"
  },
  {
		color: "red",
		value: "#f00",
    asd: "908",
    qwe: "qwe"
	},
	{
		color: "green",
		value: "#0f0",
    asd: "2342",
    qwe: "qwe"
	},
	{
		color: "blue",
    value: "#00f",
    asd: "122",
    qwe: "qwe"
	},
	{
		color: "cyan",
		value: "#0ff",
    asd: "087",
    qwe: "qwe"
	},
	{
		color: "magenta",
		value: "#f0f",
    asd: "4634",
    qwe: "qwe"
	},
	{
		color: "yellow",
		value: "#ff0",
    asd: "15414",
    qwe: "qwe"
	},
	{
		color: "black",
		value: "#000",
    asd: "786",
    qwe: "qwe"
  },
  {
		color: "red",
		value: "#f00",
    asd: "2342",
    qwe: "qwe"
	},
	{
		color: "green",
		value: "#0f0",
    asd: "12321",
    qwe: "qwe"
	},
	{
		color: "blue",
		value: "#00f",
    asd: "56456",
    qwe: "qwe"
	},
	{
		color: "cyan",
		value: "#0ff",
    asd: "756",
    qwe: "qwe"
	},
	{
		color: "magenta",
		value: "#f0f",
    asd: "6746",
    qwe: "qwe"
	},
	{
		color: "yellow",
		value: "#ff0",
    asd: "345",
    qwe: "qwe"
	},
	{
		color: "black",
    value: "#000",
    asd: "756",
    qwe: "qwe"
	},
];

const App = ()=>{
  return (
    <React.Fragment>
      <div>React Simple Table</div>
      <ReactSimpleTable tableData={demoData} />
      <div>With Pagination</div>
      <ReactSimpleTable tableData={demoData} pagination rowsPerPage={10} />
    </React.Fragment>
  );
}
export default App;