import React,{ useEffect,useState ,useContext,useRef,useMemo} from 'react';
import {LocationContext} from '../../data/locationContext'
function CitySelector() {
    console.log("city selector rendering")
    var {setCity,cities,cityVal} = useContext(LocationContext)
    const cityRef = useRef(()=>0);
    
    // const fechCities=async (url)=>{
    //   await fetch(url)
    //   .then(res =>res.json())
    //    .then(result => {
    //     setIsCitySelected(true)
    //     setCities(result.data);
    //   })
    //   .catch(error => console.log('error', error)); 
    
    
    // }
// useEffect(()=>{
// fechCities('http://127.0.0.1:8000/api/city/listCities')
// },[])
    useEffect(()=>{
        if(cities){
if(cityVal){cityRef.current.value=cityVal
    // setIsCitySelected(true)
setCity(cityVal)
        }} 
        
        // 
    },[])

 const fillSelector=

     cities.map((city,index) =>
{
    return <option value = {city.cityId} 
    key={city.cityId}
    >{city.cityName}</option>

}

)

 return (
  <div className='col-6'>
{/* <select name="cityId" className='form-control' ref={cityRef} onChange={()=>getCityLocation()
}> */}
<select name="cityId" className='form-control' ref={cityRef} onChange={()=>{setCity(cityRef.current.value);console.log(cityRef.current.value)}
}>

    <option>إختر مدينة</option>

{
cities ? 
fillSelector
 :
<option>لا توجد بيانات</option>
}


</select>
{/* <bottom onClick={()=>{selectRef.current.value=4}}>change city</bottom> */}
  </div>
    
  );
}

export default CitySelector;
