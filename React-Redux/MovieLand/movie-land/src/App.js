import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieListing from "./components/MovieListing/MovieListing";
import GPT from "./components/GPT/GPT";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/movies/:imdbID" element={<MovieDetails />} />
          <Route  element={<PageNotFound />} />
          <Route  path="/movies/openAI/askanything" element={<GPT/>}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
