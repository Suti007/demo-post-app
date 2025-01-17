import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import {Link} from 'react-router-dom'
import Logo from '../img/logo.png'
const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to="/">
          <img src={Logo} alt=""/>
          </Link>

        </div>
        <div className='links'>
          <Link className="link" to="/?cat=art">
          <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
          <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
          <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cenema">
          <h6>CENEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
          <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=art">
          <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>

      </div>
      <h1>Navbar</h1>
    </div>
  )
}

export default Navbar
