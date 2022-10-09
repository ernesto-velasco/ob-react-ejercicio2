import logo from './logo.svg';
import './App.css';
import Clock from "./components/ComponenteFuncional";
import ClockClase from "./components/ComponenteClase";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClockClase></ClockClase> */}
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
