import { styled } from "styled-components";

export const LoginContainer = styled.form`
  margin: 0 auto;
  width: 428px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoContainer = styled.div`
  width: 300px;
  margin: 80px 0;
  
  img {
    max-width: 100%;
    
  }
`
export const InputContainer = styled.div`
  width: 370px;
  /* border: 1px solid black; */
`
export const LoginInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  margin: 10px 0;
  padding: 10px;
`

export const LoginButton = styled.button`
  font-size: 1.2em;
  color: #fff;
  font-weight: 600;
  margin: 30px 0;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 50px;

  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`

export const Rule = styled.div`
  height: 2px;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`

export const SignUpButton = styled.button`
  font-size: 1.2em;
  color: #fff;
  font-weight: 600;
  margin-top: 30px;
  width: 100%;
  height: 50px;
  border-radius: 50px;
  background-color: #fff;
  border: 3px solid #F9B24E;
  color: #F9B24E;
`