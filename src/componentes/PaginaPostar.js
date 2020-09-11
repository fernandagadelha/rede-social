import React, { Component } from 'react'
import { adicionarPost } from '../actions';
import { connect } from 'react-redux';


class PaginaPostar extends Component {

    state = {
        id: 1,
        nome: "",
        mensagem: "",
        qtdLikes: ""
    }

    constructor(props){
        super(props);
        this.adicionarPost = props.adicionarPostprops;
        console.log("adicionar post");
        console.log(props);
    }

    modificouFormulario = (event) =>{
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
            
        })
        console.log(this.state);
    }

    submeterFormulario = (event) =>{
        event.preventDefault();
        this.adicionarPost(this.state.nome, this.state.mensagem);
        this.setState({
            id: this.props.id +1,
            nome: "",    //quero que os inputs sejam esvaziados quando eu submeter o form
            mensagem: "",
            
        })
        console.log("funcionou");
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
        adicionarPostprops: (nome, mensagem) => {                        //ATENÇAO: essa função é diferente daquela que cria Ação e que tá lá no actions
            dispatch(adicionarPost({nome:nome, mensagem:mensagem}))  //no parâmetro, passo o payload
        }

    };
}

export default connect(null, mapDispatchToProps)(PaginaPostar)


