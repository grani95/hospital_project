import { useEffect,useState,useContext } from 'react';
import {PatientContext} from '../../data/context'
import Row from './row';
function Table() {
   const [loading,setLoading] = useState(true)
useEffect(()=>{
    console.log("table rendering")
if(patients.data.length > 0){

    setLoading(false)
}

},[])
const {patients}=useContext(PatientContext);
//const patientRow =<tr>لا توجد بيانات لعرضها</tr>
const patientRow=patients ? 
        // console.log(patients)
        patients.data.map(patient=>{
return <Row patient={patient} />

})
:
<tr>لا توجد بيانات لعرضها</tr>

 

 return (
    <div className="container">
{
loading ? 
"loading component" : 
     <table className="table table-striped">
  
  <thead className="table table-dark">
    <tr>
      <th scope="col">رقم الملف</th>
      <th scope="col">إسم المريض</th>
      <th scope="col">العمر</th>
      <th scope="col">الجنسية</th>
      <th scope="col">الجنس</th>
      <th scope="col">رقم الهاتف</th>
      <th scope="col">رقم الهاتف أخر</th>
      <th scope="col">البريد</th> 
      <th scope="col">المدينة</th>
      <th scope="col">المنطقة</th>
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
}     
   
    </div>
  );
}

export default Table;
