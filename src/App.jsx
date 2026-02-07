import { useState } from 'react'
import AuthCard from './components/AuthCard'

function App() {
  const [tab, setTab] = useState("login")

  const header =
    tab === "login"
      ? {
        title: "Login",
      }
      : {
        title: "Create your account",
      }

  return (
    <AuthCard title={header.title}></AuthCard>
  )
}

export default App
