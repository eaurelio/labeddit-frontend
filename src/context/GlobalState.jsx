import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {
  
  const [nickName, setNickname] = useState('')
  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmail = e => { setMail(e.target.value); console.log(email) }
  const handlePassword = e => { setPassword(e.target.value); console.log(password) }

  const context = {
    nickName, setNickname,
    email, handleEmail,
    password, handlePassword
  }

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}