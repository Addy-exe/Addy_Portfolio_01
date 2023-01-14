import React, { useContext } from 'react'
import { FaGithub, FaLinkedin, FaStackOverflow, FaInstagram, FaAngleDoubleDown } from 'react-icons/fa'
import { ThemeContext } from '../Context/Context'
import TextSpan from '../components/TextSpan'
import { Typewriter } from 'react-simple-typewriter'
import '../styles/Home.css'
import { Link } from 'react-scroll'

const Home = () => {

  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;

  const sentence = "Hi! I Am".split("");
  const name = "Aditya".split("");

  return (
    <div id='home' className='home'>

      <div className='title'>
        <div 
          className='title-holder' 
        >
          <div>
            {sentence.map((e, i) => (
              <TextSpan
                key={i}>
                {e === " " ? "\u00A0" : e}
              </TextSpan>
            ))}
          </div>
          <div>
            {name.map((e, i) => (
              <TextSpan
                key={i}>
                {e}
              </TextSpan>
            ))}
          </div>
        </div>
        <span
          className='text2'
        >I'am <span style={{ color : '#00ffff'}}>
            <Typewriter
              words={['Frontend Developer', 'Aspiring Full Stack Developer']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1800}
            />
          </span>
        </span>
        <span
          className='description'
        > I am a recent BE in IT graduate with a passion for coding and an Individual who can write clean and
        optimized code. Focusing on full stack development with strong knowledge of frontend technologies, I am a dedicated learner 
        and excited to be part of a development team and help create new and effective solutions."
        </span>
        <a
          href='https://drive.google.com/file/d/1YvqGiFxuYG5Hv6n2JyPiweNwpMnATxF8/view?usp=share_link'
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className='resume'
            style={darkmode ? { color: '#fff' } : { color: '#000' }}
          >
            Resume
          </button>
        </a>
      </div>



      {/* Social Icons */}
      <div className='social'>
        <a
          href='https://github.com/Addy-exe'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className={darkmode ? 'icon icon-dark' : 'icon icon-light'}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/patiladi'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className={darkmode ? 'icon icon-dark' : 'icon icon-light'}
          />
        </a>
        <a
          href='https://www.instagram.com/aditya.p_____'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className={darkmode ? 'icon icon-dark' : 'icon icon-light'}
          />
        </a>
        <a
          href='https://stackoverflow.com/users/14332346/aditya'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaStackOverflow
            className={darkmode ? 'icon icon-dark' : 'icon icon-light'}
          />
        </a>
      </div>

      <Link style={{
        position: 'absolute',
        bottom: '12%',
        cursor: 'pointer'
      }}
        spy={true}
				to="skills"
				smooth={true}
      >
        <FaAngleDoubleDown
          size={32}
          color="#00ffff"
        />
      </Link>

    </div>
  )
}

export default Home