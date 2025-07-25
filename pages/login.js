import Header from '../components/Header'
import { useState, useContext } from 'react'
import { AuthContext } from './_app'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export default function Login() {
  const [email, setEmail] = useState('')
  const { login } = useContext(AuthContext)
  const router = useRouter()
  const { t } = useTranslation()

  const handleLogin = (e) => {
    e.preventDefault()
    login(email)
    router.push('/')
  }

  return (
    <>
      <Header />
      <main className="container mx-auto py-10 flex justify-center">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded shadow w-80 flex flex-col"
        >
          <label className="mb-2 font-semibold">{t('login')}</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border mb-4 px-3 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            {t('login')}
          </button>
        </form>
      </main>
    </>
  )
}
