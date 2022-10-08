import {useContext} from "react"
import { PatientContext } from "../data/context"
function PageItem({list}) {
    console.log("list compoment rendering")
    var {patients,setPatients,pagination,loading,setLoading,
        fetchData}=useContext(PatientContext)
   console.log(list)
   console.log(setLoading)
//    const fetchData=async (url)=>{
// //     await fetch(url)
// //     .then(res =>res.json())
// //      .then(result => {
// //       console.log(result.patients)
// //       setLoading(false)
// //       setPagination(result.pagination)
// //       setPatients(result.patients);
// //     })
// //     .catch(error => console.log('error', error)); 
//   }

    return (
  <li className={list.active ? "page-item active":"page-item"} 
  key={list.label} disabled={list.url ? false : true}
   onClick={()=>{fetchData(list.url)}}>
  <a className="page-link" >
    <span aria-hidden="true">{list.label.split(";")[0]}</span>
  </a>
  </li>
  
    );
  }
  
  export default PageItem;
  