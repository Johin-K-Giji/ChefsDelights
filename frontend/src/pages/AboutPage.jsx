import AboutComponent from "../components/AboutComponent"
import Footer from "../components/Footer"
import Navbar from "../components/NavBar"

const About = ()=>{
    return(
        <div className="w-full flex flex-col">
            <Navbar/>
        <AboutComponent/>

        <Footer/>
        </div>
    )
}
export default About