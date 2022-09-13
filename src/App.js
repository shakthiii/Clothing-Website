import Home from "./routes/Home/homeRoute";

import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/navBar/NavBar";
import Mens from "./routes/Mens/Mens";
import SignIn from "./routes/sign-in/Sign-in";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="men" element={<Mens />} />
      </Route>
    </Routes>
  );
}

// <h1>hello loneWolf</h1>
export default App;
