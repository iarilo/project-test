import React from 'react';
import { useLocation,useNavigate } from 'react-router';
import { FanCustomHook } from './file-custom-hook';


export const FanLogo = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const {logIn} = FanCustomHook();
 

  const fromPage = location.state?.from?.pathname || '/';
  

  const handleSabmit = (event)=>{
 event.preventDefault();
 const form = event.target;
   const user = form.username.value;
       //console.log('user', user);

   logIn(user ,()=>navigate(fromPage,{replace:true})); };
   //console.log('logIn', logIn);

  return (
    <div className='container-form'>
      <form onSubmit={handleSabmit}>
        <label>Name:
          <input name='username' />
        </label>
        <button type="submit">login</button>
      </form>
    </div>
  )
}
