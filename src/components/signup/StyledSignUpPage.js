import { styled } from "styled-components";

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
