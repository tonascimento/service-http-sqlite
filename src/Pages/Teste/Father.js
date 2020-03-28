import React, { Component, Fragment } from 'react';
import Children from './Children';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';

const ChildrenConnected = connect(store => ({ text: store.text }))(Children)

class Father extends Component {

    render() {
        return (
            <Fragment>
			    <Header />
                <div className="container">
                    <h1>Dentro</h1>
                    <h1>{this.props.text}</h1>
                    <ChildrenConnected />
                </div>
            </Fragment>
        )
    }
}
export default connect(store => ({ text: store.text }))(Father)