import React from "react";

import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl
} from "@material-ui/core";

import {
  Form,
  Formik
} from "formik";
import {
  connect
} from "react-redux";
import {
  addTodo
} from "../../../store/actions/actions";
import {
  useHistory
} from "react-router";
import FormikButton from "../common/FormikButton";
import FormikTextField from "../common/FormikTextField";
import FormikSelect from "../common/FormikSelect";

const INITIAL_VALUES = {
  title: "",
  completed: false,
}

const SELECT_OPTIONS = [
{value: false, label: "No"},
{value: true, label: "Yes"}
]


function validateTitle(value) {
  switch (true) {
    case value === "":
      return "Title cannot be empty field";
    case value.length >= 255:
      return "Title is too long";
    default:
      return false;
  }
}

function validate(values) {

  const title = validateTitle(values.title);
  return title && (
    title
  )
}


export default function TodoForm({
  addTodo
}) {
  const history = useHistory();

  const closeForm = () => {
    history.push("/list");
  }


  const onFormSubmit = (values) => {
    addTodo(values);
    closeForm();
  };


  return (
    <Dialog open={true} onClose={closeForm} maxWidth = "xs">
    <Formik
    initialValues={INITIAL_VALUES}
    validate={validate}
    onSubmit={onFormSubmit}
    >
    <Form>
      <DialogTitle>Create a new todo</DialogTitle>
      <DialogContent>
    <FormControl fullWidth >
    <FormikTextField
        name = "title"
        label="Title"/>
    </FormControl >
    <FormControl fullWidth>
    <FormikSelect
        name = "completed"
        label="Completed"
        options={SELECT_OPTIONS}
        />
    </FormControl>
    </DialogContent>
    <DialogActions>
    <FormikButton type = "submit"
    variant = "contained"
    color = "secondary"
    >
    Save
    </FormikButton>
    <FormikButton
    variant = "contained"
    color = "secondary"
    onClick={closeForm}
    >
    Cancel
    </FormikButton>
    </DialogActions>
    </Form>
    </Formik>
    </Dialog>
  );
}


const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(TodoForm);