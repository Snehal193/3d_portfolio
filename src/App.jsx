import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Experience, Hero, Navbar, Tech, StarsCanvas } from "./components";
// import { Home, About, Contact, Works} from "./routes";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Works from './routes/Works';
import MouseFollower from "./components/MouseFollower";
import SliderCaptcha from "./routes/SliderCaptcha";


const App = () => {

  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 pointer-events-none z-50">
          <MouseFollower />
        </div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Works />}>
                <Route path="captcha" element={<SliderCaptcha />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/snippets" element={ <About />} /> */}
            </Route>
          </Routes>
        </div>

      </div>

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
