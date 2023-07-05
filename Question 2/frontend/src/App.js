import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

var value='hello'


function App() {
  return (
    <div>
      <div className='App-header'>Time to Train</div>
      <GetTrains/>
      <SearchTrain/>

    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);
  var yourname
  var nameid="1"
  var display
  function handleClick() {
     yourname=document.getElementById(nameid);
     alert(yourname);
  }
  if(yourname){
    display="hi "+yourname;
  }

  return (
    <>
    
    
    <h3>{display}</h3>
    </>
  );
}

function GetTrains(){
  const [data,setData]=useState([])
  var trainlist
  useEffect(()=>{
    fetch("/listoftrains").then(
      res=>res.json())
      .then(data => setData(data))
    console.log(data)
     
    
  },[])
  trainlist = data.map(data =>
    <>

	<tr>
		<td >{data.trainName} <br/>Train No: {data.trainNumber}</td>
    <td width= "50" color='red'>{data.departureTime.Hours}:{data.departureTime.Minutes}</td>
    <td >sleeper - {data.seatsAvailable.sleeper}<br/>AC - {data.seatsAvailable.AC}</td>
    <td >sleeper - ₹ {data.price.sleeper}<br/>AC - ₹ {data.price.AC}</td>
		<td>{data.delayedBy}</td>
	</tr>
	

    </>
  );

  return (
    <>
    {/* <form action="/post" method="post" className="form">
          <button type='submit'>Click me </button>
    </form> */}
    <table width= "700">
    	<tr>
		<th>Name</th>
		<th>Departure Time</th>
    <th>Available Seats</th>
    <th>Price</th>
		<th>Delayed By</th>
	</tr>
    {trainlist}
    </table>
    </>
  )
}

function SearchTrain(){
  const [data,setData]=useState([])
  var trainlist
  useEffect(()=>{
    fetch("/traindetails").then(
      res=>res.json())
      .then(data => setData(data))
    console.log(data)
     
    
  },[])
  trainlist = data.map(data =>
    <>

	<tr>
		<td >{data.trainName} <br/>Train No: {data.trainNumber}</td>
    <td>{data.departureTime.Hours}:{data.departureTime.Minutes}</td>
    <td >sleeper - {data.seatsAvailable.sleeper}<br/>AC - {data.seatsAvailable.AC}</td>
    <td >sleeper - ₹ {data.price.sleeper}<br/>AC - ₹ {data.price.AC}</td>
		<td>{data.delayedBy}</td>
	</tr>
	

    </>
  );

  return (
    <>
    {/* <form action="/post" method="post" className="form">
          <button type='submit'>Click me </button>
    </form> */}
    <table width= "700">
    	<tr>
		<th>Name</th>
		<th>Departure Time</th>
    <th>Available Seats</th>
    <th>Price</th>
		<th>Delayed By</th>
	</tr>
    {trainlist}
    </table>
    </>
  )

}




export default App;
