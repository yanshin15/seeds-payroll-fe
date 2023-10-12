import { Link, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import logo from "./assets/seedslogo.jpg";

function App() {
  return (
    <div className="h-full">
      <nav className="w-full h-{10%} shadow-md px-6 py-2 flex justify-center bg-lightcream  ">
        <Link to="/">
          <img
            src={logo}
            alt=""
            loading="lazy"
            className="h-40 select-none pointer-events-none"
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
