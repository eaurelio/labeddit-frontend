import { 
  LogButton,
  MainContainer,
  NavHead,
  PostButton,
  PostContainer,
  Rule,
  TextInput 
} from "./StyledPostsPage";

import labelogo from '../../assets/img/labe_logo.png'

import { useContext, useEffect } from 'react'
import { GlobalContext } from "../../context/GlobalContext"
import { useNavigate } from 'react-router-dom'
import { goToLoginPage} from "../../router/coordinator"

export default function CommentPage(props) {
  const style = {
    backgroundImage: `url(${labelogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '40px',
  }
  
  return (
    <>
      <NavHead style={style} >
        <LogButton onClick={'logOut'}>Logout</LogButton>
      </NavHead>
      <MainContainer>
        <TextInput
          // value={'newPost'}
          // onChange={'handlePostArea'}
          // type='text'
          // placeholder='Escreva seu post...'
        />
        <PostButton type='submit' onClick={'getPostContent'}>
          Postar
        </PostButton>
        <Rule />
        <PostContainer>
          {'posts'}
        </PostContainer>
      </MainContainer>
    </>
  )
}