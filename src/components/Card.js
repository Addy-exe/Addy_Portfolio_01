import React from 'react'
import '../styles/Card.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'



const Card = (props) => {

    const { title, desc, image, stack, live, github } = props

    return (
        <div
            className='card'
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="20"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
        >
            <img
                src={image}
                alt={title}
                className='screenshot'
            />
            <div className='details-container'>
                <div className='details'>
                    <h2 style={{ fontSize: '1.6rem', color: '#fff' }}>{title}</h2>
                    <span>{desc}</span>
                    <div className='stack'>
                        {
                            stack.map((item) => (
                                <img src={item} key={item} alt={title}/>
                            ))
                        }
                    </div>
                </div>
                <div className='links'>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={28} className="project-link" />
                    </a>
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaExternalLinkAlt size={28} className="project-link" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card