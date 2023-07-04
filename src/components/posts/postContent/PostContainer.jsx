import {
  Post,
  PostHeader,
  PostContent,
  PostFooter
} from './StyledPostContent'


export default function PostContainer(props) {
  return (
    <>
      <Post>
        <PostHeader>
          Enviado por {}
        </PostHeader>
        <PostContent>
          Conteúdo
        </PostContent>
        <PostFooter>
          Rodapé
        </PostFooter>
      </Post>
    </>
  )
}