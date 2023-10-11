import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import logo from "./assets/seedslogo.jpg";

function App() {
  return (
    <div className="h-screen">
      <nav className="w-full h-auto shadow-md px-4 py-2 rounded-lg bg-lightcream lg:block md:block sm:flex sm:justify-center">
        <Link to="/">
          <img
            src={logo}
            alt=""
            loading="lazy"
            className="h-20 bg-transparent w-auto"
          />
        </Link>
      </nav>

      <Routes>
        <Route index path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/edit" element={<EditPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
