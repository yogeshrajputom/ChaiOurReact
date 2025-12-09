import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {

  return (
    <>
      <UserContextProvider>
        <div>Context Api Use</div>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
