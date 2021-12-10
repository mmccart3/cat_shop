import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Catshop from './components/cat_shop';
import Basket from './components/basket';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom"


function App() {
  const faker = require('faker')  
  const [total,setTotal] = useState(0.00)
  const [catData, setCatData] = useState([""])
  const [to_buy, setTo_buy] = useState([])
  const [loading, setLoading] = useState(false)

    const [error, setError] = useState({
      error: false,
      message: ""
    })

  const getpic = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
      if (response.status !== 200){
        throw new Error("Not Working")
      }
      const data = await response.json()
      const newData = await fakerinfo(data)
      setCatData(newData)
      setLoading(false)
      } catch (error){
        setError({error: true, message: error.message})
      }
    }
  

  const fakerinfo = (data) =>{
    {data.map((data) => {
      data.name = faker.name.firstName()
      data.price = faker.commerce.price()
    })}
    return data
  }

  useEffect(()=> {
    getpic()
  }, [])

  // for (let index = 0; index < to_buy.length; index++) {
  //     setTotal(total + to_buy[index].price) 
  // }

  if(!catData){
    return null
  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>  
        <Routes>
          <Route path="/basket" element={<Basket to_buy={to_buy} setTo_buy={setTo_buy} total={total} setTotal={setTotal} />}/>
          <Route path="/" element={<Catshop catData={catData} to_buy={to_buy} setTo_buy={setTo_buy}/>}/>
        </Routes>
      </div>
    </Router>
   
  )
}
  

export default App;
