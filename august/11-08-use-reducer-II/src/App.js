import "./App.css";
import React, { useReducer, useEffect } from "react";
import logo from "./birdy.png";
import gezwitscher from "./gezwitscher.js";
import Post from "./components/Post/Post";
import CreatePost from "./components/CreatePost/CreatePost";

const initState = {
  posts: gezwitscher,
  user: {
    name: "Saby-Gaby",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "createNewPost":
      const postsUpdated = [action.payload, ...state.posts];
      return {
        ...state,
        posts: postsUpdated,
      };
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="twitter-blue">Zwitscher</h1>
      <CreatePost
        dispatch={dispatch}
        user={state.user}
      />
      <h2>Posts</h2>
      {
        state.posts.map((post, i) => {
          return (
            <Post key={i} post={post} />
          )
        })
      }
    </div>
  );
}

export default App;
