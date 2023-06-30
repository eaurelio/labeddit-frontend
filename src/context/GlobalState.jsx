import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {

  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = e => { setMail(e.target.value); console.log(email) }
  const handlePassword = e => { setPassword(e.target.value); console.log(password) }

  const login = e => {
    // e.preventDefault()
    
  }

  const context = {
    email, handleEmail,
    password, handlePassword
  }

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )

}