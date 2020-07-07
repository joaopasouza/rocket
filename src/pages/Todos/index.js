import React from 'react';

import Layout from '../../layouts/Main';
import Header from '../../components/Header';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';

const Todos = () => {
  return (
    <Layout>
      <Header title="Todos" />
      <section className="content container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="box">
              <div className="box-header">
                <TodoForm />
              </div>

              <div className="box-body table-responsive no-padding">
                <TodoList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Todos;
