import React from "react";

import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";

export default function TodoForm({ dispatch }) {
  const newItem = {
    title: "",
    completed: false,
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "create",
      payload: newItem,
    });
  };

  const onInputChange = (e) => {
    newItem.title = e.target.value;
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={onFormSubmit}>
        <FormControl fullWidth>
          <InputLabel htmlFor="name">New item name</InputLabel>
          <Input
            type="text"
            name="title"
            onChange={onInputChange}
          />
        </FormControl>
        <Button
         type="submit"
          variant="contained"
          color="secondary"
          style={btnFormStyle()}
        >
          Save
        </Button>
      </form>
    </Container>
  );
}

function btnFormStyle() {
  return {
    display: "block",
    width: "25%",
    margin: "30px auto",
  };
}
