import React from 'react';
import{Outlet} from 'react-router-dom';

export const FanMain = () => {
  return (
     <div className='container_main'> 
       <main className='main_outlet'>
        <Outlet/>
      </main> 
     </div> 


   
  )
}
