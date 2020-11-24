import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// ContactForm
import { Avatar, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// IconLabelCardList
import { IconButton } from '@material-ui/core';
// import { Container, IconButton, Grid } from '@material-ui/core';

const iconStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '5%',
    paddingRight: '8%',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButton: {
    borderRadius: '50%',
    border: '5px solid #555'
  }
}));

function IconLabelCardList(props) {
  const classes = iconStyles();
  const { iconLabelList } = props;

  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        {iconLabelList.map((obj, idx) => (
          <Grid className={classes.flexColumn} key={`${obj.label} ${idx}`} item xs={12} sm={6} md={4} lg={3}>
            <IconButton aria-label={`${obj.label} ${idx}`} className={classes.iconButton}>
              {obj.icon()}
            </IconButton>
            {obj.label}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ContactComponent(props) {
  const classes = useStyles();
  const { iconLabelList, messageTitle, nameText, emailText, messageText, messageButtonText } = props;

  return (
    <div>
      <IconLabelCardList iconLabelList={iconLabelList} />
      <Container maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {messageTitle}
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label={nameText}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label={emailText}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  rows={4}
                  id="outlined-multiline-static"
                  label={messageText}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {messageButtonText}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
