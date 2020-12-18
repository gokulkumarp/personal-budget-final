import React from 'react';
import { Link } from "react-router-dom";

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideNav = [
  {
    title: 'Dashboard',
    path: '/user/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Budget',
    path: '/user/budgets',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Expense',
    path: '/user/expenses',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Add Budget',
    path: '/user/add/budget',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Add Expense',
    path:   '/user/add/expense'  ,
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];