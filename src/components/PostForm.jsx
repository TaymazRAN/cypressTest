// src/components/PostForm.js
import React, { useState } from "react";
import axios from "axios";

function PostForm() {
  const [postData, setPostData] = useState({
    title: "",
    body: "",
    userId: 1, // Replace with a valid user ID
  });

  const handleSubmit = async (e) => {
    try {
      e.preventdefault();
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        postData
      );
      console.log("Response:", response.data);
      // Handle success, display a success message, or navigate to another page
    } catch (error) {
      console.error("Error:", error);
      // Handle error and display an error message
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={postData.body}
          onChange={(e) => setPostData({ ...postData, body: e.target.value })}
        />
        <button data-test="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostForm;
