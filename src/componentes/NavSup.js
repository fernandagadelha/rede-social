import React from 'react';
// import './NavSup.css';
import LogoApp from './logoredesocial.svg';
import { NavItems } from './NavItems';
import './NavItems.css'




class NavSup extends React.Component {
    render() {
        return (
                          
                
            <nav className="NavItems">
                <span><img src={LogoApp} alt="Logo da Rede Social" height="36px" widht="36px" className="logoApp"/></span>
                <ul className="nav-menu">
                    {NavItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <span><i className="fas fa-user"></i></span>
            </nav>
        )
    }
}

export default NavSup;