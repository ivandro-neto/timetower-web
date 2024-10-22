import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Leaderboard } from "./pages/LeaderBoard";
import { AuthPage } from "./pages/authPage";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/register" element={<AuthPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
