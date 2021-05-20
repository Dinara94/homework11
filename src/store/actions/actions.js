export const DELETE= "delete";
export const UPDATE= "update";
export const CREATE= "create";

export function deleteToDo(id) {
  return { type: DELETE, payload: id };
}

export function updateToDo(id) {
  return { type: UPDATE, payload: id };
}

export function createToDo(newItem) {
  return { type: CREATE, payload: newItem };
}
