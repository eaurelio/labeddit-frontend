import {
  Post,
  PostHeader,
  PostContent,
  PostFooter
} from './StyledPostContent'


export default function Posts(props) {
  const {content} = props
  return (
    <>
      <Post>
        <PostHeader>
          Enviado por {}
        </PostHeader>
        <PostContent>
          {content}
        </PostContent>
        <PostFooter>
          Rodapé
        </PostFooter>
      </Post>
    </>
  )
}