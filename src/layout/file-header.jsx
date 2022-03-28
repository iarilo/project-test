import React from 'react';
import { NavLink } from 'react-router-dom';

const stylLinc = ({isActive})=>({color:isActive ?'red':'#000'});
export const FanHeader = () => {
  return (
    <div className='conteiner-home'>
      <ul className='home-ul'>
        <li><NavLink to="/" style={stylLinc}>home</NavLink></li>
        <li><NavLink to="about" style={stylLinc}>about</NavLink></li>
        <li><NavLink to="blog" style={stylLinc}>blog</NavLink></li>
      </ul>
    </div>
  )
}
