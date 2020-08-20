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
        this.nomePessoa = props.nomePessoa;
        
    }

    render() {
        return (
            <div id={this.id}>    
                <div className="post">
                    
                    <div className="postHeader">
                        <div className="usuarioAutor">{this.nomePessoa}</div>
                        
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