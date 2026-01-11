import { styles } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { CastleCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center md:items-start gap-10`}>
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start z-10">
          <div className="flex flex-row gap-5">
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>

            <div className='flex flex-col items-center md:items-start justify-between'>
              <div className='flex flex-col justify-center items-center md:items-start'>
                <h1 className={`${styles.heroHeadText} text-white text-center md:text-left`}>
                  Hi, I'm <span className='text-[#915EFF]'>Snehal</span>
                </h1>

                <p className={`${styles.heroSubText} mt-2 text-white-100 text-center md:text-left`}>
                  I develop 3D visuals, user <br className='sm:block hidden' />
                  interfaces and web applications
                </p>
              </div>
              <div className="flex flex-row gap-6 mt-6 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/snehal-lavangare-2253231b5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 text-[#915EFF] hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/Snehal193" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-[#915EFF] hover:scale-110 transition-transform" />
                </a>
                <a href="https://x.com/bitterblackbrew" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} className="w-8 h-8 text-[#915EFF] hover:scale-110 transition-transform" />
                </a>
                <a href="https://drive.google.com/drive/u/0/folders/1v7Hwh3U7Tg720df-E8VXN6yLO2ZKYzun" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                  <FontAwesomeIcon icon={faFileAlt} className="w-8 h-8 text-[#915EFF] hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Canvas Section - Absolute positioned for small screens */}
        <div className="absolute md:relative inset-0 md:inset-auto w-full md:w-[500px] h-full opacity-20 md:opacity-100">
          <CastleCanvas />
        </div>
      </div>
    </section>
  )
}

export default Hero