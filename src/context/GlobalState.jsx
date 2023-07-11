import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from 'axios'
const loginUrl = 'http://localhost:3003/users/login'
const postPage = 'http://localhost:3003/posts'

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
  const userToken = localStorage.getItem('userToken')
  
  const getPosts = async () => {
    await axios.get(postPage, {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => { setPostList(response.data); console.log(response.data) })
      .catch(error => console.log(error))
  }

  const sendNewPost = async () => {
    const body = {
      content: newPost
    }
    await axios.post(postPage, body, {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => { console.log(response); getPosts() })
      .catch(error => console.log(error))
  }

  // const getPostContent = event => {
  //   event.preventDefault()
  //   if (newPost.length < 1) {
  //     window.alert('O post não pode ser vazio!')
  //   } else {
  //     sendNewPost()
  //     setNewPost('')
  //   }
  // }

  const context = {
    name, handleName, setName,
    email, handleEmail, setMail,
    password, handlePassword, setPassword,
    newPost, handlePostArea, setNewPost,
    postList, setPostList,
    getPosts, 
    sendNewPost,
    // getPostContent, 
    userToken,
    loginUrl,
    postPage
  }

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}