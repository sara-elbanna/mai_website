import './App.scss';
import Header from './containers/Header/header';
import Home from './containers/Home/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import About from './containers/About';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          {/* <Route path="/blog/:slug">
            <BlogPost />
          </Route> */}
        </Routes>
      </Router>
    </div>
    // <div className="App">
    //   
    //   <Home/>
    // </div>
  );
}

export default App;
