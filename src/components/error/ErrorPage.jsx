import { useNavigate } from 'react-router-dom'
import { goToLoginPage, goToPostPage } from "../../router/coordinator"

export default function ErrorPage() {
  const navigate = useNavigate()
  return(
    <>
      <h1>Página não encontrada!</h1>
      <button onClick={() => goToLoginPage(navigate)} >Início</button>
    </>
  )
}