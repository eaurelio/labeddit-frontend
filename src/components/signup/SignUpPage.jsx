import { 
  SignUpContainer,
  InputContainer,
  LoginInput,
  SignUpButton
 } from "./StyledSignUpPage"

export default function SignUpPage(props) {
  return(
    <SignUpContainer>
      <InputContainer>
        <LoginInput type='text' placeholder='Apelino' />
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
  )
}