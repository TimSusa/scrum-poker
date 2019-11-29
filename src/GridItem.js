import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

export function GridItem(props) {
  const {
    classes: { button },
    itemArray,
    setVal
  } = props;

  return (
    <Fragment>
      {itemArray.map((item, i) => (
        <Grid item xs={4} key={`${i}-grid-item`}>
          <Button
            variant='contained'
            color='primary'
            className={button}
            onClick={(event) => setVal(event.currentTarget.textContent)}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </Fragment>
  );
}

GridItem.propTypes = {
  classes: PropTypes.object.isRequired,
  itemArray: PropTypes.array,
  setVal: PropTypes.func
};
