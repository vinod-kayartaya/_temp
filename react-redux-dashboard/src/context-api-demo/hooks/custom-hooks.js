import { useContext } from 'react';
import { TodosDataContext } from '../components/TodoDataProvider';

export const useTodos = () => {
  return useContext(TodosDataContext);
};
