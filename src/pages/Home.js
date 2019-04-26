import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import TextField from '../components/calculator/Input';
import InputButton from '../components/calculator/InputButton';
import Actions from '../components/calculator/Actions';
import Result from '../components/calculator/Result';




const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Home extends Component{

  render(){
    const { classes } = this.props;
    return(
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            Calculator
          </Typography>
          <TextField />
          <InputButton />
          <Actions />
          <Result />
        </Paper>
      </main>
    )
  }
}


export default withStyles(styles)(Home);