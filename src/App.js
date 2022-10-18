import Container from "./components/Container/Container";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Favourite from "./components/Favourite/Favourite";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <main>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
