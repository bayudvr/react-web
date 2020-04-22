import React from 'react';
import ReactDOM from 'react-dom';

function Landing(){

    return (
        <div>Memek</div>
    );
}

function Navbar(){

    return(
        <div>Kontol</div>
    );
}

if (document.getElementById('landing-page')) {
    ReactDOM.render(<Landing />, document.getElementById('landing-page'));
}

if(document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}

