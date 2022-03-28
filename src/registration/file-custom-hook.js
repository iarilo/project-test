import React,{useContext} from 'react';
import { logoContext } from './file-context';


export const FanCustomHook = () => {
  return  useContext(logoContext);
 }
