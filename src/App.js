import './App.css';
import SearchBar from './components/SearchBar';
import Car from './components/Car';
import Cars from './components/Cars';

import "./App.css"
function App() {
  return (
    <div className="app">
       <div>
       <SearchBar></SearchBar>
       </div>
       <div>
       <Cars></Cars>
       </div>
    </div>
  );
}

export default App;
