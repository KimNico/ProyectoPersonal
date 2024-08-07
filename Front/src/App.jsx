import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Saved } from './views/Saved';
import { Login } from './views/Login';
import { JobDetail } from './views/JobDetail';
import { Signup } from './views/SignUp';
import { Profile } from './views/Profile'; 

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/jobdetail/:id' element={<JobDetail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/saved' element={<Saved />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/profile' element={<Profile />} /> 
    </Routes>
  );
}

export default App;
