function AddPatientModel({isOpen,onClose}) {

    const ModalStyle ={
        position: "fixed",
        backgroundColor: "#FFF",
        // top: "50%",
        left: "50%",
        width:"60%",
        margin: "15% auto",
        transform: "translate(-50%,-50%)",
        padding: "20px",
        zIndex: 1000,
        borderRadius: "20px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
        animationName: "animatetop",
        animationDuration: "0.4s",
        color: '#5cb85c'
          }
          const OvelayStyle ={
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, .7)",
            zIndex: 1000
            
              }
              const closeStyle={
                color: "#aaa",
                float: "right",
                fontSize: "28px",
                fontWeight: "bold",
              }
const footerStyle={
    borderTop: "2px solid red",
    padding: "2px 16px",
    marginBottom: "0px"
}
const headerStyle= {
    padding: "2px 16px",
    borderBottom: "2px solid red",

  }
  

          if(!isOpen){return null}
    return (
<>  


     <div style={OvelayStyle} className="xx"/>
     {/* Modal content  */}
<div className="modal-content"  style={ModalStyle}>
  <div className="modal-header" style={headerStyle}>
    <span className="close" onClick ={onClose}  style={closeStyle}>&times;</span>
    <h2>إضافة ملف جديد</h2>
  </div>
  <div className="modal-body">
  
{/* start form  */}
<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

{/* end form */}
  </div>
  <div className="modal-footer" style={footerStyle}>
    <h3>Modal Footer</h3>
  </div>
</div>   
</>


    );
  }
  
  export default AddPatientModel;
  