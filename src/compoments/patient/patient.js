import React,{useEffect, useState} from 'react';
import Table from '../patient/table';
import Pagination from '../pagination';
import DataInfoLable from '../dataInfoLable';
import { PatientContext } from '../../data/context';
// import xx from './data/test.json'
import AddPatientModel from '../patient/addPatientModel';
// import PatientTable from './compoments/patient/patientTable';
function Patient() {
  const [isOpen,setIsOpen] = useState(()=> false);
const [patients,setPatients] = useState({});
// const [pagination,setPagination] = useState({});
const [loading,setLoading] = useState(true);
    const fetchData=async (url)=>{
        await fetch(url)
        .then(res =>res.json())
         .then(result => {
          console.log(result.patients)
          setLoading(false)
          // setPagination(result.pagination)
          setPatients(result);
        })
        .catch(error => console.log('error', error)); 
      
      
      }
useEffect(()=>{

  fetchData("http://127.0.0.1:8000/api/patient/showAll")
},[])


  console.log("patients rendering")
 
 return (
<>

    {
        loading ? 
        "loading component" : 
        <div>
        <button onClick={()=> setIsOpen(true)} name="login" className='btn btn-primary'>
           إضافة ملف جديد
        </button> 
         <AddPatientModel isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
          <PatientContext.Provider value={{patients,setPatients,loading
          ,setLoading,fetchData}}>
        <div className="row">

                <Pagination/>
                 <DataInfoLable/> 
               
                {/* <DataInfoLable pagination={patients.pagination}/>  */}
                </div>
        
                <Table/>   
                        </PatientContext.Provider>

          </div> 
        }     
</>
  );
}

export default Patient;
