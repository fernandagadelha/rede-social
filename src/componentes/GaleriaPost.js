import React from 'react';

import Post from './Post';
import { connect } from 'react-redux';



class GaleriaPost extends React.Component {
    
    constructor(props){
        super(props);
        console.log(props.posts);
    }
    
    

    render(){
        return (
            
            <div className="galeria">
                {this.props.posts.map((posts) =>(
                    <Post
                        id={posts.id}
                        nome={posts.nome}
                        mensagem={posts.mensagem}
                        qtdLikes={posts.qtdLikes}>

                    </Post>)
                )}               
                    
            </div>
        );
    }
}

const mapStateToProps = (state, props) =>{
    return {posts: state.posts};
        
}

export default connect(mapStateToProps)(GaleriaPost)

