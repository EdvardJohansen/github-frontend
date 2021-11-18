import React, { useEffect, useState } from "react";
import "../css/Profile.css";
import LocationIcon from "../images/geo-alt.svg";
import LinkIcon from "../images/link-45deg.svg";
import TwitterIcon from "../images/twitter.svg";
import BuildingIcon from "../images/building.svg";

const Profile = ({ userData }) => {
  const [formattedDate, setFormattedDate] = useState(null);
  const [createdDate, setCreatedDate] = useState(null);

  useEffect(() => {
    setFormattedDate(Date.parse(userData.created_at));

    const dateObject = new Date(formattedDate);
    const dateDay = dateObject.toLocaleString("en-US", { day: "numeric" });
    const dateMonth = dateObject.toLocaleString("en-US", { month: "long" });
    const dateYear = dateObject.toLocaleString("en-US", { year: "numeric" });
    setCreatedDate(dateDay + " " + dateMonth + " " + dateYear);
  });

  return (
    <div className="profile-container">
      <div className="profile-summary">
        <div className="summary-image-container">
          <img
            className="summary-image"
            src={userData.avatar_url}
            alt="Profile pic"
          />
        </div>
        <div className="summary-details-container">
          <p className="summary-title">{userData.name}</p>
          <a className="summary-username" href={userData.html_url}>
            @{userData.login}
          </a>
          <p className="summary-joined-date">Joined {createdDate}</p>
        </div>
      </div>

      <div className="profile-description-container">
        {!userData.bio && <p>What a monkey</p>}
        {userData.bio && <p>{userData.bio}</p>}
      </div>

      <div className="stats-container">
        <div className="stats-group">
          <h2 className="stats-group--title">Repos</h2>
          <p className="stats-group--stat">
            {!userData.public_repos && <p>0</p>}
            {userData.public_repos && <p>{userData.public_repos}</p>}
          </p>
        </div>

        <div className="stats-group">
          <h2 className="stats-group--title">Followers</h2>
          <p className="stats-group--stat">
            {!userData.followers && <p></p>}
            {userData.followers && <p>{userData.followers}</p>}
          </p>
        </div>

        <div className="stats-group">
          <h2 className="stats-group--title">Following</h2>
          <p className="stats-group--stat">
            {!userData.following && <p></p>}
            {userData.following && <p>{userData.following}</p>}
          </p>
        </div>
      </div>

      <div className="socials-container">
        <div className="socials-group-location-link">
          <div className="socials-group">
            <img src={LocationIcon} alt="Social icon"></img>
            <a href="/">
              {!userData.location && <p>Not Available</p>}
              {userData.location && <p>{userData.location}</p>}
            </a>
          </div>

          <div className="socials-group">
            <img src={LinkIcon} alt="Social icon"></img>
            <a className="socials-group-link" href="/">
              {!userData.location && <a>Not Available</a>}
              {userData.location && <a>{userData.location}</a>}
            </a>
          </div>
        </div>

        <div className="socials-group-twitter-building">
          <div className="socials-group">
            <img
              className="socials-group-twitter-img"
              src={TwitterIcon}
              alt="Social icon"
            ></img>
            <a href="/">
              {!userData.twitter_username && <a>Not Available</a>}
              {userData.twitter_username && <a>{userData.twitter_username}</a>}
            </a>
          </div>

          <div className="socials-group">
            <img
              className="socials-group-building-img"
              src={BuildingIcon}
              alt="Social icon"
            ></img>
            <a className="socials-group-building" href="/">
              {!userData.location && <p>Not Available</p>}
              {userData.location && <p>{userData.location}</p>}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
