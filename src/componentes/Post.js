import React from 'react';
import './Post.css';
import Imagem from './mulher.png';

class Post extends React.Component {
    render() {
        return (
            <div className="post">
                
                <img src={Imagem} alt="imagem"></img>
                <div className="usuarioAutor">Fernanda</div>
                <div className="legenda">Demorei um tempinho nessa ilustração aqui. Espero que gostem!</div>
                
                
            </div>

        )
    }

}

export default Post;