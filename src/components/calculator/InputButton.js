import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../button/index';
import { connect } from 'react-redux';
import { createExpression } from '../../actions/number-action';
const NUMBERS = [ 0,1,2,3,4,5,6,7,8,9 ];
const CalButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & button{
    width: 31%;
    margin: 2px;
  }
`;
const InputButton = ({ expression, createExpression }) =>{
  return(
    <CalButtonContainer>
      {NUMBERS.map((num, index)=><Button key={index} variant="contained" color="primary" size="small" onClick={()=>createExpression(`${expression.expression}${num}`)} >{num}</Button>)}
    </CalButtonContainer>
  )
}
const mapStateToProps = (state) =>({
  expression: state.expression
})

const mapDispatchToProps = {
  createExpression
}

export default connect(mapStateToProps, mapDispatchToProps)(InputButton)