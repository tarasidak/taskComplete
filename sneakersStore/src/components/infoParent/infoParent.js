import React from 'react';
import Information from '../information/index';

import './infoparent.css'

export default class InfoParent extends React.Component{
    render(){
        return(
            <div className="infoParent">
                <Information />
            </div>
        )
    }
}