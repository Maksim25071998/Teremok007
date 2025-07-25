teremok/components/Header.js

export default function Header() { return <header className="p-4 bg-gray-100">Теремок</header>; } 

teremok/components/Footer.js

export default function Footer() { return <footer className="p-4 bg-gray-100 text-center">© 2025 Теремок</footer>; } 

teremok/components/LanguageSwitcher.js

export default function LanguageSwitcher() { return ( <div className="flex gap-2"> <button>🇺🇦</button> <button>🇬🇧</button> </div> ); } 

teremok/components/ProductCard.js

export default function ProductCard({ product }) { return ( <div className="border p-2"> <img src={product.image} alt={product.name} className="w-full h-48 object-cover" /> <h2>{product.name}</h2> <p>{product.price} грн</p> </div> ); } 

teremok/components/ProductList.js

import ProductCard from './ProductCard'; export default function ProductList({ products }) { return ( <div className="grid grid-cols-2 gap-4"> {products.map(p => <ProductCard key={p.id} product={p} />)} </div> ); } 

teremok/components/Cart.js

export default function Cart() { return <div>🛒 Кошик порожній</div>; } 

teremok/components/LoginForm.js

export default function LoginForm() { return ( <form> <input type="email" placeholder="Email" className="border p-2" /> <button type="submit" className="bg-blue-500 text-white p-2">Увійти</button> </form> ); } 

teremok/components/CategoryMenu.js

export default function CategoryMenu({ categories }) { return ( <ul className="flex overflow-auto gap-2"> {categories.map((c, i) => <li key={i}>{c}</li>)} </ul> ); } 

teremok/pages/_app.js

import '../styles/globals.css'; export default function App({ Component, pageProps }) { return <Component {...pageProps} />; } 

teremok/pages/index.js

import products from '../data/products.json'; import ProductList from '../components/ProductList'; export default function Home() { return <ProductList products={products.slice(0, 10)} />; } 

teremok/pages/cart.js

import Cart from '../components/Cart'; export default function CartPage() { return <Cart />; } 

teremok/pages/login.js

import LoginForm from '../components/LoginForm'; export default function LoginPage() { return <LoginForm />; } 

teremok/pages/api/auth.js

export default function handler(req, res) { res.status(200).json({ message: 'Auth endpoint' }); } 

teremok/public/products/category1/product1.jpg — (placeholder image) teremok/public/products/category1/product2.jpg — (placeholder image) teremok/public/products/category1/product3.jpg — (placeholder image) teremok/public/products/category2/product1.jpg — (placeholder image) teremok/public/products/category2/product2.jpg — (placeholder image)

teremok/public/locales/en.json

{ "title": "Teremok", "cart": "Cart", "login": "Login" } 

teremok/public/locales/ua.json

{ "title": "Теремок", "cart": "Кошик", "login": "Увійти" } 

teremok/styles/globals.css

body { font-family: sans-serif; margin: 0; padding: 0; background: #f8f8f8; } 

teremok/next.config.js

module.exports = { i18n: { locales: ['ua', 'en'], defaultLocale: 'ua' } }; 

teremok/tailwind.config.js

module.exports = { content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], theme: { extend: {} }, plugins: [] }; 

teremok/package.json

{ "name": "teremok", "version": "1.0.0", "scripts": { "dev": "next dev", "build": "next build", "start": "next start" }, "dependencies": { "next": "latest", "react": "latest", "react-dom": "latest", "tailwindcss": "^3.0.0" } } 

teremok/README.md

# Теремок Магазин на базі Next.js із підтримкою UA/EN, кошиком, логіном, фільтрами та 200 товарами. 

teremok/data/products.json

[ { "id": 1, "name": "Товар 1", "price": 199, "image": "/products/category1/product1.jpg" }, { "id": 2, "name": "Товар 2", "price": 249, "image": "/products/category1/product2.jpg" } // ... решта товарів до 200 ] 
