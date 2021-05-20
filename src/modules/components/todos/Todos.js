import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import TodoListItem from "./TodoListItem";
import { Typography, Container } from "@material-ui/core";
import TodoForm from "./modules/todos/components/TodoForm";


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
      <Button component={Link} to="/list/add">
      Add new
      </Button>
      <Route path={`${path}/add`} component={TodoForm} />
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
