import './App.css';
import TandemLogo from './Images/TandemLogo.png';
import Home from './Components/Home.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={TandemLogo} className="App-logo" alt="logo" />
        <p>
          Tandem Trivia
        </p>
      </header>
      <div>
        < Home />
      </div>
    </div>
  );
}

export default App;
