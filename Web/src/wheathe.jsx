import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css'
import axios from "axios";
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
const Wheather = () => {
let flag = false
const [weatherData, setWeatherData] = useState(null)
  let baseUrl = ``;
  if (window.location.href.split(":")[0] === "http") {
      baseUrl = `http://localhost:5001`;
  }

const getData =  async()=>{
  flag = true
  console.log(flag)
  try {
    let wheatherDataz  =   await   axios.get(`${baseUrl}/weather`)  
   setWeatherData(wheatherDataz.data )    
// console.log(wheatherValue)
  } catch (error) {
    
  }
  
}

  return (
    <div>
        <h1   className= 'flex  flex-row justify-center text-white text-lg bg-slate-700' >
     Wheather App!!
    </h1>
    <div   className=' flex flex-row justify-center mt-4 ' >
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Wheather Data!!"
          className='border-2  rounded-md border-black'
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button   className='  text-white bg-slate-700 border-2 border-black rounded-xl px-2 mx-1  '   onClick={getData} variant="outline-secondary" id="button-addon2">
          Click Me
        </Button>
      </InputGroup>

      </div>
<div>
{(weatherData === null) ? null :
                <div>

                    Temperature: {Math.round(weatherData?.temp)}°C
                    <br />
                    min: {Math.round(weatherData?.min)}°C
                    <br />
                    max: {Math.round(weatherData?.max)}°C
                    <br />
                    humidity: {Math.round(weatherData?.humidity)}°C
                </div>
            }
  
</div>
    </div>
  )
}

export default Wheather
