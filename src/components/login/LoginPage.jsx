import {
  LoginContainer,
  LogoContainer,
  InputContainer,
  LoginInput,
  LoginButton,
  SignUpButton,
  Rule
} from "./StyledLoginPage"
import { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import emailValidator from '../../assets/resources/emailValidator'
import { passwordValidator } from "../../assets/resources/passwordValidator"
import labbedit_logo from '../../assets/img/labeddit_logo.png'

export default function LoginPage(props) {
  const context = useContext(GlobalContext)
  const {email, handleEmail, password, handlePassword} = context  

  const submit = e => {
    e.preventDefault()
    if(emailValidator(email) === false) {
      window.alert('Email inválido!')
    }
    if(!passwordValidator.test(password)) {
      window.alert('Deve-se criar uma senha segura!')
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
        <LoginButton type='submit' onClick={submit}>
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