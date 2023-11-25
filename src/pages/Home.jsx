import React, { useState } from "react";
import GitHubProfile from "../components/GitHubProfile";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [search, setSearch] = useState("");
  const [githubProfile, setGithubProfile] = useState({});
  const [repositories, setRepositories] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  const handleSearchByEnterKey = async () => {
    try {
      const profile = await fetch(`https://api.github.com/users/${search}`);
      const profileJson = await profile.json();
      const repositories = await fetch(profileJson.repos_url);
      const repoJson = await repositories.json();
      if (profileJson) {
        setGithubProfile(profileJson);
        setRepositories(repoJson);
      }
      setShowProfile(true);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="home-container">
      <div className="search-form">
        <div className="search-box">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search github user..."
            autoComplete
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (e.target.value.trim() === "") {
                  setShowProfile(false);
                } else {
                  handleSearchByEnterKey();
                }
              }
            }}
          />
          <div className="search-icon">
            <FaSearch onClick={handleSearchByEnterKey} />
          </div>
        </div>
      </div>
      {showProfile && (
        <div className="user-details">
          <GitHubProfile profile={githubProfile} repositories={repositories} />
        </div>
      )}
    </div>
  );
};

export default Home;
