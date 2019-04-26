import React, { Component } from 'react';
import Button from '../button/index';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { createExpression } from '../../actions/number-action';
const OPRANDS = [ "+", "-", "*", "/" ];

const ActionButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top:0px;
  justify-content: space-between;
  & button{
    width: calc( 100%/4 - 2px );
  }
`;

const Actions = ({ expression, createExpression }) =>{
  return(
    <ActionButtonContainer>
      {OPRANDS.map(num=><Button variant="contained" color="secondary" size="small" onClick={()=>createExpression(`${expression.expression}${num}`)} >{num}</Button>)}
    </ActionButtonContainer>
  )
}
const mapStateToProps = (state) =>({
  expression: state.expression
})

const mapDispatchToProps = {
  createExpression
}

export default connect(mapStateToProps, mapDispatchToProps)(Actions)