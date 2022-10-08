import { useEffect, useState,useContext } from 'react';
import { PatientContext } from '../data/context';

function DataInfoLable() {
const {patients} = useContext(PatientContext);
    console.log("ffffff:  ")
    return (
        <>
        {patients ?  
        <>      
         <div className ="col-3">
<span> عدد الصفوف{patients.meta.total}</span>
<span> عدد الصفحات{patients.meta.last_page}</span>
</div>
<div className ="col-3">
<span> عرض من{patients.meta.from}</span>
<span> إلي{patients.meta.to}</span>
<span> رقم الصفحة{patients.meta.current_page}</span>

</div> </>: null}

        </>


    );
  }
  
  export default DataInfoLable;
  