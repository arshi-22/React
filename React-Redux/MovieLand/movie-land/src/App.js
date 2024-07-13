import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/movies/:imdbID" element={<MovieDetails />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
