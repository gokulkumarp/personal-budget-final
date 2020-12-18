import './App.css';
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBudget from './components/addBudget/AddBudget';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/Login';
import AddExpense from './components/addExpense/AddExpense';
import Budget from './components/budget/Budget';
import Expense from './components/expense/Expense';
import Register from './components/register/Register';
import Navbar from './components/navBar/NavBar';
import 'antd/dist/antd.css';
import HomePage from './components/homePage/HomePage';
import Foot from './components/footer/Footer';



function App() {
  return (
    <Router>
 <div className="App">
<Switch>
 
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/user/dashboard" exact component={Dashboard} />
          <Route path="/user/add/budget" exact component={AddBudget} />
          <Route path="/user/add/expense" exact component={AddExpense} />
          <Route path="/user/budgets" exact component={Budget} />
          <Route path="/user/expenses" exact component={Expense} />
          </Switch>
          <Foot/>
    </div>

    </Router>
   
  );
}

export default App;
