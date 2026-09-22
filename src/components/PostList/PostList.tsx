import "./PostList.css"
import Post from '../Post/Post';
import type { Post as PostType } from '../../types/Post';

function PostList() {
    const posts: PostType[] = [
        {
            id: '1',
            title: 'Understanding React Hooks',
            author: 'janvier',
            content: 'React Hooks are a powerful feature that allows you to use state and other React features without writing a class.',
            date: '2023-01-01',
        },

        {
            id: '2',
            title: 'A Guide to TypeScript', 
            author: 'cyiza',
            content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers optional static typing, classes, and interfaces.',
            date: '2023-02-15',
        },

        {
            id: '3',
            title: 'Building a REST API with Node.js',
            author: 'emmy',
            content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to run JavaScript code on the server side.',
            date: '2023-03-20',
        }
    ];

    return (
        <section>
            <h2>Recent Posts</h2>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </section>
    );
}

export default PostList;