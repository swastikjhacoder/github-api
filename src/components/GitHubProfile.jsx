import React from "react";
import { FaGithub } from "react-icons/fa";

const GitHubProfile = ({ profile, repositories }) => {
  console.log(repositories);
  return (
    <>
      <div className="github-profile">
        <div className="avatar">
          <img src={profile.avatar_url} alt="profile" />
        </div>
        <div className="github-user">
          <h3>Username: {profile.login}</h3>
          <span>{profile.bio}</span>
          <h4>Public Repos: {profile.public_repos}</h4>
        </div>
      </div>
      <div className="repositories">
        {repositories &&
          repositories.map((repo, index) => (
            <div className="card" style={{ height: "max-content" }} key={index}>
              <h2 style={{ alignItems: "center" }}>
                Repository:{" "}
                <a href={repo.html_url} className="repo-name" target="_blank">
                  <FaGithub /> {repo.name}
                </a>
              </h2>
              <p>Stars: {repo.stargazers_count}</p>
              <p>Description: {repo.description}</p>
              <p>Language: { repo.language }</p>
              <p>Score: { repo.score}</p>
              <p>Watchers count: {repo.watchers_count}</p>
              <p>Full Name: {repo.full_name}</p>
              <p>Created_At: {repo.created_at}</p>
              <p>Updated_At: {repo.updated_at}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default GitHubProfile;
