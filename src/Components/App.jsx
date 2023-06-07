import { useState } from 'react'
import '../App.css'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}
