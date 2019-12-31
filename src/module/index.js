import React from 'react';
import ReactSimpleTable from '../lib';

const demoData = [
	{
		color: "red",
		value: "#f00",
    asd: "qwe"
	},
	{
		color: "green",
		value: "#0f0",
    asd: "qwe"
	},
	{
		color: "blue",
		value: "#00f",
    asd: "qwe"
	},
	{
		color: "cyan",
		value: "#0ff",
    asd: "qwe"
	},
	{
		color: "magenta",
		value: "#f0f",
    asd: "qwe"
	},
	{
		color: "yellow",
		value: "#ff0",
    asd: "qwe"
	},
	{
		color: "black",
		value: "#000",
    asd: "qwe"
  },
  {
		color: "red",
		value: "#f00",
    asd: "qwe"
	},
	{
		color: "green",
		value: "#0f0",
    asd: "qwe"
	},
	{
		color: "blue",
    value: "#00f",
    asd: "qwe"
	},
	{
		color: "cyan",
		value: "#0ff",
    asd: "qwe"
	},
	{
		color: "magenta",
		value: "#f0f",
    asd: "qwe"
	},
	{
		color: "yellow",
		value: "#ff0",
    asd: "qwe"
	},
	{
		color: "black",
		value: "#000",
    asd: "qwe"
  },
  {
		color: "red",
		value: "#f00",
    asd: "qwe"
	},
	{
		color: "green",
		value: "#0f0",
    asd: "qwe"
	},
	{
		color: "blue",
		value: "#00f",
    asd: "qwe"
	},
	{
		color: "cyan",
		value: "#0ff",
    asd: "qwe"
	},
	{
		color: "magenta",
		value: "#f0f",
    asd: "qwe"
	},
	{
		color: "yellow",
		value: "#ff0",
    asd: "qwe"
	},
	{
		color: "black",
    value: "#000",
    asd: "qwe"
	},
];

const App = ()=>{return (
  <React.Fragment>
    <div>React Simple Table</div>
    <ReactSimpleTable tableData={demoData} />
    <div>With Pagination</div>
    <ReactSimpleTable tableData={demoData} pagination rowsPerPage={5} />
  </React.Fragment>
);}
export default App;