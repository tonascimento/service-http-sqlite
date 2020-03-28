import React, { Component, Fragment } from 'react';

import Header from '../../Components/Header/Header';

class NotFound extends Component{

    render(){
        return(
            
            <Fragment>
                <Header />
                <div className="container">
                    <h1 className="center"> Página não encontrada </h1>
                </div>
               
            </Fragment>
            
        )
    }


}
export default NotFound;