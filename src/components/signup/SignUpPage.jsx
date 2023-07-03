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

export default function SignUpPage(props) {

  const context = useContext(GlobalContext)
  const {email, handleEmail, password, handlePassword} = context
  const loginUrl = 'http://localhost:3003/users/login'
  const navigate = useNavigate()

  const style = {
    backgroundImage: `url(${labelogo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '40px'
  }

  return (
    <>
      <NavHead style={style}>

        <LoginButton>Entrar</LoginButton>

      </NavHead>

      <MainSection>
        <h1>
          Olá, boas vindas ao LabEddit ;)
        </h1>
      </MainSection>

      <SignUpContainer>
        <InputContainer>
          <LoginInput type='text' placeholder='Apelido' />
          <LoginInput type='text' placeholder='E-mail' />
          <LoginInput type='password' placeholder='Senha' />
          <p>
            Ao continuar, você concorda com o nosso <a href="">Contrato de usuário</a> e nossa <a href="">Política de privacidade</a>
          </p>
          <p>
            <input type="checkbox" name="" id="" />
            Eu concordo em receber email sobre coisas legais no Labeddit
          </p>
          <SignUpButton>Cadastrar</SignUpButton>
        </InputContainer>
      </SignUpContainer>
    </>
  )
}