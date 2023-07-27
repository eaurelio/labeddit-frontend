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
import LoadingModal from '../loadingModal/LoadingModal'
// const userToken = localStorage.getItem('userToken')

export default function PostsPage() {

  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const { 
    newPost, setNewPost, handlePostArea, getPosts, sendNewPost, postList,
    logOut, loading,
    loggedUserName, getUserName
   } = context
  const userToken = localStorage.getItem('userToken')

  useEffect(() => { getPosts(userToken) }, [])
  useEffect(() => { getUserName() }, [])

  const style = {
    backgroundImage: `url(${labelogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '40px',
    justifyContent: 'end'
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
        enableComment={true}
      />)

  return (
    <>
      {userToken ?
        < div >
          <NavHead style={style} >
            <LogButton onClick={logOut}>Logout</LogButton>
          </NavHead>
          <MainContainer>
            <p>Bem-vindo(a), {loggedUserName}!!</p>
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
          {loading && <LoadingModal />}
        </div >
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