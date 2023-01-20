import Alert from "./components/Alert"
import ArtWorks from "./components/ArtWorks"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Loading from "./components/Loading"
import NavBar from "./components/NavBar"


const App = () => {
  return (
    <div className="">
      <NavBar/>
      <Banner/>
      <ArtWorks/>
      <Footer/>
      <Loading />
      <Alert />
    </div>
  )
}

export default App
