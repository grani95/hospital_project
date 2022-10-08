import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
// import Patient from './compoments/patient/patient';
// import Location1 from './compoments/location1/location1';
import Location from './compoments/location/location';

function App() {


  console.log("app rendering")
  return (

<div className="App container" dir="rtl">
<h1>Hello from react</h1>
<Location initVal={{cityVal:1,loctVal:4}} />
{/* <Location/> */}

  {/* <Patient /> */}
  </div>
  );
}

export default React.memo(App);
