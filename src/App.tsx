import 'bootstrap/dist/css/bootstrap.css'
import ExpenceList from './Components/ExpenceList'
import { useState } from 'react'
function App() {

  const [expenses,setExpenses]=useState( [
    {id:1 , description:"ghjgjhfsg", amount:10 , category:"sjgliuusd" },
    {id:2 , description:"ghjadgjhg", amount:10 , category:"sjgnggsd" },
    {id:3 , description:"ghgfjgjhg", amount:10 , category:"sjgsdsd" },
    {id:4 , description:"ghjgutjhg", amount:10 , category:"sjgsdsd" }
  ]);


  return (
    <div>
      <ExpenceList expenses={expenses} onDelete={(id)=>setExpenses(expenses.filter(e=>e.id!=id))}/>
    </div>
)
}

export default App
