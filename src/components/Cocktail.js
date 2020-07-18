import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
// import Link from "@material-ui/core/Link";
//import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    justifyContent: "center",
  },
  media: {
    height: 200,
  },
});

const Cocktail = ({ id, image, name, glass, info }) => {
  const classes = useStyles();
  const history = useHistory();
  function handleClick() {
    history.push(`/cocktail/${id}`);
  }

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="h2">
              {id}
            </Typography> */}
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              {glass}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {info}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.root}>
          <Button
            onClick={handleClick}
            size="small"
            variant="contained"
            color="primary"
          >
            Details
          </Button>
          {/* <Link to={`/cocktail/${id}`}>Details</Link> */}
        </CardActions>
      </Card>
    </>
  );
};

export default Cocktail;
