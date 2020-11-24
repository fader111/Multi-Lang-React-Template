import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Typography: {
    padding: theme.spacing(2),
    color: theme.palette.text,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Container>
      <h1 style={{textAlign: "center"}}>Profile</h1>
    </Container>
  );
}
