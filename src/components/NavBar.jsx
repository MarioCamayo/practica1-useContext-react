import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

export const NavBar = ()=>{
  const [name, setName] =  useContext(UserContext)
  return (
    <nav>
      <h2>Logo</h2>
      <ul className='nav-list'>
        <li>hola {name}</li>
      </ul>
    </nav>
  )
}