import React, { Component }  from "react";
import { addBudget } from "../../api/budget";
import Navbar from "../navBar/NavBar";
import './addBudget.css'
export default class AddBudget extends Component {

  constructor(props) {
      super(props)

      this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangeUserBudget = this.onChangeUserBudget.bind(this);
      this.onChangeUserDate = this.onChangeUserDate.bind(this);

      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          name: '',
          budget: '',
          date:'',
      }
  }

  onChangeUserName(e) {
      this.setState({ name: e.target.value })
  }

  onChangeUserBudget(e) {
      this.setState({ budget: e.target.value })
  }

  onChangeUserDate(e) {
    this.setState({ date: e.target.value })
}
  onSubmit(e) {
      e.preventDefault()

      const userObject = {
          name: this.state.name,
          budget: this.state.budget,
          date:this.state.date

      };

      addBudget(userObject).then((response)=>{
        this.setState({ name: '', expense:'', budget: '' })
      })
  }


  render() {
      return (
          <>
          <Navbar/>
          <h1 id="add">Add Budget</h1>

          <div className="addBudget">
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Name</label>
                      <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                  </div>
                  <div className="form-group">
                      <label>Budget</label>
                      <input type="text" value={this.state.budget} onChange={this.onChangeUserBudget} className="form-control" />
                  </div>
                  <div className="form-group">
                      <label>Date</label>
                      {/* this is accessibility change */}
                      <input type="datetime-local" value={this.state.date} onChange={this.onChangeUserDate} className="form-control" />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Add Budget" className="btn btn-success btn-block" />
                  </div>
              </form>
          </div>
          </>
      )
  }
}
