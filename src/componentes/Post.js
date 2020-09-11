import React from 'react';
import './Post.css';
import BotaoLike from './Botoes/BotaoLike';
import BotaoComentario from './Botoes/BotaoComentario';
import BotaoCompartilhamento from './Botoes/BotaoCompartilhamento';




class Post extends React.Component {

    constructor(props){
        super(props);
        this.id = props.id;
        this.mensagem = props.mensagem;
        this.nome = props.nome;
        this.qtdLikes = props.qtdLikes;
        
    }

    render() {
        return (
            <div id={this.id}>    
                <div className="post">
                    
                    <div className="postHeader">
                        <div className="usuarioAutor">{this.nome}</div>
                        <a href>Excluir</a>
                        
                        
                    </div>                 
                                  
                    <div className="legenda">{this.mensagem}</div>
                    <div className="interacao">
                        <BotaoLike ></BotaoLike>                        
                        <BotaoComentario></BotaoComentario>
                        <BotaoCompartilhamento></BotaoCompartilhamento>

                    </div>
                </div>

              
            </div>          
                


            

        )
    }

}

export default Post;