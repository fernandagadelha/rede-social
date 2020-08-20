import React from 'react'

class BotaoLike extends React.Component{
    
        
    state = {
        qtdLikes: 0,
    }

    incrementarLike = () =>{
        
        this.setState({
            qtdLikes: this.state.qtdLikes + 1,
        })

        

               
    }
        
    render(){
        return(
            <button onClick={this.incrementarLike}>Likes {this.state.qtdLikes}</button>
        )
        
    }
}

export default BotaoLike