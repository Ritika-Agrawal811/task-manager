import { Routes, Route } from "react-router-dom";
import RegisterForm from "./pages/registerForm/RegisterForm";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="user" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
