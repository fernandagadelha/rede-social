import React from 'react';

import Post from './Post';
import { connect } from 'react-redux';



class GaleriaPost extends React.Component {

    state = {
        posts: [
            {id:1, nome:"Garnet", mensagem:"Gostei muito dessa rede social. Já encontrei muitas gems interessadas em entender melhor sobre as fusões."},
            {id:2, nome:"Steven", mensagem:"Aprendi uma receita totalmente nova com meu grupo de gastronomia!"},
        ]
    }

       
    render(){
        let posts = [];
        for(let p of this.state.posts){
            posts.push(
                <Post
                    id={p.id}
                    nome={p.nome}
                    mensagem={p.mensagem}
                    
                >
                </Post>
            )
        }
        return (
            
            <div className="galeria">
                {posts}
                
                    
            </div>
        );
    }
}

const mapStateToProps = (state, props) =>{
    return {posts: state.posts};
        
}

export default connect(mapStateToProps)(GaleriaPost)

