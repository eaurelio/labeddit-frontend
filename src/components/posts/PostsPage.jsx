import {
  NavHead,
  LogButton,
  MainContainer,
  PostContainer,
  TextInput,
  PostButton,
  Rule
} from './StyledPostsPage'
import { useContext, useEffect } from 'react'
import labelogo from '../../assets/img/labe_logo.png'
import Posts from './postContent/Posts'
import { GlobalContext } from "../../context/GlobalContext"

import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from "../../router/coordinator"

export default function PostsPage() {
  const context = useContext(GlobalContext)
  const { newPost, setNewPost, handlePostArea, postList, getPosts, sendNewPost, userToken } = context

  const navigate = useNavigate()

  const style = {
    backgroundImage: `url(${labelogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '40px'
  }

  useEffect(() => { getPosts() }, [])

  const getPostContent = event => {
    event.preventDefault()
    if (newPost.length < 1) {
      window.alert('O post não pode ser vazio!')
    } else {
      sendNewPost()
      setNewPost('')
    }
  }

  const logOut = () => {
    localStorage.clear('userToken')
  }

  const posts = postList
    .sort((x, y) => x.created_at < y.created_at)
    .map((post, i) =>
      <Posts
        key={i}
        postId={post.id}
        userName={post.userName}
        content={post.content}
        likes={post.likes}
        dislikes={post.dislikes}
      />)

  return (
    <>
      {userToken
        ?
        <div>
          <NavHead style={style} >
            {userToken ?
              <LogButton>Logout</LogButton>
              :
              <LogButton onClick={() => {goToLoginPage(navigate)}} >Login</LogButton>
            }
          </NavHead>
          <MainContainer>
            <TextInput
              value={newPost}
              onChange={handlePostArea}
              type='text'
              placeholder='Escreva seu post...'
            />
            <PostButton type='submit' onClick={getPostContent}>
              Postar
            </PostButton>
            <Rule />
            <PostContainer>
              {posts}
            </PostContainer>
          </MainContainer>
        </div>
        :
        <div>
          usuário não autenticado!
        </div>
      }

    </>
  )
}