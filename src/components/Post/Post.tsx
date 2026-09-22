import "./Post.css"
import type { Post as PostType } from '../../types/Post';

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
    const preview = post.content.split("").slice(0,12).join(" ") + "...";
  return (
    <article>
      <h2>{post.title}</h2>
      <p>By {post.author}</p>
      <p>{post.content}</p>
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

export default Post;