import React from 'react'
// import Navbar from './components/navbar/navbar'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/orders/Orders'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path = "/add" element={<Add/>}/>
          <Route path = "/list" element={<List/>}/>
          <Route path = "/orders" element={<Orders/>}/>

        </Routes>
      </div>

      
    </div>
  )
}

export default App
