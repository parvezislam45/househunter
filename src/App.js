
import './App.css';
import Navbar from './Components/Home/Navbar';
import {Routes,Route}from 'react-router-dom'
import Signup from './Components/Pages/Signup';
import Login from './Components/Pages/Login';
import Admin from './Components/Dashboard/AdminDashboard/Admin';
import UserDashboard from './Components/Dashboard/UserDashboard/UserDashboard';
import Register from './Components/Pages/Register';
import Houses from './Components/Dashboard/AdminDashboard/Houses';
import AllUser from './Components/Dashboard/AdminDashboard/AllUser';
import Add from './Components/Dashboard/AdminDashboard/Add';
import AllProduct from './Components/Dashboard/AdminDashboard/AllProduct';
import Home from './Components/Home/Home';
import ViewAll from './Components/Home/ViewAll';
import Buy from './Components/Home/Buy';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/allProduct'element={<ViewAll/>}></Route>
        <Route path='/buy/:id'element={<Buy/>}></Route>
        <Route path='/signup' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/admin'element={<Admin/>}>
        <Route index element={<Houses/>}></Route>
        <Route path='users'element={<AllUser/>}></Route>
        <Route path='add'element={<Add/>}></Route>
        <Route path='all'element={<AllProduct/>}></Route>
        </Route>
        <Route path='/user'element={<UserDashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
