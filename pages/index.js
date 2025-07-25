import Header from '../components/Header'
import CategoryMenu from '../components/CategoryMenu'
import ProductList from '../components/ProductList'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home({ products, categories }) {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <main className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">{t('welcome')}</h1>
        <CategoryMenu categories={categories} />
        <ProductList products={products} />
      </main>
    </>
  )
}

// Імітація SSR даних
export async function getStaticProps({ locale }) {
  // Приклад імпорту даних з public/products.json
  const products = require('../public/products.json')
  const categories = Array.from(new Set(products.map(p => p.category)))

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      products,
      categories,
    }
  }
                           }
