import NavBar from "./NavBar.js";
import Homepage from "./Homepage.js";
import './style.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className="App-header">
        <p>
          Hello Goldstream! This is the app.
        </p>
        <a
          href="https://github.com/riggja/Goldstream-App"
          target="_blank"
        >
          Here is the github
        </a>
      </section>
    </div>
  );
}

export default App;
