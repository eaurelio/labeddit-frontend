import { styled } from "styled-components";

export const NavHead = styled.section`
  display: flex;
  justify-content: space-between;
  height: 50px;
  background-color: #00000015;
`

export const MainContainer = styled.form`
  margin: 20px auto;
  width: 370px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  `

export const PostContainer = styled.div`
  width: 370px;
  height: 500px;
  margin-top: 15px;
  overflow: auto;
`

export const TextInput = styled.textarea`
  /* font-family: Trebuchet, */
  box-sizing: border-box;
  width: 100%;
  height: 150px;
  border-radius: 15px;
  border: none;
  background-color: #00000015;
  padding: 10px;
  /* word-wrap: break-word; */
`

export const LogButton = styled.button`
  background: none;
  border: none;
  color: blue;
  font-weight: 500;
  font-size: 1.25em;
  margin-right: 20px;
`

export const Rule = styled.div`
  margin-top: 30px;
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`

export const PostButton = styled.button`
  font-size: 1.2em;
  color: #fff;
  font-weight: 600;
  margin-top: 30px;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 15px;

  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`

