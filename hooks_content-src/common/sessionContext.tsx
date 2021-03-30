import * as React from 'react';

export const createDefaultUser = () => ({
  login: "no user",
  updateLogin:(value) => {

  }
})

export const SessionContext = React.createContext(
  createDefaultUser()
);

export const SessionProvider:React.FC = (props) => {
  const [login, setLogin] = React.useState("");
  return (
    <SessionContext.Provider value={{login, updateLogin:setLogin}}>
      {props.children}
    </SessionContext.Provider>
  )
}