import { useState } from 'react'
import './assets/styles/App.scss'
import Navbar from './components/navbar/Navbar'
import LoginForm from './components/login/Login'
import RegisterForm from './components/register/Register'
import DashBoard from './components/dashboard/Dashboard'
import BudgetModal, { BudgetRecord } from './components/budgetModal/BudgetModal'

const App = () => {
  const [budgetOverview, setBudgetOverview] = useState<BudgetRecord[]>([]);
  const combinedLimits =  budgetOverview.map((budget)=> Number(budget.value));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <>
      <Navbar loggedIn={isLoggedIn}/>
      {!isRegistered && <RegisterForm registered={(value)=> setIsRegistered(value)}/>}
        {(isLoggedIn && isRegistered) ?
        <>
        <DashBoard userName='Fredrik' budget={[combinedLimits.reduce((prev, curr)=> {return prev + curr}, 0), 2000, 4000]} budgetOptions={budgetOverview}/>
        <BudgetModal currentMonth={new Date().toLocaleString("en-US", { month: "long" })} onsubmit={setBudgetOverview}/>
        </>
        : <LoginForm loggedIn={(value)=>setIsLoggedIn(value)}/>
        }
    </>
  )
}

export default App
