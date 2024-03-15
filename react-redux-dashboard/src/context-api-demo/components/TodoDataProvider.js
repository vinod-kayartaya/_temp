import React, { createContext, useId, useState } from 'react';

export const TodosDataContext = createContext();

const initialTodos = [
  { id: 1, text: 'start session', finished: true },
  { id: 2, text: 'learn react router', finished: false },
  { id: 3, text: 'learn cypress', finished: false },
];

const TodoDataProvider = ({ children }) => {
  const [todos, setTodos] = useState([...initialTodos]);

  const addTodo = (text) => {
    const id = Math.floor(Math.random() * Date.now());
    const newTodos = [...todos, { id, text, finsihed: false }];
    setTodos(newTodos);
  };

  return (
    <>
      <TodosDataContext.Provider value={{ todos, addTodo }}>
        {children}
      </TodosDataContext.Provider>
    </>
  );
};

export default TodoDataProvider;
