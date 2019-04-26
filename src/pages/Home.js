import React, { Component } from 'react';
import TextField from '../components/calculator/Input';
import InputButton from '../components/calculator/InputButton';

export default class Home extends Component{

  render(){
    return(
      <>
        <TextField />
        <InputButton />
      </>
    )
  }
}