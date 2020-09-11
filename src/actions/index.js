import { ADICIONAR_POST, DAR_LIKE, EXCLUIR_POST } from "../constants";


export function adicionarPost(payload) {
    return {type: ADICIONAR_POST, payload:payload}
}

export function excluirPost(payload) {
    return {type: EXCLUIR_POST, payload:payload}
}

export function darLikePost(payload) {
    return {type: DAR_LIKE, payload:payload}
}