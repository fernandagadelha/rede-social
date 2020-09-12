import React from 'react';

import Post from './Post';
import { connect } from 'react-redux';



class GaleriaPost extends React.Component {

    constructor(props){
        console.log("GaleriaPost constructor")
        super(props);
        this.posts = props.posts;
    
    }

       
    render(){
        let posts = [];
        for(let p of this.posts){
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
    console.log("mapStateToProps")
    return {posts: state.posts};
        
}

export default connect(mapStateToProps)(GaleriaPost)

