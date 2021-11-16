import "./App.css";
import axios from "axios";
import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import SearchBar from "./components/SearchBar";

function App() {
  const [userData, setUserData] = useState(null);

  const getUserData = (username) => {
    const baseUrl = "https://api.github.com/users/";
    axios.get(baseUrl + username).then((response) => {
      setUserData(response.data);
    });
  };

  return (
    <div className="app-container">
      <Header />
      <SearchBar getUserData={getUserData} />
      {userData && <Profile userData={userData} />}
    </div>
  );
}

export default App;
