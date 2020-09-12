import React from 'react'
import { connect } from 'react-redux'
import { darLikePost } from '../../actions'

class BotaoLike extends React.Component{
    
        
    state = {
        qtdLikes: "",
    }

    incrementarLike = () =>{
        
        this.setState({
            qtdLikes: Number(this.state.qtdLikes) + 1,
        })
       
               
    }
        
    render(){
        return(
            <button onClick={this.incrementarLike}>Likes {this.state.qtdLikes}</button>
        )
        
    }
}

function mapDispatchToProps(dispatch){
    return {
        darLikePostprops: (id) => {                        //ATENÇAO: essa função é diferente daquela que cria Ação e que tá lá no actions
            dispatch(darLikePost({id:id}))  //no parâmetro, passo o payload
        }

    };
}

export default connect(null, mapDispatchToProps)(BotaoLike)

