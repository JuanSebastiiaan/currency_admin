import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './layout/layout'
import Home from './pages/home'
import Exchange from './pages/exchange'
import ExchangeRates from './pages/exchangerates'

function App() {

  return (
    <>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/exchangeRates" element={<ExchangeRates />} />
            </Routes>
        </Layout>
    </>
  )
}

export default App
