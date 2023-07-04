import { styled } from "styled-components";

export const NavHead = styled.section`
  display: flex;
  justify-content: end;
  height: 50px;
  background-color: #00000015;
`

export const MainContainer = styled.form`
  margin: 20px auto;
  width: 370px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TextInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 150px;
  border-radius: 15px;
  border: none;
  background-color: #00000015;
  padding: 10px;
  /* text-align: ; */
`

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: blue;
  font-weight: 500;
  font-size: 1.25em;
  margin-right: 20px;
`

export const Rule = styled.div`
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`

export const PostButton = styled.button`
  font-size: 1.2em;
  color: #fff;
  font-weight: 600;
  margin: 30px 0;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 15px;

  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`

