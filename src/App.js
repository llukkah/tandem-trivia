import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TandemLogo from './Images/TandemLogo.png';
import Home from './Components/Home.jsx'
import Questions from './Components/Questions.jsx'
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={TandemLogo} alt="logo" />
        <div className="tandem-trivia">
          <p className="tandem">
            TANDEM
          </p>
          <p className="trivia">
            TRIVIA
          </p>
        </div>
      </header>
      
      <div className="nav">
        <div className="links">
          <p>
            <Link 
              to="/home"
              className="about-link">
                About
            </Link>
          </p>
          <p>
            <Link 
              to="/question"
              className="start-link">
                Start
            </Link>
          </p>
        </div>
      </div>
    
    <Route exact path="/home" component={Home} />
    <Route exact path="/question" component={Questions} />
    </div>
  );
}

export default App;
