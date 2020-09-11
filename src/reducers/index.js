const { ADICIONAR_POST } = require("../constants");

const estadoInicial = {
    posts: [
        {
            "id": "1",
            "nome": "Garnet",
            "mensagem": "Gostei muito dessa rede social. Já encontrei muitas gems interessadas em entender melhor sobre as fusões.",
            "qtdLikes": ""
        },
        {
            "id": "2",
            "nome": "Steven",
            "mensagem": "Aprendi uma receita totalmente nova com meu grupo de gastronomia!",
            "qtdLikes": ""
        },
    ]
}


function ReducerRaiz(state = estadoInicial, action){
    if(action.type === ADICIONAR_POST){
        let new_state = {...state};
        new_state.posts.push({
            nome: action.payload.nome,
            mensagem: action.payload.mensagem,
        })
        return new_state;
    }
    return state;
}

export default ReducerRaiz