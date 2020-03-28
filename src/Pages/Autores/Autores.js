import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header/Header';

import DataTable from '../../Components/DataTable/DataTable';
import ApiService from '../../Utils/ApiService';
import PopUp from '../../Utils/PopUp';

class Autores extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nomes: [],
            titulo: 'Autores'
        }
    }

    componentDidMount(){
      ApiService.ListaAutores()
        .then(res => {
          if(res.message === 'success'){
            this.setState({nomes: [...this.state.nomes, ...res.data]});
            PopUp.exibeMensagem("success", "Autores listados com sucesso");
          }
        })
        .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao tentar remover o autor"));
    }


    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Autores</h1>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']} />

                </div>
                
            </Fragment>
        );
    }
}
export default Autores;