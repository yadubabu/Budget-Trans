import React,{useState,useCallback} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { AuthContext } from './shared/context/auth-context';

interface Action{
  isLogin:boolean;
  login:()=>void;
  logout:()=>void;
}

function App() {
  const [isLogin,setIsLogin]=useState(false);
  
// const login=()=>{
//   setIsLogin(true);
// }
// const logout=()=>{
//   setIsLogin(false);
// }
  
    return (
      <AuthContext.Provider value={{isLogin:isLogin}}>
        <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>

        </Routes>
      </Router>
      </AuthContext.Provider>
      
  );
}

export default App;
