import React, { useState } from 'react';
import { useTodos } from '../hooks/custom-hooks';

const AddTodo = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;

    addTodo(text);
    setText('');
  };
  return (
    <>
      <h3>Add a new todo task</h3>
      <hr />
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='new task text'
          className='form-control'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </>
  );
};

export default AddTodo;
