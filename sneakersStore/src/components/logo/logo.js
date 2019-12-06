import React from 'react';
import logo from './logo.svg';

export default class Logo extends React.Component{
    render(){
        return(
            <figure>
                <img src={logo} style={{width: '100px', height: '80px'}} alt='logo'/>
            </figure>
        );
    }
}
