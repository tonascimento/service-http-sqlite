import React, { Component, Fragment } from 'react';
import Header from '../../Components/Header/Header';
// import Moment from 'react-moment';


class PrimeiraTela extends Component {

    constructor(props){
        super(props);
        this.state = {time: ''}
    }
    

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date().toLocaleString()}));
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <Fragment>
                <Header />
                <div id="teste" className="container">
                    <h1>Primeira tela</h1>
                    <h2>{this.state.time}</h2>
                    {/* <h1>
                        <Moment format="DD/MM/YYY hh:m:s">{this.state.time}</Moment>
                    </h1> */}

                </div>
            </Fragment>
        );
    }
}

export default PrimeiraTela;