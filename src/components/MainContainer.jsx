import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

export const MainContainer = ()=>{
  const [name, setName] =  useContext(UserContext)
const handlerClick= ()=>{
  setName('Fabian')
}

  return(
    <div>
      <div className='container'>
       {name}
      </div>
      <button onClick={handlerClick}>Camabiar Nombre</button>
    </div>

  )
}