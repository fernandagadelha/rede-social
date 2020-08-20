import React from 'react';

import Post from './Post';



class GaleriaPost extends React.Component {
    state = {
        posts:[
            {id:1, nomePessoa:"Garnet", qtdLikes:4},
            {id:2, nomePessoa:"Pearl", qtdLikes:2},
            {id:3, nomePessoa:"Steven", qtdLikes:12},
            {id:4, nomePessoa:"Peridot", qtdLikes:1},
            {id:5, nomePessoa:"Lia", qtdLikes:79}
            
        ]
    }

    render() {
        return (
            
            <div className="galeria">
                <Post id="1" mensagem="Gostei muito dessa rede social. Já encontrei muitas gems interessadas em entender melhor sobre as fusões." nomePessoa="Garnet"></Post>
                <Post id="2" mensagem="Eu e @connie marcamos um encontro com o grupo de técnicas de combate corporal. Todos estão convidados!" nomePessoa="Pearl"></Post>
                <Post id="3" mensagem="Aprendi uma receita totalmente nova com meu grupo de gastronomia!" nomePessoa="Steven"></Post>
                <Post id="4" mensagem="Ainda tentando entender os misteriosos seres felinos..." nomePessoa="Peridot"></Post>
                <Post id="5" mensagem="poxa que legal" nomePessoa="Lia"></Post>
            </div>
                
            
        )
    }
  }
  
  export default GaleriaPost;