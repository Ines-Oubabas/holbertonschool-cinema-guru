import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./navigation.css";
import Activity from "../Activity";

function SideBar() {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const selected = location.pathname.includes("/favorites")
    ? "favorites"
    : location.pathname.includes("/watchlater")
    ? "watchlater"
    : "home";

  const setPage = (pageName) => {
    if (pageName === "home") navigate("/home");
    if (pageName === "favorites") navigate("/favorites");
    if (pageName === "watchlater") navigate("/watchlater");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) return;

    axios
      .get("http://localhost:8000/api/activity/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setActivities(response.data || []);
      })
      .catch((error) => {
        console.error("Activity request failed:", error);
      });
  }, []);

  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        <li
          className={selected === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          Home
        </li>

        <li
          className={selected === "favorites" ? "active" : ""}
          onClick={() => setPage("favorites")}
        >
          Favorites
        </li>

        <li
          className={selected === "watchlater" ? "active" : ""}
          onClick={() => setPage("watchlater")}
        >
          Watch Later
        </li>
      </ul>

      <div className="sidebar-activities">
        <h3>Latest Activities</h3>
        <ul>
          {activities.slice(0, 10).map((activity, index) => (
            <Activity key={activity.id || index} activity={activity} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;