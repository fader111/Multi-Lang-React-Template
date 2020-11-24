import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// Assets
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MyBackgroundImg from './opacity-70-food-background.png'
// Custom component & data
import CustomLink from '../../components/CustomLink'
import ContactComponent from '../../components/ContactComponent';
// HomeContactData icons
import PhoneIcon from '@material-ui/icons/Phone';
import PrintIcon from '@material-ui/icons/Print';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';

const homeContactData = [
  {
    label: "+123 999 999 999",
    icon: () => { return <PhoneIcon style={{fontSize: 80}} /> },
  },
  {
    label: "+101 999 999 999",
    icon: () => { return <PrintIcon style={{fontSize: 80}} /> },
  },
  {
    label: "+info@tasteperfect.org",
    icon: () => { return <MailIcon style={{fontSize: 80}} /> },
  },
  {
    label: "Chuo City, Tokyo, JP",
    icon: () => { return <RoomIcon style={{fontSize: 80}} /> },
  },
];

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(25, 0, 60),
    margin: theme.spacing(0, 0, 10)
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  primaryButton: {
    color: "white",
    backgroundColor: "black",
    '&:hover': {
      background: "black",
    }
  }
}));

export default function HomePage(props) {
  const { t, id } = props
  const classes = useStyles();
  const mobile = false

  const [registerArrowShown, setRegisterArrowShown] = useState(false);
  const [signInArrowShown, setSignInArrowShown] = useState(false);
  const registerButton = registerArrowShown ? <>Register <ArrowRightAltIcon /></> : <>Register</>
  const signInButton = signInArrowShown ? <>Sign In <ArrowRightAltIcon /></> : <>Sign In</>

  return (
    <div id={id}>
      <div className={classes.heroContent} style={{ backgroundImage: `url(${MyBackgroundImg})` }}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Share Recipes with Friends 
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <CustomLink
                  ariaLabel="Hololive Link"
                  to="/register"
                >
                  <Button
                    className={classes.primaryButton}
                    variant="contained"
                    color="primary"
                    onMouseEnter={() => setRegisterArrowShown(true)}
                    onMouseLeave={() => setRegisterArrowShown(false)}
                  >
                    {registerButton}
                  </Button>
                </CustomLink>
              </Grid>
              <Grid item>
                <CustomLink
                  ariaLabel="Animemes Link"
                  to="/login"
                >
                  <Button
                    className={classes.primaryButton}
                    variant="contained"
                    color="primary"
                    onMouseEnter={() => setSignInArrowShown(true)}
                    onMouseLeave={() => setSignInArrowShown(false)}
                  >
                    {signInButton}
                  </Button>
                </CustomLink>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Container>
          <h3
            align="center"
            style={{
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'normal',
              marginTop: mobile ? '0.5em' : '1.5em',
            }}
          >
            "Food is the ingredient that binds us together."
          </h3>
          <h3 align="right" style={{ paddingRight: '50px' }}>- Vizzini{'   '}</h3>
        </Container>
      </div>
      <div>
        <Typography component="h4" variant="h4" align="center" style={{marginBottom: 10}}>
          {t("home.contactTitle")}
        </Typography>
        <ContactComponent
          iconLabelList={homeContactData}
          messageTitle={t("home.messageTitle")}
          nameText={t("home.messageName")}
          emailText={t("home.messageEmail")}
          messageText={t("home.messageText")}
          messageButtonText={t("home.messageButtonText")}
        />
      </div>
    </div>
  );
}