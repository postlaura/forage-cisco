import react_logo from './assets/react_logo.svg';
import waiting_logo from './assets/waiting_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={waiting_logo} className="App-logo" alt="logo" />
        <p>
          Waiting for more instructions...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
