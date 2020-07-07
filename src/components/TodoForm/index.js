import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { add } from '../../store/todos/todoActions';

import Button from '../Button';
import InputGroup from '../InputGroup';

import validationSchema from './validation';

const TodoForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      completed: false,
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(add(values));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputGroup
        type="text"
        name="title"
        value={formik.values.title}
        placeholder="Title"
        onChange={formik.handleChange}
        autoComplete="off"
        error={formik.errors.title && formik.touched.title}
        errorMessage={formik.errors.title}
      >
        <Button type="submit" variant="success" flat>
          <i className="fa fa-plus"></i>
        </Button>
      </InputGroup>
    </form>
  );
};

export default TodoForm;
