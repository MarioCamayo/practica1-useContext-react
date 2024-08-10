import './App.css'
import {NavBar} from './components/NavBar'
import {MainContainer} from './components/MainContainer'
import { UserProvider } from './context/UserProvider'

function App() {
  return (
    <UserProvider>
      <NavBar />
      <MainContainer/>
    </UserProvider>
  )
}

export default App
