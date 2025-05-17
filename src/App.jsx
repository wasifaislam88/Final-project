import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Footer from './component/Footer'
import ToggleSection from './component/ToggleSection'


function App() {
 const [coin,setCoin] = useState(0)

 const handleGetcoin = () => {
   setCoin(coin+100)
 }

  return (
    <>
  
  <Navbar coin={coin}></Navbar>

  <Banner handleGetCoin={handleGetcoin}></Banner>
    <ToggleSection></ToggleSection>

  <Footer></Footer>

     
    </>
  )
}

export default App
