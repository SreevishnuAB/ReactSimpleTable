import React from 'react';
import ReactSimpleTable from '../lib';

const demoData = [
	{
		color: "red",
		value: "#f00",
    asd: "123"
	},
	{
		color: "green",
		value: "#0f0",
    asd: "23"
	},
	{
		color: "blue",
		value: "#00f",
    asd: "345"
	},
	{
		color: "cyan",
		value: "#0ff",
    asd: "6786"
	},
	{
		color: "magenta",
		value: "#f0f",
    asd: "235"
	},
	{
		color: "yellow",
		value: "#ff0",
    asd: "353"
	},
	{
		color: "black",
		value: "#000",
    asd: "75678"
  },
  {
		color: "red",
		value: "#f00",
    asd: "908"
	},
	{
		color: "green",
		value: "#0f0",
    asd: "2342"
	},
	{
		color: "blue",
    value: "#00f",
    asd: "122"
	},
	{
		color: "cyan",
		value: "#0ff",
    asd: "087"
	},
	{
		color: "magenta",
		value: "#f0f",
    asd: "4634"
	},
	{
		color: "yellow",
		value: "#ff0",
    asd: "15414"
	},
	{
		color: "black",
		value: "#000",
    asd: "786"
  },
  {
		color: "red",
		value: "#f00",
    asd: "2342"
	},
	{
		color: "green",
		value: "#0f0",
    asd: "12321"
	},
	{
		color: "blue",
		value: "#00f",
    asd: "56456"
	},
	{
		color: "cyan",
		value: "#0ff",
    asd: "756"
	},
	{
		color: "magenta",
		value: "#f0f",
    asd: "6746"
	},
	{
		color: "yellow",
		value: "#ff0",
    asd: "345"
	},
	{
		color: "black",
    value: "#000",
    asd: "756"
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