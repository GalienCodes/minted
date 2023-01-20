import React, { useEffect } from "react"
import Alert from "./components/Alert"
import ArtWorks from "./components/ArtWorks"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Loading from "./components/Loading"
import NavBar from "./components/NavBar"
import { isWallectConnected, loadNfts } from "./Minted"
import { useGlobalState } from "./store"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {
  const [nfts] = useGlobalState('nfts')
  console.log(nfts);

  useEffect(async () => {
    await isWallectConnected().then(() => console.log('Blockchain Loaded'))
    await loadNfts()
  }, [])
  return (
    <div className="min-h-screen">
      <NavBar />
      <Banner />
      <ArtWorks artworks={nfts} />
      <Footer />
      <Loading />
      <Alert/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
