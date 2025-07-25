import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext, CartContext } from '../pages/_app'
import LanguageSwitcher from './LanguageSwitcher'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export default function Header() {
  const { user, logout } = useContext(AuthContext)
  const { cart } = useContext(CartContext)
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <Link href="/">
        <a className="font-bold text-xl">Теремок</a>
      </Link>

      <nav className="flex items-center space-x-4">
        <LanguageSwitcher />
        <Link href="/cart">
          <a>{t('cart')} ({cart.reduce((acc, p) => acc + p.qty, 0)})</a>
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={logout} className="ml-2 underline">
              {t('logout')}
            </button>
          </>
        ) : (
          <Link href="/login">
            <a>{t('login')}</a>
          </Link>
        )}
      </nav>
    </header>
  )
}
