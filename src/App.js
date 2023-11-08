import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainLayout } from './component/MainLayout';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Form from './component/Form'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" exact element={<MainLayout component={<Dashboard />} />} />
      <Route path="/form" exact element={<MainLayout component={<Form />} />} />
    </Routes>

  </div>
  );
}

export default App;
