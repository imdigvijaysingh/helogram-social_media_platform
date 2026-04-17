import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/CreatePost.css'

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios
      // .post("http://localhost:3000/api/create-post", formData)                          //development
      .post("https://onboard-social-media-app-1.onrender.com/api/create-post", formData)  //production
      .then((res) => {
        navigate("/feed");
      })
      .catch((err) => {
        console.log(err);
        alert("Error creating post");
      });
  };

  return (
    <div>
         
      <section className="create-post-section">
      
        <div className="heading-create-post">
          <h1>Create Post</h1>
        </div>

        <div className="create-post-form">
          <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept="image/*" />
            <input
              type="text"
              name="caption"
              placeholder="Write a caption for your post"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      
      </section>
    
    </div>
  );
};

export default CreatePost;
