import React from 'react'


export const Idcard = () => {
  return (
    //Main box
    <div className='border border-primary h- d-inline-block  w-75 p-3'>
        <div className='title'>
             <h1 className='text-center'><b>Arunima Group</b></h1>
             <h3 className='text-center'>Dewan Idris Road, Zirabo, <br>
             </br>Savar, Dhaka - 1341</h3>
        </div>
        <div className='mt-5 mb-5'>
              <h2 className='text-center'>Arunima Sportswear Ltd.</h2>
              
        </div>
         {/* Info box */}
        <div className='d-flex'> 
        <div className='me-5 ms-4'>
              <h4>Name</h4>
              <h4>Id Card No</h4>
              <h4>Issue Date</h4>
              <h4>Designation </h4>
              <h4>Department</h4>
              <h4>Nature of work</h4>
              <h4>Ticket/Card No</h4>
              <h4>Joining Date</h4>
              <h4>Blood group</h4>

        </div>
        <div className='ms-5'>
              <h6>:Mustafa Iram Udoy</h6>
              <h6>:1706401</h6>
              <h6>:22/01/22</h6>
              <h6>:Frontend Developer<br></br>
              </h6>
              <h6>:IT</h6>
              <h6>:</h6>
              <h6>:12744</h6>
              <h4>:15 April, 2009</h4>
              <h4>:O-</h4>
        </div>
        </div>
        <div className='d-flex justify-content-evenly mt-5'>
        <div className='ms-4 me-5'>
               <image>Image</image>
               <h4 className=' border-top border-dark'>Signature</h4>
        </div>
        <div className='ms-5 ms-5'>
        <image>Image</image>
               <h4 className='border-top border-dark '>Signature</h4>
        </div>
        </div>


    </div>

  )
}
