import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="main-container overflow-hidden ">
      <div className="nav-and-header-wrapper w-screen h-screen relative left-0 top-0">
        <Nav />
        <Header />
      </div>
      <About />
    </div>
  );
}

export default App;
