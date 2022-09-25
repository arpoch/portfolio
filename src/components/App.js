import './App.css';
import NavBar from './NavBar';
// import SocialBar from './SocialBar';
import Home from './Home';
import Skills from './Skills';
import Work from './Work';

function App() {
  return (
    <div className="App">
      <div class="layout">
        <NavBar />
        <main id="content">
           {/* <Home /> */}
          {/* <Skills /> */}
          <Work />
        </main>
      </div>
    </div>
  );
}

export default App;
