import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {

  const [name, setName] = useState('')
  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [newPost, setNewPost] = useState('')
  const [postList, setPostList] = useState([])
  const handleName = e => { setName(e.target.value); console.log(name) }
  const handleEmail = e => { setMail(e.target.value); console.log(email) }
  const handlePassword = e => { setPassword(e.target.value); console.log(password) }
  const handlePostArea = e => { setNewPost(e.target.value); console.log(newPost) }

  const context = {
    name, handleName,
    email, handleEmail,
    password, handlePassword,
    newPost, handlePostArea,
    postList, setPostList
  }

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}