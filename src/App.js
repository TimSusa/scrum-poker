import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card, Button, Zoom } from "@material-ui/core";

function App(props) {
  const { classes } = props;
  const [val, setVal] = React.useState("");
  return (
    <Card className={classes.root}>
      {val ? (
        <Zoom in={!!val}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonMain}
            onClick={() => setVal("")}
          >
            {val}
          </Button>
        </Zoom>
      ) : (
        <Grid
          style={{ height: "calc(100vh) - 32px", width: "100%" }}
          container
          spacing={0}
        >
          <Grid className={classes.griddy} container item xs={12} spacing={0}>
            <FormRow
              setVal={setVal}
              itemArray={[
                "0",
                "1/2",
                "1",
                "2",
                "3",
                "5",
                "8",
                "13",
                "20",
                "40",
                "100",
                "Inf"
              ]}
              classes={classes}
            />
          </Grid>
        </Grid>
      )}
    </Card>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);

function styles(theme) {
  return {
    "@keyframes slidein": {
      from: {
        transform: "rotate3d(0, 1, 0, 3.142rad)"
      },

      to: {
        transform: "rotate3d(0, 1, 0, 0)"
      }
    },
    root: {
      display: "flex",
      justifyContent: "space-between",
      height: "100vh",
      width: "100%"
    },
    griddy: {
      height: "99%"
    },
    button: {
      width: "96%",
      height: "96%",
      fontWeight: 600,
      fontSize: "2rem",
      marginLeft: "2%",
      marginTop: "2%"
    },
    mainButtonPaper: {
      padding: theme.spacing.unit
    },
    buttonMain: {
      textAlign: "center",
      width: "100%",
      marginLeft: "2%",
      marginRight: "2%",
      marginTop: "2%",
      height: "calc(97vh - 24px)",
      fontWeight: 600,
      fontSize: "5rem",
      animationDuration: ".5s",
      animationName: "slidein"
    }
  };
}

function FormRow(props) {
  const { classes, itemArray, setVal = [""] } = props;

  return (
    <React.Fragment>
      {itemArray.map((item) => (
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={(event) => setVal(event.currentTarget.textContent)}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </React.Fragment>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired
};