import {
  LoginContainer,
  LogoContainer,
  InputContainer,
  LoginInput,
  LoginButton,
  SignUpButton,
  Rule
} from "./StyledLoginPage"
import labbedit_logo from '../../assets/img/labeddit_logo.png'

export default function LoginPage(props) {
  return (
    <LoginContainer>
      <LogoContainer>
        <div>
          <img alt='logo da labenu' src={labbedit_logo} />
        </div>
      </LogoContainer>
      <InputContainer>
        <LoginInput
          type='text'
          placeholder='E-mail' />
        <LoginInput
          type='password'
          placeholder='Senha' />
        <LoginButton>
          Continuar
        </LoginButton>
        <Rule />
        <SignUpButton>
          Crie uma conta!
        </SignUpButton>
      </InputContainer>
    </LoginContainer>
  )
}