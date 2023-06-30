import { styled } from "styled-components";

export const NavHead = styled.section`
  display: flex;
  justify-content: end;
  height: 50px;
  background-color: #00000015;
`

export const SignUpContainer = styled.div`
  margin: 0 auto;
  width: 428px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    color: blue;
    text-decoration: none;
  }
`

export const MainSection = styled.section`
  font-size: 1.2em;
  width: 370px;
  margin: 0 auto 100px;
`

export const InputContainer = styled.div`
  width: 370px;
  /* border: 1px solid black; */
`
export const LoginInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  margin: 5px 0;
  padding: 10px;
`

export const LoginButton = styled.button`
  background: none;
  border: none;
  color: blue;
  font-weight: 500;
  font-size: 1.25em;
  margin-right: 20px;
`

export const SignUpButton = styled.button`
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
