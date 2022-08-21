import logo from './logo.svg';
import './App.css';
import ListComputers from './components/Liscomputers';
import AddComputer from './components/addComputer';

function App() {
  return (
    <div className="App">
      <ListComputers/>
      <AddComputer />
    </div>
  );
}

export default App;
