import React, { Component } from 'react'
import { adicionarPost } from '../actions';
import { connect } from 'react-redux';


export class PaginaPostar extends Component {

    state = {
        nome: "",
        mensagem: ""
    }

    constructor(props){
        super(props);
        this.adicionarPost = props.adicionarPost;
    }

    modificouFormulario = (event) =>{
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
            
        })
        console.log(this.state);
    }

    submeterFormulario = (event) =>{
        // event.preventDefault();
        this.adicionarPost(this.state.nome, this.state.mensagem);
        this.setState({
            nome: "",    //quero que os inputs sejam esvaziados quando eu submeter o form
            mensagem: "",
            
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submeterFormulario}>
                    Nome: <input id="nome" type="text" onChange={this.modificouFormulario} value={this.state.nome}/><br/>
                    Mensagem: <input id="mensagem" type="text" onChange={this.modificouFormulario} value={this.state.mensagem}/><br/>
                    <button type="submit">Postar</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        adicionarPost: (nome, mensagem) => {
            dispatch(adicionarPost({nome:nome, mensagem:mensagem}))
        },

    };
}

export default connect(null, mapDispatchToProps)(PaginaPostar)


