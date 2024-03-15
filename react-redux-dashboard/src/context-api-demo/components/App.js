import React from 'react';
import AddTodo from './AddTodo';
import ListTodos from './ListTodos';
import TodoDataProvider from './TodoDataProvider';

const App = () => {
  return (
    <>
      <TodoDataProvider>
        <div className='alert alert-primary'>
          <div className='container'>
            <h1>Context Demo</h1>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <AddTodo />
            </div>
            <div className='col-4'>
              <ListTodos />
            </div>
          </div>
        </div>
      </TodoDataProvider>
    </>
  );
};

export default App;
