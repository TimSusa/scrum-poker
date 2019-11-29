import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { GridItem } from './GridItem'
import Grid from "@material-ui/core/Grid";
import { Card, Button, Zoom } from "@material-ui/core";

function App(props) {
  const { classes } = props;
  const [val, setVal] = React.useState(null);
  return (
    <Card className={classes.root}>
      {val ? (
        <Zoom in={!!val}>
          <Button
            variant='contained'
            color='primary'
            className={classes.buttonMain}
            onClick={() => setVal("")}
          >
            {val}
          </Button>
        </Zoom>
      ) : (
          <Grid className={classes.griddy} container item xs={12} spacing={0}>
            <GridItem
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
                "INF"
              ]}
              classes={classes}
            />
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
      fontSize: "5rem"
    }
  };
}

