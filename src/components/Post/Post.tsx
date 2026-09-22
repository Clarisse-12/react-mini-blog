import "./Post.css"
import {memo} from "react";
import withLogger from "../../hoc/withLogger";
import type { Post as PostType } from '../../types/Post';

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
    const preview = post.content.split(" ").slice(0, 12).join(" ") + "...";
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    const isNew = post.date === today;
  return (
    <article className={post.author === "janvier" ? "post featured" : "post"}>
      {isNew && <span className="new-badge">New Post</span>}
      <h3>{post.title}</h3>
      <p className="author">By {post.author}</p>
      <p>{preview}</p>
      <small
      style={{
        fontSize: "14px",
        fontStyle: "italic",
        }}
        >
            {post.date}</small>
    </article>
  );
}

export const optimizedPost = memo(Post);
export default withLogger(optimizedPost, "Post");