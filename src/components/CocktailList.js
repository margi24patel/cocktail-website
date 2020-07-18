import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Cocktail from "./Cocktail";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const CocktaiList = ({ cocktails, loading }) => {
  const classes = useStyles();
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <>
      <div className={classes.root}>
        <div>
          <h2 style={{ textAlign: "center" }}>Cocktails</h2>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            {cocktails.map((cocktail) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Paper className={classes.paper} elevation={3}>
                    <Cocktail key={cocktail.id} {...cocktail} />
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default CocktaiList;
