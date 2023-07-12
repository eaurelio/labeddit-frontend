import {
  NavHead,
  LogButton,
  MainContainer,
  PostContainer,
  TextInput,
  PostButton,
  Rule
} from './StyledPostsPage'
import labelogo from '../../assets/img/labe_logo.png'
import { useContext, useEffect } from 'react'
import { GlobalContext } from "../../context/GlobalContext"
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from "../../router/coordinator"
import Posts from './postContent/Posts'

export default function PostsPage() {
  const context = useContext(GlobalContext)
  const { newPost, setNewPost, handlePostArea, getPosts, sendNewPost, postList, setPostList } = context
  const userToken = localStorage.getItem('userToken')

  const navigate = useNavigate()

  const style = {
    backgroundImage: `url(${labelogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '40px',
  }

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
    // goToLoginPage(navigate)
    setPostList([])
    localStorage.removeItem('userToken')
    window.location.reload()
  }

  useEffect(() => { getPosts() }, [])

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
            <LogButton onClick={logOut}>Logout</LogButton>
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
          <NavHead style={style} />
          <MainContainer>
            <h2>Usuário não autenticado!</h2>
            <PostButton onClick={() => { goToLoginPage(navigate) }} >Login</PostButton>
          </MainContainer>
        </div>
      }

    </>
  )
}