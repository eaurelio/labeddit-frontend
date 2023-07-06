import {
  NavHead,
  SignUpContainer,
  MainSection,
  InputContainer,
  LoginInput,
  LoginButton,
  SignUpButton
} from "./StyledSignUpPage"
import labelogo from '../../assets/img/labe_logo.png'
import { GlobalContext } from "../../context/GlobalContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { goToPostPage } from "../../router/coordinator"
import { goToLoginPage } from "../../router/coordinator"
import axios from 'axios'
import { emailValidator, passwordValidator } from "../../assets/resources/validators"

export default function SignUpPage(props) {

  const context = useContext(GlobalContext)
  const {name, handleName, email, handleEmail, password, handlePassword} = context
  const signUpUrl = 'http://localhost:3003/users/signup'
  const navigate = useNavigate()

  const style = {
    backgroundImage: `url(${labelogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '40px'
  }

  const signUp = async (newUser) => {
    const body = newUser

    await axios.post(signUpUrl, body)
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

  const submitSignupForm = (event) => {
    event.preventDefault()
    if(name.length <= 3) {
      window.alert('informe um Apelido válido!')
    } else
    if(!emailValidator(email)) {
      window.alert('Email inválido!')
    } else
    if(!passwordValidator.test(password)) {
      window.alert('Deve-se criar uma senha segura!')
    } else {
      const userLogin = {
        name, email, password
      }
      signUp(userLogin)
    }
  }

  return (
    <>
      <NavHead style={style}>

        <LoginButton onClick={() => {goToLoginPage(navigate)}} >Entrar</LoginButton>

      </NavHead>

      <MainSection>
        <h1>
          Olá, boas vindas ao LabEddit ;)
        </h1>
      </MainSection>

      <SignUpContainer>
        <InputContainer>
          <LoginInput value={name} onChange={handleName} type='text' placeholder='Apelido' />
          <LoginInput value={email} onChange={handleEmail} type='text' placeholder='E-mail' />
          <LoginInput value={password} onChange={handlePassword} type='password' placeholder='Senha' />
          <p>
            Ao continuar, você concorda com o nosso <a href="">Contrato de usuário</a> e nossa <a href="">Política de privacidade</a>
          </p>
          <p>
            <input type="checkbox" name="" id="" />
            Eu concordo em receber email sobre coisas legais no Labeddit
          </p>
          <SignUpButton type='submit' onClick={submitSignupForm} >Cadastrar</SignUpButton>
        </InputContainer>
      </SignUpContainer>
    </>
  )
}