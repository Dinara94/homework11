import React from "react";


import { Button, Grid } from "@material-ui/core";

export default function TodoListItem({ item, dispatch }) {
  function onItemChange() {
    dispatch({
      type: "update",
      payload: item.id,
    });
  };

  function handleDeleteTodo() {
    dispatch({
      type: "delete",
      payload: item.id,
    });
  };

  return (
    <Grid container direction="row" spacing={0} alignItems="center">
      <li style={getItemStyle(item.completed)}>
        <Grid>{item.title}</Grid>
        <Grid>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleDeleteTodo}
            style={btnStyle()}
          >
            Delete
          </Button>
        </Grid>
        <Grid>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={onItemChange}
            style={btnStyle()}
          >
            Change
          </Button>
        </Grid>
      </li>
    </Grid>
  );
}

function getItemStyle(completed) {
  return {
    cursor: "pointer",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    width: "100%",
    margin: "20px",
    color: completed ? "blue" : "red",
  };
}

function btnStyle() {
  return {
    display: "block",
    marginLeft: "50px",
  };
}
