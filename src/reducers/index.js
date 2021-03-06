const { ADICIONAR_POST } = require("../constants");

const estadoInicial = {
    posts: [
        
    ]
}


function ReducerRaiz(state = estadoInicial, action){
    if(action.type === ADICIONAR_POST){
        let new_state = {...state}; //esse new_state aqui é a cópia do estado atual (estadoInicial)
        new_state.posts.push({
            id: action.payload.id,
            nome: action.payload.nome,
            mensagem: action.payload.mensagem,
        })
        return new_state;
    }
    return state;
}

export default ReducerRaiz