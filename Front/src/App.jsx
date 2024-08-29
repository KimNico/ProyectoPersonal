import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Saved } from './views/Saved';
import { Login } from './views/Login';
import { JobDetail } from './views/JobDetail';
import { Signup } from './views/SignUp';
import { Profile } from './views/Profile'; 
import { CrearPublicacion } from './views/CrearPublicacion';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/publicacion/:id' element={<JobDetail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/saved' element={<Saved />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='/crearPublicacion' element={<CrearPublicacion/>} /> 

    </Routes>
  );
}

export default App;
