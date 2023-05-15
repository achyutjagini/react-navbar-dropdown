import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Button } from './Button'
import './Dropdown.css'
import { MenuItems } from './MenuItems'
import { ClickContext } from './pages/context/clickContext'

const Dropdown = () => {
    
    const [click_l, setClick] = useState(false)
    const handleClick_l = () => setClick(!click_l)
    const { click, handleClick, closeMobileMenu } = useContext(ClickContext)

    return (
        <>
            <ul onClick={handleClick_l}
                className={click_l ? 'dropdown-menu clicked' : 'dropdown-menu'}>

                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={item.cName}
                                to={item.path} onClick={closeMobileMenu}>
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

