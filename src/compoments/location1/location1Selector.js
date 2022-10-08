import React,{ useEffect,useState,useContext } from 'react';
function Location1Selector() {
    console.log("location1 selector rendering")

 return (
    <div className="container">
        <h1>location component</h1>
<select className='form-control' name="loctId">

</select>
    </div>
  );
}

export default React.memo(Location1Selector);
