
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Navbar from "../components/NavBar"

const GalleryPage = ()=>{
    return(
        <div className="w-full flex flex-col">
            <Navbar/>
        <Gallery/>

        <Footer/>
        </div>
    )
}
export default GalleryPage