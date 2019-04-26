import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { createExpression } from '../../actions/number-action';
const TextField = ({ expression, createExpression }) =>{
  return (
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="email">Input</InputLabel>
      <Input value={expression.expression} onChange={(e)=>createExpression(e.target.value)} id="email" name="email" autoComplete="email" autoFocus />
    </FormControl>
  )
}
const mapStateToProps = (state) =>(
  {expression: state.expression}
)

const mapDispatchToProps = {
  createExpression
}


export default connect(mapStateToProps, mapDispatchToProps)(TextField);