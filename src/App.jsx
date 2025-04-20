import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Experience, Hero, Navbar, Tech, StarsCanvas } from "./components";
// import { Home, About, Contact, Works} from "./routes";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Works from './routes/Works';


const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />}>
        <Route index element={<Hero />} />
        <Route path="/about" element={ <About />} />
        <Route path="/projects" element={ <Works />} />
        <Route path="/contact" element={ <Contact />} />
        {/* <Route path="/snippets" element={ <About />} /> */}
      </Route>

    </Routes>
      {/* <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div> */}
    </BrowserRouter>
  )
}

export default App
