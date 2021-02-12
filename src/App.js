import './App.css';
import SearchBar from './components/SearchBar';
import Car from './components/Car';
import "./App.css"
function App() {
  return (
    <div className="app">
       <div>
       <SearchBar></SearchBar>
       </div>
       <div>
       <Car></Car>
       </div>
    </div>
  );
}

export default App;
