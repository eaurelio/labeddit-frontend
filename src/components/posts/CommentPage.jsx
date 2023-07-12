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
import { goToLoginPage } from "../../router/coordinator"
import { useParams } from "react-router-dom"
import Posts from "./postContent/Posts";

export default function CommentPage(props) {
  const style = {
    backgroundImage: `url(${labelogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '40px',
  }

  const context = useContext(GlobalContext)
  const { postId } = useParams()
  const { postList, userToken, commentList, setCommentList } = context
  const currentPost = postList.filter(el => el.id === postId)

  console.log(currentPost)

  useEffect(() => async () => {
    const commentsPage = `http://localhost:3003/posts/comment/${postId}`
    await axios.get(commentsPage, {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => {setCommentList(response.data); console.log(response.data)})
      .catch(error => console.log(error))
  },[])

  const comments = commentList.map(comment => <Posts 
    key={comment.id}
    postId={comment.id}
    userName={comment.userName}
    content={comment.content}
    likes={comment.likes}
    dislikes={comment.dislikes}
    />)

  return (
    <>
      <NavHead style={style} >
        {/* <LogButton onClick={'logOut'}>Logout</LogButton> */}
      </NavHead>
      <MainContainer>
        {postId}
        <Posts
          key={currentPost[0].id}
          postId={currentPost[0].id}
          userName={currentPost[0].userName}
          content={currentPost[0].content}
          likes={currentPost[0].likes}
          dislikes={currentPost[0].dislikes}
        />
        <TextInput
        // value={'newPost'}
        // onChange={'handlePostArea'}
        // type='text'
        // placeholder='Escreva seu post...'
        />
        {/* <PostButton type='submit' onClick={'getPostContent'}>
          Postar
        </PostButton> */}
        <Rule />
        <PostContainer>
          {comments}
        </PostContainer>
      </MainContainer>
    </>
  )
}