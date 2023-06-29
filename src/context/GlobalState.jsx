import { GlobalContext } from "./GlobalContext";

export default function GlobalState (props) {

  // states, functions criados aqui

  const context = {
    // states, functions exportados aqui
  }

  return(
    <GlobalContext.Provider vaalue={context}>
      {props.children}
    </GlobalContext.Provider>
  )

}