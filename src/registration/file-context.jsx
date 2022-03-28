import React,{useState,createContext} from 'react';

 export const logoContext = createContext(null);
 
export const FanContext = ({ children }) => {
  const [user, setUser] = useState(null);
 

  const logIn = (newUser,cb) => {

    setUser(newUser);
    cb();
  };

  const logOf = ( cb) => {
    setUser(null);
    cb();
  }; 

 const value = {user, logIn,  logOf };
 
  return (
    <logoContext.Provider value={value}>
      {children}
    </logoContext.Provider>
  )
}
