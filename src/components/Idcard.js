import React from 'react'
import { IdcardBack } from './IdcardBack'


export const Idcard = () => {
  return (
      <>
    //Main box
    <div className='border border-primary h- d-inline-block  w-75 p-3'>
        <div className='title'>
        <div className='text-center'>   
        <img src={`${process.env.PUBLIC_URL}/images/1567836534377.jpg`}  alt="logo" className='img-circle w-25 h-25 d-inline-block'></img>
        </div>   
             <h1 className='text-center'><b>Arunima Group</b></h1>
            
        </div>
        <div className='mt-5 mb-5'>
              <h4 className='text-center'>Arunima Sportswear Ltd.</h4>
              
        </div>
        <div className='text-center'>   
        <img src={`${process.env.PUBLIC_URL}/images/frontal-male-passport-photo-isolated-white-background-eu-standardization-frontal-male-passport-photo-isolated-white-149548031.jpg`}  alt="logo" className='border  border-5 border-dark rounded-circle w-25'></img>
        </div> 
         {/* Info box */}
        <div className='text-center'> 
                  <h2 className='mt-4'><b>Bappi Datta</b></h2>
                  <h4 className='text-primary'>CEO</h4>
        
        </div>
        <div className='text-center mt-4'>
               <h4>Expire date: 08/22</h4>
        </div>
        <div className='mt-5'>
               <h3 className='text-center p-3 mb-2 bg-dark text-white  '>IT Department</h3>
        </div>
    </div>
    <IdcardBack/>
    
    </>

    
    


    



  )
}
