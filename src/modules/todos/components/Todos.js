import React from "react";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import TodoListItem from "./TodoListItem";
import { Typography, Container } from "@material-ui/core";

function Todos({ todos, dispatch }) {
  return (
    <>
      <Typography variant="h3"  style={titleStyle()}>ToDos List</Typography>
      <Container maxWidth="sm">
        <ul>
          {todos.map((item) => (
            <TodoListItem key={item.id} item={item} dispatch={dispatch} />
          ))}
        </ul>
      </Container>
      <TodoForm dispatch={dispatch}/>
    </>
  );
}

function mapStateToProps(state) {
  return { todos: state.list };
}

function titleStyle() {
  return {
    textAlign: "center",
    margin: "50px 0",
  };
}

export default connect(mapStateToProps)(Todos);
