import {
  LoginContainer,
  LogoContainer,
  InputContainer,
  LoginInput,
  LoginButton,
  SignUpButton,
  Rule
} from "./StyledLoginPage"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { goToPostPage, goToSignUpPage } from "../../router/coordinator"
import axios from 'axios'
import { GlobalContext } from "../../context/GlobalContext"
import labbedit_logo from '../../assets/img/labeddit_logo.png'
import { emailValidator } from "../../assets/resources/validators"
import LoadingModal from "../loadingModal/LoadingModal"


export default function LoginPage(props) {
  const context = useContext(GlobalContext)
  const {
    email, handleEmail,
    password, handlePassword, 
    loading, setLoading,
    loginUrl
    } = context
  
  const navigate = useNavigate()

  const login = async (userLogin) => {
    setLoading(true)
    const body = userLogin
    await axios.post(loginUrl, body)
      .then(response => {
        console.log(response.data.token)
        localStorage.setItem('userToken', response.data.token)
        goToPostPage(navigate)
      })
      .catch(error => {
        console.log(error)
        window.alert('usuário ou senha incorretos!')
      })
  }

  const submitLoginForm = event => {
    event.preventDefault()
    if (!emailValidator(email)) {
      window.alert('Email inválido!')
    } else {
        const userLogin = {
          email, password
        }
        login(userLogin)
      }
  }

  return (
    <LoginContainer>
      <LogoContainer>
        <div>
          <img alt='logo da labenu' src={labbedit_logo} />
        </div>
      </LogoContainer>
      <InputContainer>
        <LoginInput
          required
          type='text'
          placeholder='E-mail'
          value={email}
          onChange={handleEmail} />
        <LoginInput
          required
          type='password'
          placeholder='Senha'
          value={password}
          onChange={handlePassword} />
        <LoginButton type='submit' onClick={submitLoginForm}>
          Continuar
        </LoginButton>
        <Rule />
        <SignUpButton onClick={() => goToSignUpPage(navigate)}>
          Crie uma conta!
        </SignUpButton>
      </InputContainer>
      {loading && <LoadingModal />}
    </LoginContainer>
  )
}