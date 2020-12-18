import React,{useState} from "react";
//import IdleTimer from 'react-idle-timer'
import { useIdleTimer } from 'react-idle-timer'
import BudgetBarChart from "../budgetBarChart/BudgetBarChart";
import BudgetPieChart from "../budgetChart/BudgetPieChart";
import ExpensePieChart from "../expensePieChart/ExpensePieChart";
import { Row, Col, Divider} from 'antd';
import "./dashboard.css"
import Expense from "../expense/Expense";

import MonthChart from "../monthChart/MonthChart";
import NavBar from '../navBar/NavBar'

const Dashboard = () => {
  // const [idle, setIdle] = useState(0);
  // const handleOnIdle = event => {
  //   console.log('user is idle', event)
  //   console.log('last active', getLastActiveTime())
  //   setIdle(1)
  // }
 
  // const handleOnActive = event => {
  //   console.log('user is active', event)
  //   console.log('time remaining', getRemainingTime())
  //   setIdle(1)
  // }
 
  // const handleOnAction = (e) => {
  //   console.log('user did something', e)
  // }
 
  // const { getRemainingTime, getLastActiveTime } = useIdleTimer({
  //   timeout: 10000,
  //   onIdle: handleOnIdle,
  //   onActive: handleOnActive,
  //   onAction: handleOnAction,
  //   debounce: 500
  // })

  return (
    <>
    <NavBar/>
  <div className="contain">
  <Divider></Divider>
  
<h1 id="budchar">Budget chart&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Budget and Expense Comparison</h1>

<Row>
 
<Col span={12}> 
<BudgetPieChart/>  </Col>
<Col span={12}><BudgetBarChart/></Col>
</Row>
<Divider></Divider>
<h1>Expense Chart &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Month Chart</h1>
<Row>
<Col span={12}> <ExpensePieChart/></Col>
<Col span={12}><MonthChart/></Col>
</Row>
<Divider></Divider>
  </div>
  <Divider></Divider>
  <Divider></Divider>
  <Divider></Divider>

  </>)
}

export default Dashboard;