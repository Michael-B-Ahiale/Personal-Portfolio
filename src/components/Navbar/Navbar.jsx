import Sidebar from '../Sidebar/Sidebar'
import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <div className='navbar'>
    <Sidebar/>
      <div className="wrapper">
        <span className='logo'
        >{`M<>A`}</span>
        <div className="links">
          
        <a href="https://github.com/Michael-B-Ahiale"><FontAwesomeIcon icon={faGithub} style={{height:'40px',width:'40px'}}/></a>
          <a href="http://www.linkedin.com/in/michael-ahiale-574b7720a "><FontAwesomeIcon icon={faLinkedin} style={{height:'40px',width:'40px'}}/></a>

          
        </div>
      </div>
    </div>
  )
}

export default Navbar
