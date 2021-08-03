import React from 'react';
import './App.css';
import {Header} from './layout/Header';
import {Main} from './layout/Main';
import {Footer} from './layout/Footer';

function App(){
    return(
        <React.Fragment>
           <Header /> 
           <Main />
           <Footer />
        </React.Fragment>
    );
}

export default App;
