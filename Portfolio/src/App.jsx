import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="bg-blue-950">
        <Navbar />
        <div className="text-white px-[10%] bg-blue-950 h-full">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
