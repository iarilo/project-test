import React from 'react';
import { useLocation, Navigate } from 'react-router';
import { FanCustomHook } from './file-custom-hook';

export const FanWrapperLogo = ({children}) => {
  const location = useLocation();
  const { user } = FanCustomHook();

  if (!user) {
    return (
      <div>
        <Navigate to="/logo" state={{from:location}}/>
      </div>
    )
  }
  return (children);
}
