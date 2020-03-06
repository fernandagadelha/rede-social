import React from 'react';
import './NavSup.css';
import LogoApp from './logoredesocial.svg';

class NavSup extends React.Component {
    render() {
        return (
            <header>
                <button><img src={LogoApp} alt="Logo da Rede Social" className="logoApp"/></button>

                <nav className="nav">
                    <ul className="navlist">
                        <li className="linhaTempo"><button>Linha do Tempo</button></li>
                        <li className="perfil"><button>Perfil</button></li>
                    </ul>

                </nav>
            
            </header>

            
            
        )
    }
}

export default NavSup;