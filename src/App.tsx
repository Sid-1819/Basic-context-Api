
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
 

  return (
    <UserContextProvider>
      <h1 className='text-4xl'>Hello</h1>
    </UserContextProvider>
  )
}

export default App
