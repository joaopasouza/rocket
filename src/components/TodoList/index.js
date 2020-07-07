import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button';

import { list, remove, update } from '../../store/todos/todoActions';
import { getTodo } from '../../services/todoService';

function TodoList() {
  const { data } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(list());
  });

  const handleUpdate = (id) => {
    getTodo(id).then((resp) => {
      const data = { ...resp, completed: true };
      dispatch(update(id, data));
    });
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td className={item.completed ? 'completed' : ''}>{item.title}</td>
            <td>
              <Button
                type="button"
                variant="primary"
                size="xs"
                flat
                onClick={() => handleUpdate(item.id)}
                disabled={item.completed}
              >
                <i className="fa fa-check"></i>
              </Button>
              <span style={{ margin: '0px 2px' }}></span>
              <Button
                type="button"
                variant="danger"
                size="xs"
                flat
                onClick={() => dispatch(remove(item.id))}
                disabled={item.completed}
              >
                <i className="fa fa-times"></i>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
