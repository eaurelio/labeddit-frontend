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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons'


export default function Posts(props) {
  const context = useContext(GlobalContext)
  const { getPosts } = context
  const { postId, content, userName, likes, dislikes } = props

  const likeDislike = async (event) => {
    const likeUrl = `http://localhost:3003/posts/${postId}/like`
    console.log(likeUrl)
    const body = {
      like: event
    }

    const userToken = localStorage.getItem('userToken')

    await axios.put(likeUrl, body, {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => { console.log(response.statusText); getPosts() })
      .catch(error => console.log(error))
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
            <FontAwesomeIcon onClick={() => likeDislike(true)} icon={faUpLong} size="sm" />
            <LikesDislikes>{likes - dislikes}</LikesDislikes>
            <FontAwesomeIcon onClick={() => likeDislike(false)} icon={faDownLong} size="sm" />
          </LikesContainer>
          Rodapé
        </PostFooter>
      </Post>
    </>
  )
}