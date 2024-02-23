
import '../App.css'
import Footer from '../Layouts/Footer'
import NavBar from '../Layouts/NavBar'

function Layout({children}) {

  return (
    <>
      <NavBar />
         <main>
            {children}
         </main>
      <Footer />

    </>
  )
}

export default Layout
