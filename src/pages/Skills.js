import Images from '../assets/Images';
import SkillsBox from '../components/SkillsBox';
import '../styles/Skills.css'

const Skills = () => {

  // const [isActive, setIsActive] = useState(true);

  const { logos } = Images;

  // function switchKill() {
  //   setIsActive(!isActive);
  // }

  return (
    <div className='skills' id='skills'>

      <h1>Skills</h1>

      {/* <div className='skill-switch'>
        <button 
          className={`toggle-btn skillsbtn ${isActive ? "active" : "disactive" }`}
          onClick={isActive ? !switchKill:switchKill}
        >
        Skills
        </button>
        <button 
           className={`toggle-btn toolsbtn ${isActive ? "disactive" : "active" }`}
           onClick={isActive ? switchKill:!switchKill} 
        >
        Tools
        </button>
      </div> */}

      <div
        className='container'
      >
        {logos.map((item) => (
          <SkillsBox 
            title={item.title} 
            image={item.image} 
            color={item.color} 
            key={item.title}
          />
        ))}
      </div>

    </div>
  )
}

export default Skills