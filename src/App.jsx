
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css'; // 引入全局样式

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* style probieren */}
          <button className="btn">Click me</button>
          <button className="btn btn-primary">Main button</button>
          <button className="btn btn-secondary">Second button</button>
          <input type="text" className=" input-error" placeholder="Content" />
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Title</h2>
              <p>Text</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Confirm</button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
