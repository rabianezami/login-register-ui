import { useState } from 'react'
import AuthCard from './components/AuthCard'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

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
    <AuthCard title={header.title}>
      <div className='flex justify-between mb-4'>
        <button
          onClick={() => setTab("login")}
          className={`w-full rounded p-2 font-semibold
            ${tab === "login"
              ? "bg-green-800 text-white"
              : "bg-green-100 text-gray-800"
            }`}
        >
          Login
        </button>
        <button
          onClick={() => setTab("register")}
          className={`w-full p-2 rounded font-semibold
            ${tab === "register"
              ? "bg-green-800 text-white"
              : "bg-green-100 text-gray-800"
            }`}
        >
          Register
        </button>
      </div>

      {tab === "login" ? (
        <LoginForm
          key="login"
          onSwitchToRegister={() => setTab("register")} />
      ) : (
        <RegisterForm
          key="register"
          onSwitchToLogin={() => setTab("login")} />
      )}
    </AuthCard>
  )
}

export default App
