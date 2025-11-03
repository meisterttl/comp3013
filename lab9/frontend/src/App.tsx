import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import Home from "./Home";
import { About } from "./About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
