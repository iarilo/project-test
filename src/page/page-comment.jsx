import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FanCustomHook } from '../registration/file-custom-hook';

export const FanPageComment = () => {
  const navigate = useNavigate();
  const { logOf } = FanCustomHook();

  const minus = () => {
    navigate(-1);
  };
  return (
    <div className='conteiner-comment'>
      <h3> Оставьте комментарии</h3>


      <div className='conteiner_button_comment'>
        <button onClick={minus} className="back">вернуться</button>
        <div className='conteiner_button_comment login'>
          <button><NavLink to="/blog/new">залогиниться</NavLink></button>
          <button onClick={() => 
            logOf(() => navigate("/blog", {replace: true} ))}
          >разлогиниться
          </button>
        </div>
      </div>



    </div>
  )
}
