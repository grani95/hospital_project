import React,{ useEffect,useState,useContext,useCallback,useMemo } from 'react';
function CitySelector() {
const [cities,setCities] = useState({});
const [loading,setLoading] = useState(true);
console.log("City Selector rendering")
    const fechCities = useCallback(async()=>{
      await fetch("http://127.0.0.1:8000/api/city/listCities")
      .then(res =>res.json())
       .then(result => {
           setLoading(false)
           // setIsCitySelected(true)
        setCities(result.data);
        // console.log(cities)

    })
      .catch(error => console.log('error', error)); 
    
    
    },[])

    useEffect(()=>{
// fechCities()

},[])
// useEffect(()=>{
//     if(cities){
// if(cityVal){cityRef.current.value=cityVal

//     }} 
    
//     // 
// },[])


 return (
    <div className="container">
        <h1>city component</h1>
        {loading ? <h3>loading......</h3>
        :
        <select className='form-control' name="cityId">

            </select>

         }
    </div>
  );
}

export default React.memo(CitySelector);
