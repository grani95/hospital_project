import { useEffect,useState } from 'react';
function Row({patient}) {
    const [data,setData] = useState({});
useEffect(()=>{
    console.log("row rendering")
setData(patient)
},[])

 return (
    <tr key={data.file_id}>
    <td>{data.file_id}</td>
    <td>{data.name}</td>
    <td>{data.age}</td>
    <td>{data.nation_id}</td>
    <td>{data.gender === 0 ? "ذكر" :"أنثي" }</td>
    <td>{data.tel}</td>
    <td>{data.tel2}</td>
    <td>{data.email}</td>
    <td>{data.city_name}</td>
    <td>{data.location_name}</td>
    <td>{data.blood_cat}</td>  
    <td><button className="btn btn-info" onClick={()=>{alert(data.file_id)}}>تعديل</button></td>
    <td><button className="btn btn-danger">حذف</button></td>
    <td><button className="btn btn-success">حجز</button></td>
    </tr>
    
  );
}

export default Row;
