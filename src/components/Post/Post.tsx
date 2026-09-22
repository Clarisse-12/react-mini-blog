import type { Post as PostType } from '../../types/Post';

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>By {post.author}</p>
      <p>{post.content}</p>
      <small>{post.date}</small>
    </article>
  );
}

export default Post;