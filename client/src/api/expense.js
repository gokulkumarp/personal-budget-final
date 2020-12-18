import { get, post } from './restProxy';

export const addExpense = (data) => {
  return post('/api/expense/create', data);
};

export const getExpenseChart = () =>{
  return get('/api/expense/monthlyReport')
}


export const getExpense = () => {
  return get('/api/expense');
};
