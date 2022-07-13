import "./Post.scss";
import gezwitscher from "../../../gezwitscher.js";

function Post(props) {
  
  return(
    <div className="post">
      <p>
        <b>{props.post.user}</b>
      </p>
      <p>{props.post.content}</p>
      <p>{props.post.date}</p>
    </div>
  );
}

export default Post;
