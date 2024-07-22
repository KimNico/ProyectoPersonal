import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Saved } from './views/Saved';
import { Login } from './views/Login';
import { JobDetail } from './views/JobDetail';
function App() {
  return (
   <Routes>
    <Route path ='/' element={<Home/>}/>
    <Route path ='/jobdetail/:id' element={<JobDetail/>}/>
    <Route path ='/login' element={<Login/>}/>
    <Route path ='/saved' element={<Saved/>}/>

   </Routes>
  );
}

export default App;
