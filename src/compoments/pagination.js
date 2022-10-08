import { useContext } from "react";
import PageItem from "./pageItem";
import { PatientContext } from "../data/context";
function Pagination() {
  console.log("pagination compoment rendering")

 const fetchData=async (url)=>{
  await fetch(url)
  .then(res =>res.json())
   .then(result => {
    console.log(result)
    setLoading(false)
    setPatients(result.data);
  })
  .catch(error => console.log('error', error)); 
}
const {patients,setLoading,setPatients} = useContext(PatientContext)
var pagelist=
patients.meta.links.map((list)=>{

  return <PageItem list={list} 
  setLoading={setLoading} 
  // setPagination={setPagination} 
  setPatients={setPatients}/>
})
  
// onClick={fetchData(list.url)}
  return (
      <div className="col-6">
          <nav aria-label="Page navigation example" dir="ltr">
<ul className="pagination">
  {pagelist}
</ul>
</nav>
      </div>

  );
}

export default Pagination;
