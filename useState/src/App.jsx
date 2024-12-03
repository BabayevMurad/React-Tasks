import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainComponent from './components/MainComponent'

function App() {

  let [bagProducts, setBagProducts] = useState([])

  return (
    <>
      <Header/>
      <MainComponent bagProducts={bagProducts} setBagProducts={setBagProducts} />
      <Footer bagProducts={bagProducts} setBagProducts={setBagProducts} />
    </>
  )
}

export default App


