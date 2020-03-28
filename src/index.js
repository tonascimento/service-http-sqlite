import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import * as serviceWorker from './Utils/serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Autores from './Pages/Autores/Autores';
import Livros from './Pages/Livros/Livros';
import Sobre from './Pages/Sobre/Sobre';
import NotFound from './Pages/NotFound/NotFound';
import PrimeiraTela from './Pages/Teste/PrimeiraTela';
import { Provider } from 'react-redux';
import Store from './Redux/Strore/Store';
import Father from './Pages/Teste/Father';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={Store}>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/livros" component={Livros} />
                <Route path="/autores" component={Autores} />
                <Route path="/primeiraTela" component={PrimeiraTela} />
                <Route path="/father" component={Father} />
                <Route component={NotFound} />
            </Switch>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your Home to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
