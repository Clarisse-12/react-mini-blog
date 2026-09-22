import "./Post.css"
import {memo} from "react";
import type { Post as PostType } from '../../types/Post';

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
    const preview = post.content.split("").slice(0,12).join(" ") + "...";
  return (
    <article className={post.author === "janvier" ? "post featured" : "post"}>
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

export default memo(Post);