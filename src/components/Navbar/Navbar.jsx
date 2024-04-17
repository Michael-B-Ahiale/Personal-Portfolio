import Sidebar from '../Sidebar/Sidebar'
import './navbar.scss'


const Navbar = () => {
  return (
    <div className='navbar'>
    <Sidebar/>
      <div className="wrapper">
        <span className='logo'
        >{`M<>A`}</span>
        <div className="links">
          
          <a href="#Skills">LinkedIn</a>
          <a href="#Projects">Github</a>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
