import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import { BrowserRouter as Router } from 'react-router-dom'
import { Button } from './Button'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    /*for only services dropdown functions */
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }
        else {
            setDropdown(false)
        }
    }


    return (
        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    EPIC
                </Link>

                {/*for the icon symbol*/}
                {/*on clicking the div containing the symbol it changes also click state changes making nav menu active and inactive*/}
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>


                { /* when click is false the class will be nav-menu else the class will be nav-menu active */}

                {/* click is true class nav-menu active */}
                {/*once you click any item nav menu is not active*/}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'
                        onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services<i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>


                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Contact-us
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                <Button />

            </nav >
        </div >
    )
}
export default Navbar
