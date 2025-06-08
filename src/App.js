
import AllTasks from './components/AllTasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './style.css';


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
