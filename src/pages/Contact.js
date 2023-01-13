import React from 'react'
import { 
FaGithub, 
FaLinkedin, 
FaStackOverflow, 
FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import '../styles/Contact.css'

const Contact = () => {

    const social = [
        { component: FaInstagram , link: 'https://www.instagram.com/aditya.p_____' },
        { component: FaGithub, link: 'https://github.com/Addy-exe' },
        { component: FaLinkedin , link: 'https://www.linkedin.com/in/patiladi' },
        { component: FaStackOverflow , link: 'https://stackoverflow.com/users/14332346/aditya' }
    ]
   

    return (
        <div id="contact" className='contact'>
            <div className='tag'>
                <h1>Get In Touch</h1>
                <span>"Actively Looking for a Software Development Jobs"</span>
            </div>
            <div className='contact-links'>
                {social.map((item) => (
                    <motion.a
                        whileHover={{
                            color: '#00ffff',
                            scale: 1.2
                        }} 
                        href={item.link} 
                        target='_blank'
                        rel='noreferrer' 
                        key={item.component}
                    >
                        <item.component className="social-icons"/>
                    </motion.a>
                ))}
            </div>
            <footer>
               <span 
               style={{
                color: '#00ffff'
               }}>Design and Build from scratch by Aditya Patil <span>&#x2764;</span></span>
            </footer>
        </div>
    )
}

export default Contact