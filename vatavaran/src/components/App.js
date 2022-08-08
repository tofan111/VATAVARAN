import { useState, useEffect } from 'react';
import "../styles/app.css";
import DisplayData from './DisplayData';
import Search from "./Search";

function App() {
    const [ city, setCity ] = useState('');
    const [ data, setData ] = useState({});
    
    //code before

  const baseUrl = "https://api.openweathermap.org/data/2.5";
  const apiKey = "77128009939dbe4d4eb999963758759e";
  
  useEffect(() => {
    async function getWeatherData(){
       const res = await fetch(`${baseUrl}/weather?q=${city}&appid=${apiKey}`);
       const fetchData = await res.json();
       console.log(fetchData);
       setData(fetchData);
    }

    getWeatherData();
    
  },[city]);



  return (
    <div className="app-container">
      <p className="app-title">VATAVARAN</p>
      <Search setCity={setCity}/>
      
      <DisplayData data={data}/>
      
    </div>
  );
}

export default App;
