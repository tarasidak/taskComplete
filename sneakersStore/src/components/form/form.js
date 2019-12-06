import React from 'react';
import CustomizedInputs from '../addForm/index';

export default class Form extends React.Component{
    render(){
        return(
            <div>
                <h2 style={{color:'orange', marginLeft:'40%'}}>ADD NEW SNEAKERS</h2>
                <CustomizedInputs/>
            </div>
        )
    }
}