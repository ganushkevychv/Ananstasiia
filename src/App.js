import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import './App.css';

function App() {
  return (
    <Router>
   <div className="App">
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      </Routes>
    </div>
    </Router>


  );
}

export default App;
