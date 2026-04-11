import "./navigation.css";

function Header({ userUsername, setIsLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <div className="header">
      <h2>Welcome, {userUsername}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Header;