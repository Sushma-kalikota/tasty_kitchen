import Header from '../Header'
import Footer from '../Footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />{ /*wtvr the route is active that one will be coming inside the outlet*/}
      <Footer />
    </>
  )
}

export default Layout