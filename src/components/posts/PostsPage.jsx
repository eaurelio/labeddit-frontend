import {
  NavHead,
  LogoutButton,
  MainContainer,
  TextInput,
  PostButton,
  Rule
} from './StyledPostsPage'
import labelogo from '../../assets/img/labe_logo.png'
import PostContainer from './postContent/PostContainer'

export default function PostsPage(props) {

  const style = {
    backgroundImage: `url(${labelogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '40px'
  }

  return (
    <>
      <NavHead style={style} >
        <LogoutButton>Logout</LogoutButton>
      </NavHead>
      <MainContainer>
        <TextInput 
        type='text'
        placeholder='Escreva seu post...'
        />
        <PostButton>
          Postar
        </PostButton>
        <Rule />
        <PostContainer>

        </PostContainer>
      </MainContainer>
    </>
  )
}