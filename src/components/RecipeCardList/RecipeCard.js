import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// CustomLink for React Router import
import { CustomLink } from '../CustomLinks';
// Card
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
// Card speed dial component
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
// speed dial Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const actions = [
  { icon: <OpenInNewIcon />, name: 'Open' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <FavoriteIcon />, name: 'Like' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    objectFit: "cover"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  headerColor: {
    color: "#355C7D",
  },
  listItemCenter: {
    textAlign: "center"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  flexRowItem: {
    flex: "1 1 auto",
    margin: "5px"
  },
  divider: {
    height: 28,
    margin: 4,
  },
  exampleWrapper: {
    position: 'relative',
    marginTop: theme.spacing(3),
  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
    '&.MuiSpeedDial-fab': {
      size: "small"
    }
  },
}));

export default function RecipeCard(props) {
  const classes = useStyles();
  const { postID, name, imgPath, starsNum, tags, user } = props
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // Generate list items with dividers
  const listItems = tags.map((val, idx) => {
    return (
      <Typography key={`${val} ${idx}`} color="textPrimary" className={classes.flexRowItem}>
        {val}
      </Typography>
    )
  })
  const listItemsWithDividers = [];
  listItems.forEach((item, index) => {
    listItemsWithDividers.push(item)
    if (listItems[index + 1] !== undefined) {
      listItemsWithDividers.push(<Divider key={`Divider: ${index}`} className={classes.divider} orientation="vertical" />)
    }
  })
  // CardContent gives too much padding

  return (
    <Card className={classes.root}>
      <CustomLink ariaLabel={`Link to ID: ${postID}`} to={`/browse/${postID}`}>
        <CardMedia
          className={classes.media}
          image={`${process.env.PUBLIC_URL}/${imgPath}`}
          title={name}
        />
        <div style={{paddingLeft: '14px'}}>
          <Typography variant="h5" display="block" style={{textAlign:"left"}}>
            By <strong>{user}</strong>
          </Typography>
          <Typography variant="caption">
            {name}
          </Typography>
          <br />
          <Rating name="read-only" value={starsNum} readOnly />
        </div>
      </CustomLink>
      
      <div className={classes.exampleWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="up"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </div>
    </Card>
  );
}
