import { useRef , useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSun , BiMoon } from "react-icons/bi";
import  { ThemeContext } from '../Context/Context'
import { Link } from "react-scroll";
import "../styles/Navbar.css";

function Navbar() {
	const navRef = useRef();

	const theme = useContext(ThemeContext);
  	const darkmode = theme.state.darkmode;
	const dispatch = theme.dispatch;

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const handleClick = () => {
		dispatch({type: 'toggle'});
	}

	return (
		<header id="navbar">
			<div className="toggle">
				<BiMoon onClick={handleClick}/>
				<BiSun onClick={handleClick}/>
				<div 
					className="t-button"
					style={darkmode ? {left: '2px'} : {right: '2px'}}
				></div>
			</div>
			<nav ref={navRef}>
				<Link 
					spy={true}
					to="Navbar"
					smooth={true}
					activeClass="activeClass"
					className="navlinks"
					onClick={showNavbar}
				>About
				</Link>
				<Link 
					spy={true}
					to="skills"
					smooth={true}
					className="navlinks"
					onClick={showNavbar}
				>Skills
				</Link>
				<Link 
					spy={true}
					to="projects"
					smooth={true}
					className="navlinks"
					onClick={showNavbar}
				>Projects
				</Link>
				<Link 
					spy={true}
					to="contact"
					smooth={true}
					className="navlinks"
					onClick={showNavbar}
				>Contact
				</Link>
	
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;