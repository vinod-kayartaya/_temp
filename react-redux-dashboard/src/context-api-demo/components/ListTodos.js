import React from 'react';
import { useTodos } from '../hooks/custom-hooks';

const ListTodos = () => {
  const { todos } = useTodos();
  return (
    <>
      <ul className='list-group'>
        {todos.map((t) => (
          <li key={t.id} className='list-group-item'>
            ({t.id}) {t.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListTodos;
