import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header.jsx'
import Home from './Components/Home.jsx'
import Nav from './Components/Nav.jsx'
import About from './Components/About.jsx'
import Questions from './Components/Questions.jsx'
import Footer from './Components/Footer.jsx'
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/question" component={Questions} />
      <Footer />
    </div>
  );
}

export default App;
