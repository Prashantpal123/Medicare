import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Router'

const Layout = () => {
  return (
    <div className=''>
     <Header/>
     <main>
        <Routers/>
     </main>
     <Footer/>
    </div>
  )
}

export default Layout
