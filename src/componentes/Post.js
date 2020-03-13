import React from 'react';
import './Post.css';




class Post extends React.Component {
    render() {
        return (
            <div>    
                <div className="post">
                    
                    <div className="postHeader">
                        <div className="usuarioAutor">Garnet</div>
                        <span className="tempo">3 min</span>
                    </div>                 
                                  
                    <div className="legenda">Gostei muito dessa rede social. Já encontrei muitas gems interessadas em entender melhor sobre as fusões. </div>
                    <div className="interacao">
                        <button className="reagir">Curtir</button>
                        <button className="reagir">Comentar</button>
                        <button className="reagir">Compartilhar</button>

                    </div>
                </div>

                <div className="post">
                    <div className="postHeader">               
                        <div className="usuarioAutor">Pearl</div>
                        <span className="tempo">5 min</span>     
                    </div>            
                    <div className="legenda">Eu e <span className="destaque">@connie</span> marcamos um encontro com o grupo de técnicas de combate corporal. Todos estão convidados! </div>
                    <div className="interacao">
                        <button className="reagir">Curtir</button>
                        <button className="reagir">Comentar</button>
                        <button className="reagir">Compartilhar</button>

                    </div>
                </div>

                <div className="post">                    
                    <div className="postHeader">
                        <div className="usuarioAutor">Steven</div>
                        <span className="tempo">25 min</span>  
                    </div>                             
                    <div className="legenda">Aprendi uma receita totalmente nova com meu grupo de gastronomia!</div>
                    <div className="interacao">
                        <button className="reagir">Curtir</button>
                        <button className="reagir">Comentar</button>
                        <button className="reagir">Compartilhar</button>

                    </div>
                </div>

                <div className="post"> 
                    <div className="postHeader">
                        <div className="usuarioAutor">Peridot</div>
                        <span className="tempo">1 h</span>    
                    </div>             
                    <div className="legenda">Ainda tentando entender os misteriosos seres felinos...</div>
                    <div className="interacao">
                        <button className="reagir">Curtir</button>
                        <button className="reagir">Comentar</button>
                        <button className="reagir">Compartilhar</button>

                    </div>
                </div>
            </div>
            
                            
                


            

        )
    }

}

export default Post;