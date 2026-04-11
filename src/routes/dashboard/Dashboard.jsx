import "./dashboard.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";
import HomePage from "./HomePage";
import Favorites from "./Favorites";
import WatchLater from "./WatchLater";

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div className="dashboard-page">
        <Header
          userUsername={userUsername}
          setIsLoggedIn={setIsLoggedIn}
        />

        <div className="dashboard-content">
          <SideBar />

          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;