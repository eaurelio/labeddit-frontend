import {
  NavHead,
  LogoutButton,
  MainContainer,
  TextInput,
  PostButton,
  Rule
} from './StyledPostsPage'
import { useContext } from 'react'
import labelogo from '../../assets/img/labe_logo.png'
import PostContainer from './postContent/PostContainer'
import { GlobalContext } from "../../context/GlobalContext"
import axios from 'axios'

export default function PostsPage() {
  const context = useContext(GlobalContext)
  const { newPost, handlePostArea, postList, setPostList } = context
  const postPage = 'http://localhost:3003/posts'
  const userToken = localStorage.getItem('userToken')

  const style = {
    backgroundImage: `url(${labelogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '40px'
  }

  const getPosts = async e => {
    e.preventDefault()
    await axios.get(postPage,{
      headers: {
        Authorization: userToken
      }
    })
      .then(response => { console.log(response.data) })
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
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  const getPostContent = event => {
    event.preventDefault()
    if (newPost.length < 1) {
      window.alert('O post não pode ser vazio!')
    } else {
      sendNewPost()
    }
  }

  return (
    <>
      {userToken
        ?
        <div>
          <NavHead style={style} >
            <LogoutButton>Logout</LogoutButton>
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
            <PostButton type='submit' onClick={getPosts}>
              coisar
            </PostButton>
            <Rule />
            <PostContainer />
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