
import './App.css';
import PasswordGate from './component/pages/PasswordGate';
import Landing from './component/pages/Landing';
import MapStory from './component/pages/MapStory';
import Midnight from './component/pages/Midnight';
import YearReview from './component/pages/YearReview';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PasswordGate />} />
        <Route path="/welcome" element={<Landing />} />
        <Route path="/distance" element={<MapStory />} />
        <Route path="/memories" element={<YearReview />} />
        <Route path="/midnight" element={<Midnight />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
