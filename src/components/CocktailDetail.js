import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 345,
    justifyContent: "center",
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  info: {
    textAlign: "left",
    // paddingTop: "120px",
    // paddingBottom: "100px",
    padding: "80px 60px",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      textAlign: "flex-start",
      clipPath: "none",
    },
  },
}));

const CocktailDetail = ({
  id,
  image,
  name,
  glass,
  category,
  info,
  ingredients,
  instructions,
}) => {
  const classes = useStyles();
  const history = useHistory();
  function handleClick() {
    history.push("/");
  }

  return (
    <>
      <div className={classes.root}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper} elevation={3}>
                <img src={image} alt={name} className={classes.image} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} className={classes.info}>
              <Typography
                variant="h2"
                marked="center"
                // className={classes.mediumTitle + " " + classes.textInfo}
                component="h2"
              >
                {name}
              </Typography>
              <p>
                <Typography marked="center">
                  Info:
                  {info}
                </Typography>
              </p>
              <p>
                <Typography marked="center">Glass: {glass}</Typography>
              </p>
              <p>
                <Typography marked="center">Category: {category}</Typography>
              </p>
              <p>
                <Typography marked="center">
                  Ingrdients: {ingredients}
                </Typography>
              </p>
              <p>
                <Typography>Instructions: {instructions}</Typography>
              </p>
              <Button
                onClick={handleClick}
                size="small"
                variant="contained"
                color="primary"
              >
                More Cocktails
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default CocktailDetail;
