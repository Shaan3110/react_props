import './App.css';
import Part1 from './components/Part1/Parent';
import Part2 from './components/Part2/Parent';
import Part3 from './components/Part3/Parent';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route exact path="/part1" element={<Part1/>} />
        <Route exact path="/part2" element={<Part2/>} />
        <Route exact path="/part3" element={<Part3/>} />
        <Route path="/" element={<h1>Website is live</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
