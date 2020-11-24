import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
// Custom upload button
import UploadButton from '../../components/UploadButton';


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
      <Paper className={classes.root}>
        <Container>
          <h2>Profile</h2>
          <p>Some info may be visible to other people using Google services.<span><a href="https://support.google.com/accounts/answer/6304920?hl=en" target="_blank" rel="noopener noreferrer">Learn more</a></span></p>
          <Box flexDirection="row">
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography variant="subtitle1" className={classes.Typography}>
                  PHOTO
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <UploadButton />
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography variant="subtitle1" className={classes.Typography}>
                  NAME
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1" className={classes.Typography}>Chef John</Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography variant="subtitle1" className={classes.Typography}>
                  BIRTHDAY
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography className={classes.Typography}>January 1st, 2000</Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography variant="subtitle1" className={classes.Typography}>
                  GENDER
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography className={classes.Typography}>He/His/Him</Typography>
              </Grid>
            </Grid>
            <Divider />
          </Box>
        </Container>
      </Paper>
      <Paper className={classes.root}>
        <Container>
          <h2>Contact Info</h2>
          <Box flexDirection="row">
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography variant="subtitle1" className={classes.Typography}>
                  EMAIL
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body1" className={classes.Typography}>chefjohn@gmail.com</Typography>
              </Grid>
            <Divider />
              <Grid item xs={4}>
                <Typography variant="subtitle1" className={classes.Typography}>
                  PHONE
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <div style={{borderStyle: "dotted", borderColor: "coral"}}>Enter here</div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Paper>
    </Container>
  );
}
