import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Button } from './Button'
import './Dropdown.css'
import { MenuItems } from './MenuItems'

const Dropdown = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
            <ul onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>

                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={item.cName}
                                to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Dropdown;

