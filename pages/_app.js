import '../styles/globals.css'
import { useState, createContext } from 'react'
import { appWithTranslation } from 'next-i18next'

export const AuthContext = createContext()
export const CartContext = createContext()

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])

  const login = (email) => setUser({ email })
  const logout = () => setUser(null)

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id)
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId))
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </AuthContext.Provider>
  )
}

export default appWithTranslation(MyApp)
