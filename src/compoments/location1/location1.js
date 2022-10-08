import React,{ useEffect,useState,useContext } from 'react';
import CitySelector from '../location1/citySelector';
import Location1Selector from '../location1/location1Selector';
function Location1() {
    console.log("location1 rendering")

 return (
    <div className="container">
   <CitySelector/>
   <Location1Selector/>
    </div>
  );
}

export default React.memo(Location1);
