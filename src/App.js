import React from 'react';
import AllTasks from './components/AllTasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import AddTask from './components/AddTask';
import EditTask from './components/Edit';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './style.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<AllTasks/>} exact />
       </Routes>
      </Router>
    </>
  );
}

export default App;
