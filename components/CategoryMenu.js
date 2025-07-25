import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export default function CategoryMenu({ categories }) {
  const router = useRouter()
  const { t } = useTranslation()
  const { query } = router

  const handleCategory = (cat) => {
    router.push({
      pathname: '/',
      query: { ...query, category: cat },
    })
  }

  return (
    <nav className="mb-6 flex flex-wrap gap-2">
      <span className="font-semibold">{t('categories')}:</span>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => handleCategory(cat)}
          className="px-3 py-1 bg-green-100 rounded hover:bg-green-300"
        >
          {cat}
        </button>
      ))}
    </nav>
  )
}
