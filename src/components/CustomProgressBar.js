import React from 'react'
import { makeStyles, } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.spacing(4),
  },
  rail: {
    height: theme.spacing(4),
  },
  track: {
    height: theme.spacing(4),
    backgroundColor: "red",
  },
  mark: {
    height: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  thumb: {
    display: 'none',
  },
}));

function ScaleBar({value}) { 
  const classes = useStyles();
  return (
    <Slider
      value={value}
      step={10}
      min={0}
      max={100}
      marks
      valueLabelDisplay="off"
      classes={{
        root: classes.root,
        rail: classes.rail,
        track: classes.track,
        thumb: classes.thumb,
        mark: classes.mark,
      }}
    />
  );
};

const LanguageSection = function(props) {
  const { id, label, value } = props
  return(
    <Container id={id} style={{textAlign: "center"}}>
      <h2>{label}: {value}/100</h2>
      <ScaleBar value={value} />
    </Container>
    
  );
} 

export default LanguageSection