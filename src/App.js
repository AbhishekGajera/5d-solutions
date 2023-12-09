import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainLayout } from './component/MainLayout';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Moment from './component/Moment';
import Signup from './component/Signup';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" exact element={<MainLayout component={<Dashboard />} />} />
      <Route path="/create-moment" exact element={<MainLayout component={<Moment />} />} />
      <Route path="/signup" exact element={<Signup />} />

    </Routes>

  </div>
  );
}

export default App;
