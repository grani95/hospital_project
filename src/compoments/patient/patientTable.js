import { useEffect, useState } from 'react';
import Pagination from '../pagination';
import DataInfoLable from '../dataInfoLable';
function PatientTable() {
// const tblStyle={
//   "marginTop": "40px"
// }

const [patients,setPatients]=useState({})


useEffect(() => {
  console.log("table rendering")

  async function fetchData(){
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer "+sessionStorage.getItem('token'));
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    const response = await fetch("http://127.0.0.1:8000/api/patient/showAll", requestOptions)
      .then(res =>res.json())
       .then(result => {
        console.log(result.patients)
         setPatients(result.patients);
        return result;
      })
      .catch(error => console.log('error', error));
    }
  
  fetchData()
console.log(patients)
  },[])
    const patientRow=
      patients.data.map(patient=>{
return <tr key={patient.file_id}>
  <td>{patient.file_id}</td>
  <td>{patient.name}</td>
  <td>{patient.birth_date}</td>
  <td>{patient.nation_id}</td>
  <td>{patient.gender === 0 ? "ذكر" :"أنثي" }</td>
  <td>{patient.tel}</td>
  <td>{patient.email}</td>
  <td>{patient.blood_cat}</td>  
  <td><button className="btn btn-info">تعديل</button></td>
  <td><button className="btn btn-danger">حذف</button></td>
  <td><button className="btn btn-success">حجز</button></td>
</tr>
    })


    return (
      <>
      <div className="row">
<Pagination/> 

  <DataInfoLable rowCount={patients.total} 
  pageCount={patients.last_page} 
  from={patients.from} to={patients.to} 
  current={patients.current} />

</div>
<table className="table table-striped">
  
  <thead className="table table-dark">
    <tr>
      <th scope="col">رقم الملف</th>
      <th scope="col">إسم المريض</th>
      <th scope="col">العمر</th>
      <th scope="col">الجنسية</th>
      <th scope="col">الجنس</th>
      <th scope="col">رقم الهاتف</th>
      <th scope="col">البريد</th>
      <th scope="col">فصيلة الدم</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody className="table table-striped">
{patientRow}

  </tbody>
</table> 
      </>
 


    );
  }
  
  export default PatientTable;
  