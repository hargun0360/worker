import "./App.css"
import Navbar from "./Components/Navbar";
import Categories from "./Pages/Categories";
import WorkersInfo from "./Pages/WorkersInfo";
import { Routes, Route } from 'react-router-dom'
import Workerside from "./workerside/Workerside";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
        <Route exact path="/worker" element={
           <div className="" style={{overflowX:"hidden"}}>
             <WorkersInfo />
           </div>
         } />
        <Route exact path="/" element={
          <div className="mt-5 py-5" style={{overflowX:"hidden"}}>
          <Categories />
        </div>
        } />
        <Route exact path="/dashboard" element={
          <div  style={{overflowX:"hidden"}}>
          <Workerside />
        </div>
        } />
      </Routes>
    </div>
  );
      
}

export default App;
