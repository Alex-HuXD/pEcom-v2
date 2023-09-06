import { Link, Outlet } from 'react-router-dom'

import {ReactComponent as Logo} from '../../assets/crown.svg'

import './navbar.scss'

const Nav = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Nav
