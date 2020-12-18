import { Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from '../navBar/NavBar'

import "./homepage.css"
const HomePage = () => {
  const homeLayout = () => (
    <div className="container">
      <header className="heading">
        <div className="heading-content" aria-label="Primary">
           <h2>Personal Budget</h2>
          <h1>
          Gain Total Control of Your Money

          </h1>
          <p>
          Stop living paycheck-to-paycheck,
get out of debt, and save more money.
          </p>
          <Link to="/login" className="btn-2">
            Get Started <i className="fa fa-chevron-right"></i>
          </Link>
        </div>
        {/* this is accessibility change */}
        <img src= 'https://www-assets.youneedabudget.com/wp-content/uploads/2019/05/15215226/ynab_budgeting_app.svg' className="budget-image" alt="Budget"></img>

      </header>
        
        <img className="tab-image" src= 'https://www-assets.youneedabudget.com/wp-content/uploads/2019/05/15215708/ynab_budgeting_windows_mac_ios_android-300x216.jpg' alt="Budget"/>    
        <div  className="content2" >
        <h2>You Need A Budget is award-winning software and a proven method—that works.</h2>
        <p>What really makes You Need A Budget different is that we can t<em>each you how to manage your money and get ahead—for good. </em>What if your bills rolled in and instead of piling up, you just paid them? No sweat. What if you didn’t even realize it was payday because you had money in the bank and weren’t desperate for that check to arrive?<strong> Forget everything you think you know about budgeting and prepare to experience total control.&nbsp;</strong></p>
        
        
        </div>
        {/* //this is accessibility change */}
    <div className="heading2" aria-label="Secondary">
    <div className="heading-content">
          <h1>
          On average, new budgeters save $600 in their first two months and more than $6,000 their first year.

          </h1>
          <Link to="/login" className="btn-2">
            Get Started <i className="fa fa-chevron-right"></i>
          </Link>
        </div>
        <img alt="budget" src= 'https://www-assets.youneedabudget.com/wp-content/uploads/2020/11/19213012/ilo_home_explainervideoart.svg' class="budget-image"></img>
    </div>
    <Divider></Divider>
    <Divider></Divider>
    <Divider></Divider>
    <Divider></Divider>
    <Divider></Divider>
    <Divider></Divider>

    </div>
  );
  return (    <>
  <NavBar/>
    <React.Fragment>{homeLayout()}</React.Fragment>
    </>);
};

export default HomePage;
