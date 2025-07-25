import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { locale, locales, pathname, query, asPath } = router

  const changeLanguage = (l) => {
    router.push({ pathname, query }, asPath, { locale: l })
  }

  return (
    <div>
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => changeLanguage(l)}
          disabled={l === locale}
          className={`mx-1 px-2 py-1 rounded ${
            l === locale ? 'bg-white text-green-600' : 'bg-green-800 text-white'
          }`}
        >
          {l === 'ua' ? '🇺🇦' : '🇬🇧'}
        </button>
      ))}
    </div>
  )
}
