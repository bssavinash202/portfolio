import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import MyWork from "./Components/Mywork/MyWork";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero></Hero>
      <About></About>
      <Service></Service>
      <MyWork></MyWork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
