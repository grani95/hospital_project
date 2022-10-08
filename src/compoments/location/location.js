import React, { useEffect,useState,useContext,useCallback } from 'react';
import CitySelector from './citySelector.js';
import LocationSelector from './locationSelector';
import {LocationContext} from '../../data/locationContext';
function Location({initVal}={}) {
// const [isCitySelected,setIsCitySelected]=useState(()=>true)
const [city,setCity]=useState(()=>0)
const [cities,setCities] = useState(()=>{})
const [loading,setLoading] = useState(()=>true);
const {cityVal,loctVal}=initVal
    const separator={
        "marginBottom":"40px"
        
        }

        console.log("location rendering")
        const fetchCities=async(url)=>{
     await fetch(url)
            .then(res =>res.json())
             .then(result => {
               setLoading(()=>false)
              setCities(()=>result.data);
            })
            .catch(error => console.log('error', error)); 
        }

     
       
       const getCities = useCallback(()=>fetchCities('http://127.0.0.1:8000/api/city/listCities'))
      // const getCities = ()=>fetchCities('http://127.0.0.1:8000/api/city/listCities')
useEffect(()=>{
  getCities()
},[])

 return (
  <div className='row' style={separator}>
     { loading ? <h1>Loading....</h1>
     :
     <>
     <LocationContext.Provider value ={{cities,setCities,city,setCity,cityVal,loctVal}}>
         <CitySelector/>
         <LocationSelector/>
         </LocationContext.Provider>  
 
     </>
  
    }

  </div>
    
  );
}

export default Location;
