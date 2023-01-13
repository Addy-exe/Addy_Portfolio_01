import React from 'react'
import Card from '../components/Card'
import Images from "../assets/Images"
import { FaAngleDoubleUp } from 'react-icons/fa'
import '../styles/Projects.css'
import { Link } from 'react-scroll'

const Projects = () => {

    const { projects } = Images

    return (
        <div className='projects' id='projects'>
            <h1 className='heading'>Projects</h1>
            <div className='card-holder'>
                <Card
                    title={projects[0].title}
                    desc={projects[0].desc}
                    image={projects[0].image}
                    stack={projects[0].stack}
                    live={projects[0].live}
                    github={projects[0].github}
                />
                <Card
                    title={projects[1].title}
                    desc={projects[1].desc}
                    image={projects[1].image}
                    stack={projects[1].stack}
                    live={projects[1].live}
                    github={projects[1].github}
                />
                <Link
                    style={{
                        margin: 'auto',
                        cursor: 'pointer'
                    }}
                    spy={true}
				    to="navbar"
				    smooth={true}
                >
                    <FaAngleDoubleUp
                        size={32}
                        color="#00ffff"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Projects