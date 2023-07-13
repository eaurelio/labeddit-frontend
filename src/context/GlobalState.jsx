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
  const [newComment, setNewComment] = useState([])
  const [commentList, setCommentList] = useState([])
  const handleName = e => { setName(e.target.value); console.log(name) }
  const handleEmail = e => { setMail(e.target.value); console.log(email) }
  const handlePassword = e => { setPassword(e.target.value); console.log(password) }
  const handlePostArea = e => { setNewPost(e.target.value); console.log(newPost) }
  const handleCommentArea = e => { setNewComment(e.target.value); console.log(newComment) }
  const userToken = localStorage.getItem('userToken')

  const getPosts = async () => {
    await axios.get(postPage, {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => { setPostList(response.data) })
      .catch(error => console.log(error))
  }

  const getComments = async (postId) => {
    const commentsPage = `http://localhost:3003/posts/comment/${postId}`
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
      content: newComment
    }
    await axios.post(postPage, body, {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => { console.log(response); getPosts() })
      .catch(error => console.log(error))
  }

  const sendNewComment = async (postId) => {
    const commentPage = `http://localhost:3003/posts/comment/${postId}`
    const body = {
      content: newPost
    }
    await axios.post(commentPage, body, {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => { console.log(response); getComments(postId) })
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
    newComment, handleCommentArea,
    postList, setPostList,
    commentList, setCommentList,
    getPosts, sendNewPost,
    getComments, sendNewComment,
    userToken,
    loginUrl,
    postPage,
    logOut
  }

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}