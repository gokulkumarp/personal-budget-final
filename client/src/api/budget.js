import { get, post } from './restProxy';

export const addBudget = (data) => {
  return post('/api/budget/create', data);
};

export const getBudget = () => {
    return get('/api/budget');
  };

export const getBudgetChart = (data) =>{
    return get('/api/budget', data)
}


export const monthBudget = ()=>{
  return get('/api/budget/monthBudget');
}

