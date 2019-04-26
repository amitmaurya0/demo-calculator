import React, { Component } from 'react';
import styled from 'styled-components'
import Button from '../button/index';
import { connect } from 'react-redux';
import { solveExpression,removeExpression } from '../../actions/number-action';

const ResultButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top:5px;
  justify-content: space-between;
  & button{
    width: 48%;
    margin: 2px;
  }
`;
const Result = ({ solveExpression, removeExpression,expression }) =>{
  return(
    <ResultButtonContainer>
      <Button  variant="contained" color="default" onClick={expression.expression ? solveExpression : ()=>{}} >=</Button>
      <Button  variant="contained" color="default" onClick={removeExpression} >AC</Button>
    </ResultButtonContainer>
  )
}
const mapStateToProps = (state) =>(
  {expression: state.expression}
)


const mapDispatchToProps = {
  solveExpression,
  removeExpression
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)