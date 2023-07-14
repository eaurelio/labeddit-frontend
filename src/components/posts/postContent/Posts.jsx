import {
  Post,
  PostHeader,
  PostContent,
  PostFooter,
  LikesContainer,
  LikesDislikes
} from './StyledPostContent'
import axios from 'axios'
import { useContext } from 'react'
import { GlobalContext } from "../../../context/GlobalContext"
import { useNavigate } from 'react-router-dom'
import { goToCommentPage } from "../../../router/coordinator"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong, faDownLong, faMessage } from '@fortawesome/free-solid-svg-icons'


export default function Posts(props) {
  const context = useContext(GlobalContext)
  const navigate = useNavigate()
  const { getPosts,baseUrl } = context
  const { postId, content, userName, likes, dislikes } = props

  const likeDislike = async (event) => {
    const likeUrl = `${baseUrl}/posts/${postId}/like`
    const body = {
      like: event
    }

    const userToken = localStorage.getItem('userToken')

    await axios.put(likeUrl, body, {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => {
        getPosts()
        // console.log(response.statusText)
      })
      .catch(error => {
        console.log(error.response.data)
        switch (error.response.data) {
          case 'Post não encontrado!':
            window.alert(error.response.data)
            break
          case 'Você não pode curtir seu próprio post!':
            window.alert(error.response.data)
            break
          default:
            window.alert(error.response.data)
        }
      })
  }

  const handeCommentPage = () => {
    goToCommentPage(navigate, postId)
  }

  return (
    <>
      <Post>
        <PostHeader>
          Enviado por: {userName}
        </PostHeader>
        <PostContent>
          {content}
        </PostContent>
        <PostFooter>
          <LikesContainer>
            <FontAwesomeIcon onClick={() => likeDislike(true)} icon={faUpLong} size="lg" />
            <LikesDislikes>{likes - dislikes}</LikesDislikes>
            <FontAwesomeIcon onClick={() => likeDislike(false)} icon={faDownLong} size="lg" />
          </LikesContainer>
          <FontAwesomeIcon onClick={handeCommentPage} icon={faMessage} size="lg" />
        </PostFooter>
      </Post>
    </>
  )
}