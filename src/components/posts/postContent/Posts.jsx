import {
  Post,
  PostHeader,
  PostContent,
  PostFooter,
  LikesContainer,
  LikesDislikes
} from './StyledPostContent'


export default function Posts(props) {
  const {content, userName, likes, dislikes} = props
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
            <LikesDislikes>{likes - dislikes}</LikesDislikes>
          </LikesContainer>
          Rodapé
        </PostFooter>
      </Post>
    </>
  )
}