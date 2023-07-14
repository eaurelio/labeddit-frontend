import {
  LogButton,
  MainContainer,
  NavHead,
  PostButton,
  PostContainer,
  Rule,
  TextInput
} from "./StyledPostsPage";

import labelogo from '../../assets/img/labe_logo.png'

import { useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from "../../context/GlobalContext"
import { useNavigate } from 'react-router-dom'
import { goToPostPage } from "../../router/coordinator"
import { useParams } from "react-router-dom"
import Posts from "./postContent/Posts";
import Comments from "./postContent/Comments";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CommentPage(props) {
  const style = {
    backgroundImage: `url(${labelogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '40px',
  }
  const styleCrossButton = {
    fontSize: '2em',
    margin: '8px 15px',
    color: 'gray'
  }

  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const { postId } = useParams()
  const {
    postList, getPosts,
    userToken,
    commentList, getComments,
    setCommentList,
    logOut, baseUrl,
    newComment, handleCommentArea, setNewComment
  } = context

  const currentPost = postList.filter(el => el.id === postId)

  useEffect(() => getPosts, [])
  useEffect(() => async () => {
    const commentsPage = `${baseUrl}/posts/comment/${postId}`
    await axios.get(commentsPage, {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => {
        setCommentList(response.data)
        // console.log(response.data)
      }
      )
      .catch(error => console.log(error))
  }, [])

  const comments = commentList.map(comment => <Comments
    key={comment.id}
    commentId={comment.id}
    userName={comment.userName}
    content={comment.content}
    likes={comment.likes}
    dislikes={comment.dislikes}
    postId={postId}
  />)

  const sendNewComment = async (newComment) => {
    const commentPage = `${baseUrl}/posts/comment/${postId}`
    const body = {
      content: newComment
    }
    await axios.post(commentPage, body, {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => {
        getComments(postId)
        // console.log(response)
      })
      .catch(error => console.log(error))
  }

  const getComment = event => {
    event.preventDefault()
    sendNewComment(newComment)
    setNewComment('')

  }
  return (
    <>
      <NavHead style={style} >
        <FontAwesomeIcon onClick={() => goToPostPage(navigate)} style={styleCrossButton} icon={faXmark} />
        <LogButton onClick={logOut}>Logout</LogButton>
      </NavHead>
      <MainContainer>
        <Posts
          key={currentPost[0]?.id}
          postId={currentPost[0]?.id}
          userName={currentPost[0]?.userName}
          content={currentPost[0]?.content}
          likes={currentPost[0]?.likes}
          dislikes={currentPost[0]?.dislikes}
        />
        <TextInput
          value={newComment}
          onChange={handleCommentArea}
          type='text'
          placeholder='Escreva seu comentário...'
        />
        <PostButton type='submit' onClick={getComment}>
          Comentar
        </PostButton>
        <Rule />
        <PostContainer>
          {comments}
        </PostContainer>
      </MainContainer>
    </>
  )
}