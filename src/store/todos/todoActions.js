import * as todos from '../../services/todoService';

export const list = () => {
  return (dispatch) => {
    todos.getTodos().then((resp) => {
      dispatch({
        type: 'TODO_LIST',
        payload: resp,
      });
    });
  };
};

export const add = (data) => {
  return (dispatch) => {
    todos
      .addTodo(data)
      .then(() => dispatch({ type: 'TODO_ADD' }))
      .then(() => dispatch(list()));
  };
};

export const update = (id, data) => {
  return (dispatch) => {
    todos
      .updateTodo(id, data)
      .then(() => dispatch({ type: 'TODO_ADD' }))
      .then(() => dispatch(list()));
  };
};

export const remove = (id) => {
  return (dispatch) => {
    todos
      .deleteTodo(id)
      .then(() => dispatch({ type: 'TODO_REMOVE' }))
      .then(() => dispatch(list()));
  };
};
