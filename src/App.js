import logo from './logo.svg';
import './App.css';
import TaskComponentLayout from './components/TaskComponentLayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Interview Task using React
        </h1>
        <p>For L4 Application Support Lead role at Keibra LTD</p>
        <TaskComponentLayout />
      </header>
    </div>
  );
}

export default App;
