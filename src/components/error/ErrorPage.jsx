import { useNavigate } from 'react-router-dom'
import { goToLoginPage, goToPostPage } from "../../router/coordinator"
import { MainContainer, NavHead, PostButton } from '../posts/StyledPostsPage'
import labelogo from '../../assets/img/labe_logo.png'
import { Rule } from '../login/StyledLoginPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

export default function ErrorPage() {
  const navigate = useNavigate()
  const style = {
    backgroundImage: `url(${labelogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '40px',
    justifyContent: 'end'
  }
  return (
    <>
      <NavHead style={style} />
      <MainContainer>
        <p>
          <h1>
            <span style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              404!
              <FontAwesomeIcon icon={faCircleXmark} color={'red'} />
            </span>
          </h1>
          <h2>
            Página não encontrada!
          </h2>

        </p>
        <PostButton type='submit' onClick={() => goToLoginPage(navigate)}>
          Fazer login
        </PostButton>
      </MainContainer>
    </>
  )
}