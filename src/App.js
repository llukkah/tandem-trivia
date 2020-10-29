import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TandemLogo from './Images/TandemLogo.png';
import Home from './Components/Home.jsx'
import Questions from './Components/Questions.jsx'

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
        < Questions/>
      </div>
    </div>
  );
}

export default App;
