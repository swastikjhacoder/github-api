import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import GitHubProfile from "../components/GitHubProfile";

const Home = () => {
  const [search, setSearch] = useState("");
  const [githubProfile, setGithubProfile] = useState({});
  const [repositories, setRepositories] = useState([]);
  const [showProfile, setShowProfile] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        <input
          type="text"
          required
          value={search}
          placeholder="search user of GitHub..."
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
        <button type="submit" onClick={handleSubmit}>
          <IoMdSend />
        </button>
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
