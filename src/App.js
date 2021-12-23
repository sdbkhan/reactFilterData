//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Filter from './components/Filter';

function App() {
  return (
    <div className="App-header">
     <BrowserRouter>
     <Routes>
      <Route path="/filter" element={<Filter />}/>
     </Routes>
    </BrowserRouter>
      
    </div>
    
  );
}

export default App;
