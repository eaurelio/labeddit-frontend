import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from 'axios'

// const baseUrl = `https://deploy-backend-test-yxah.onrender.com`
const baseUrl = `http://localhost:3003`
const loginUrl = `${baseUrl}/users/login`
const postPage = `${baseUrl}/posts`


export default function GlobalState(props) {
  const [name, setName] = useState('')
  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [newPost, setNewPost] = useState('')
  const [postList, setPostList] = useState([])
  const [newComment, setNewComment] = useState([])
  const [commentList, setCommentList] = useState([])
  const handleName = e => { setName(e.target.value); console.log(name) }
  const handleEmail = e => { setMail(e.target.value); console.log(email) }
  const handlePassword = e => { setPassword(e.target.value); console.log(password) }
  const handlePostArea = e => { setNewPost(e.target.value); console.log(newPost) }
  const handleCommentArea = e => { setNewComment(e.target.value); console.log(newComment) }
  const [loading, setLoading] = useState(true)
  const userToken = localStorage.getItem('userToken')

  const getPosts = async (Token = userToken) => {
    await axios.get(postPage, {
      headers: {
        Authorization: Token
      }
    })
      // .then(() => setLoading(true))
      .then(response => { setPostList(response.data) })
      .then(() => setLoading(false))
      .catch(error => console.log(error))
  }

  const getComments = async (postId) => {
    const commentsPage = `${baseUrl}/posts/comment/${postId}`
    await axios.get(commentsPage, {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => { setCommentList(response.data); console.log(response.data) })
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

  const logOut = () => {
    setPostList([])
    localStorage.removeItem('userToken')
    window.location.reload()
  }

  const context = {
    name, handleName, setName,
    email, handleEmail, setMail,
    password, handlePassword, setPassword,
    newPost, handlePostArea, setNewPost,
    newComment, handleCommentArea, setNewComment,
    postList, setPostList,
    commentList, setCommentList,
    getPosts, sendNewPost,
    getComments,
    userToken,
    loginUrl,
    postPage,
    logOut, loading,
    baseUrl
  }

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}