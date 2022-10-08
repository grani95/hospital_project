function Button(setIsOpen) {
  return (
    <div>

 <button onClick={()=> setIsOpen(true)} name="login" className='btn btn-primary'>
   إضافة ملف جديد
</button>
</div>
  );
}

export default Button;
