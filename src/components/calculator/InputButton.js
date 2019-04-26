import React, { Component } from 'react';
import Button from '../button/index';
import { connect } from 'react-redux';
import { createExpression } from '../../actions/number-action';
const NUMBERS = [ 0,1,2,3,4,5,6,7,8,9 ]
const InputButton = ({ expression, createExpression }) =>{
  return(
    <>
      {NUMBERS.map(num=><Button onClick={()=>createExpression(`${expression.expression}${num}`)} >{num}</Button>)}
    </>
  )
}
const mapStateToProps = (state) =>({
  expression: state.expression
})

const mapDispatchToProps = {
  createExpression
}

export default connect(mapStateToProps, mapDispatchToProps)(InputButton)