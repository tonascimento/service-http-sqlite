import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AppAction from '../../Redux/Action/AppAction';
import Store from '../../Redux/Strore/Store';

class Children extends Component {
    setText() {
        this.props.dispatch(AppAction.setText('Aquele texto'))
    }
    render() {
        return (
            <Fragment>
                <button onClick={() => this.setText()}>Mudar texto</button>
            </Fragment>
        )
    }
}

export default Children;