import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom' //provides an active class to the link (can use for css styling)

const NavBar = () => {

const navigate = useNavigate;

  return (
    <div>
        <nav>
            <ul>
            <li>
                <NavLink to='/'>Page 1</NavLink>
            </li>
            <li>
                <NavLink to='/page2'>Page 2</NavLink>
            </li>
            <li>
                <NavLink to='/page3'>Page 3</NavLink>
            </li>
            <li>
                <NavLink to='/page4'>Page 4</NavLink>
            </li>
            <li>
                <NavLink to='/page5'>Page 5</NavLink>
            </li>
            </ul>
            {/* look-up {replace:true} for buttons/useNavigate Hook */}
            <button onClick={()=> navigate('/page5')}>Sign Up</button>
        </nav>
    </div>
  )
}

export default NavBar