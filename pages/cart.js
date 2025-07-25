import Header from '../components/Header'
import { useContext } from 'react'
import { CartContext } from './_app'
import { useTranslation } from 'next-i18next'

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext)
  const { t } = useTranslation()

  const total = cart.reduce((acc, p) => acc + p.price * p.qty, 0)

  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">{t('cart')}</h1>
        {cart.length === 0 ? (
          <div>Кошик порожній</div>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-green-100">
                <th>Товар</th>
                <th>Кількість</th>
                <th>Ціна</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id} className="border-b">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.qty}</td>
                  <td className="p-2">{item.price * item.qty} ₴</td>
                  <td className="p-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Видалити
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="mt-4 text-right font-bold text-lg">
          Всього: {total} ₴
        </div>
      </main>
    </>
  )
}
