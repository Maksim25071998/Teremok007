import { useContext } from 'react'
import { CartContext } from '../pages/_app'

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="border rounded p-4 shadow hover:shadow-lg flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-2" />
      <h3 className="font-bold mb-1">{product.name}</h3>
      <span className="mb-2 text-green-600 font-semibold">{product.price} ₴</span>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-1 rounded"
      >
        Додати в кошик
      </button>
    </div>
  )
}
