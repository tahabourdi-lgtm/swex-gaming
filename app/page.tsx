import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import MusicPlayer from "./components/MusicPlayer";
export default function Home() {
  return (
<>
  <CustomCursor />
  <LoadingScreen />
  <MusicPlayer />
  
  <Navbar />
  <Hero />
  <About />
  <Socials />
  <Footer />
</>
  );
}