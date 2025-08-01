import HomePage from "./components/Pages/Home";
import Detail from "./components/Pages/Detail";
import Menu from "./components/Pages/Menu";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col ">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/mangopomelosago"
            element={<Detail />}
          />
          <Route path="/menu" element={<Menu />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
