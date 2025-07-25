import { useRouter } from 'next/router'
import ProductCard from './ProductCard'

export default function ProductList({ products }) {
  const { query } = useRouter()
  const filtered = query.category
    ? products.filter(p => p.category === query.category)
    : products

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filtered.map(prod => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  )
}
