import { useState } from 'react'
import Layout from "./layout/Layout"
import './App.css'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout/>
    <Analytics/>
    
    </>
  )
}

export default App
