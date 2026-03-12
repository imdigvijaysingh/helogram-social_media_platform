import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/Feed.css";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Profile1 from "../assets/profile.jpg";
import Profile2 from "../assets/virat.jpg";
import Profile3 from "../assets/roman.jpg";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: null,
      image: null,
      caption: null,
    },
  ]);

  const [like, setLike] = useState("fa-regular fa-heart");

  const likePost = () => {
    setLike("fa-solid fa-heart");
  };

  const [save, setSave] = useState("fa-regular fa-bookmark");

  const savePost = () => {
    setSave("fa-solid fa-bookmark");
  };

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="cta">
          <Link to="/create-post">
            <i className="fa-regular fa-square-plus"></i>
          </Link>
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-paper-plane"></i>
        </div>
      </div>

      <div className="feed-content">
        <div className="footer">
          <i className="fa-solid fa-house"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-play"></i>
          <img src={Profile1} alt="" />
        </div>
        <div className="main-content">
          <div className="stories">
            <div className="story">
              <div className="photo">
                <img src={Profile1} alt="" />
              </div>
              <div className="name">Your Story</div>
            </div>
            <div className="story">
              <div className="photo">
                <img src={Profile2} alt="" />
              </div>
              <div className="name">virat.kohli</div>
            </div>
            <div className="story">
              <div className="photo">
                <img src={Profile3} alt="" />
              </div>
              <div className="name">romanreigns</div>
            </div>
          </div>

          <div className="feed-section">
            {posts.length > 0 ? (
              posts.map((post) => {
                return (
                  <div>
                    <div key={post._id} className="post-card">
                      <div className="post-card-header">
                        <div className="post-card-profile">
                          <img src={Profile1} alt="" />
                        </div>
                        <div className="username">digvijaypundir</div>
                      </div>
                      <img src={post.image} alt={post.caption} />
                      <div>
                        <div className="post-card-cta">
                          <div className="cta-one">
                            <i onClick={likePost} className={like}></i>
                            <i className="fa-regular fa-comment"></i>
                            <i className="fa-solid fa-paper-plane"></i>
                          </div>
                          <div className="cta-two">
                            <i onClick={savePost} className={save}></i>
                          </div>
                        </div>
                        <div>
                          <p>{post.caption}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No posts available</h1>
            )}
          </div>
        </div>
        <div className="footer-section"></div>
      </div>
    </div>
  );
};

export default Feed;
