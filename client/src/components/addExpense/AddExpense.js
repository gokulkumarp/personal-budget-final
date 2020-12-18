import React, { Component }  from "react";
import axios from 'axios'
import {addExpense} from '../../api/expense';
import { getBudget } from "../../api/budget";
import Navbar from "../navBar/NavBar";
import './addExpense.css'

export default class AddExpense extends Component {

  constructor(props) {
      super(props)

      this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangeUserBudget = this.onChangeUserBudget.bind(this);
      this.onChangeUserExpense = this.onChangeUserExpense.bind(this);

      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          name: '',
          expense:'',
          budget: '',
          usersCollection: []
      }
  }
  getBudgetData = async () =>{
    await getBudget().then((res)=>{
      for(var i=0;i<res.length;i++){
        this.state.usersCollection.push(res[i].name);
     }
    })
    return this.state.usersCollection
  }

  componentDidMount() {
        if (this.state.usersCollection.length === 0) {
          (async () => {
            try {
              this.setState({ usersCollection: await this.getBudgetData() });
            } catch (e) {
              //...handle the error...
            }
          })();
        }
}

  onChangeUserName(e) {
      this.setState({ name: e.target.value })
  }

  onChangeUserBudget(e) {
      this.setState({ budget: e.target.value })
  }

  onChangeUserExpense(e) {
    this.setState({ expense: e.target.value })
}
  onSubmit(e) {
      e.preventDefault()

      const userObject = {
          name: this.state.name,
          expense: this.state.expense,
          budget: this.state.budget

      };
      addExpense(userObject).then((response)=>{
        this.setState({ name: '', expense:'', budget: '' })
      })
}


  render() {
      return (
        <>
        <Navbar/>
        <h1 id="add">Add Expense</h1>
          <div className='addBudget'>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Name</label>
                      <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                  </div>
                  <div className="form-group">
                      <label>Expense</label>
                      <input type="text" value={this.state.expense} onChange={this.onChangeUserExpense} className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Budget</label>
                  <select
                    id="expense-budget"
                    className="form-control"
                    onChange={this.onChangeUserBudget}
                  >
                      <optgroup>
                      <option value="" disabled selected>
                        Select Budget
                      </option>
                      {this.state.usersCollection.length===0?(<div>Loading..</div>):(this.state.usersCollection.map((budget, index) => (
                        <option key={index} value={budget} >
                          {budget}
                        </option>
                      )))}
                      
                    </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Add Expense" className="btn btn-success btn-block" />
                  </div>
              </form>
          </div></>
      )
  }
}
