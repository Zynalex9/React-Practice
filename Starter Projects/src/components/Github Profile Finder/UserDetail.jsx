import React from "react";

const UserDetail = ({ user }) => {
  const {
    name,
    login,
    bio,
    avatar_url,
    html_url,
    public_repos,
    followers,
    following,
  } = user;
  return (
    <div className="user-container">
      <div className="lef">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <img src={avatar_url} alt={name} />
        </a>
      </div>
      <div className="right">
        <a href={html_url} target="_blank" rel="noopener noreferrer" >
          <h2>Name: {name}</h2>
        </a>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <h2>Username: {login}</h2>
        </a>
        <p>
          <div className="bio">
            {bio ? (
              <>
                <b>Bio:</b> {bio}
              </>
            ) : (
              "No Bio"
            )}
          </div>
        </p>
        <div className="other">
          <p>Repos: {public_repos}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
