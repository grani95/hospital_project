import React,{ useEffect,useState,useContext,useRef,useMemo} from 'react';
import {LocationContext} from '../../data/locationContext'
function LocationSelector() {
  const [cityLoct,setCityLoct] = useState(()=>{})
  const [loading,setLoading] =useState(()=>true)
  var {city,loctVal} = useContext(LocationContext);
    console.log("location selector rendering") 
     const loctRef=useRef(()=>0)
     const fechCityLocation=async (url)=>{
      await fetch(url)
      .then(res =>res.json())
       .then(result => { 
         setLoading(false)

        setCityLoct(()=>result.data)

loctRef.current.value=4
      })
      .catch(error => console.log('error', error)); 
    
    
    }
  
  const getCityLocation=()=>{
    fechCityLocation('https://herokularavel95.herokuapp.com/api/city/listCityLocations/'+city)

    //  fechCityLocation('http://127.0.0.1:8000/api/city/listCityLocations/'+city)

    }

useEffect(()=>{
if(city > 0){  
  getCityLocation()
} if(!loading){
  loctRef.current.value=4  
}

},[city])

 
    //  loctRef.current.value=4

     const fillSelector=cityLoct ? 
     // console.log(patients)
     cityLoct.map(loct=>{
return <option value = {loct.loctId} 
key={loct.loctId}
>{loct.loctName}</option>

})
:
<option>لم يت إضافة مناطق لهذه المدينة</option>


 return (
  <div className='col-6'>
 {!loading ?
     <select name="loctId" className='form-control'
 disabled={!city > 0 ? true : false} ref={loctRef}>
   <option>المنطقة</option>
    {city > 0 ?
     fillSelector
   :
    null
    } 
</select>
:null
}
 

  </div>
    
  );
}

export default LocationSelector;
