import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AllTasks from './components/AllTasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import AddTask from './components/AddTask';
import EditTask from './components/Edit';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header title="Task Manager" />
    
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/allTasks" element={<AllTasks/>} exact/>
        <Route path="/addTask" element={<AddTask/>} exact/>
        <Route path="/edit" element={<EditTask/>} exact/>
       </Routes>
      </Router>
    </>
  );
}

export default App;
