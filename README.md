# Dev Insights Mini Blog

## 1. Project Overview

Dev Insights Mini Blog is an internal mini blog platform for employees to share quick web development tips, insights, and updates. The current interface displays a small set of recent posts with their titles, authors, content previews, and dates.

## 2. Features

- Dev Insights branding in the header.
- A `New Post` navigation link in the header. The current link points to `#`; no post creation form is implemented.
- A `Recent Posts` section containing the posts defined in `PostList.tsx`.
- Reusable `Post` and `PostList` functional components.
- A TypeScript `Post` interface for post data.
- Post content previews made from the first 12 words of each post's content.
- Display of each post's date and author.
- Conditional styling for the post authored by `janvier`.
- A `New Post` badge when a post's date matches the current date.
- A horizontal, responsive post layout using CSS Flexbox with wrapping.
- `React.memo` optimization through the exported `optimizedPost` component.
- A `withLogger` Higher-Order Component that logs component mount and unmount events.
- React `StrictMode` enabled in `main.tsx`.

## 3. Technologies Used

- React 19
- TypeScript
- Vite
- HTML and CSS
- CSS Flexbox
- Oxlint for linting

## 4. Project Structure

```text
react-mini-blog/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── Post/
│   │   │   ├── Post.tsx
│   │   │   └── Post.css
│   │   └── PostList/
│   │       ├── PostList.tsx
│   │       └── PostList.css
│   ├── hoc/
│   │   └── withLogger.tsx
│   ├── types/
│   │   └── Post.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 5. Installation

1. Clone or download the project and open its root folder in a terminal.
2. Install the dependencies:

	 ```bash
	 npm install
	 ```

## 6. Running the Application

Start the Vite development server with:

```bash
npm run dev
```

Open the local URL printed by Vite in a browser.

## 7. Testing

There is no automated test framework or test suite in this project. The application can be checked manually in the browser by confirming that the header, recent posts, previews, authors, dates, conditional styling, and current-day badge render correctly.

The available project checks are:

```bash
npm run lint
npm run build
```

`npm run lint` runs Oxlint, while `npm run build` runs the TypeScript build check and creates a Vite production build.

## 8. Component Design

### Header component

`Header` renders the `Dev Insights` heading and the `New Post` navigation link. Its presentation is defined in `Header.css`.

### PostList component

`PostList` defines the current post data as a `PostType[]`, renders the `Recent Posts` heading, and maps each post to a `Post` component using the post ID as its key.

### Post component

`Post` receives one post through its typed `post` prop. It creates the content preview, checks whether the post is from today, conditionally displays the badge, and applies featured styling for the author `janvier`.

### App component

`App` composes the page by rendering `Header` followed by `PostList` inside the main content area.

Functional components were used because this interface is composed of focused, reusable pieces that render from props and local logic. Modern React features such as hooks, `React.memo`, and functional composition can be used directly without class component lifecycle methods.

## 9. TypeScript

The `Post` interface in `src/types/Post.ts` defines the required fields for a post:

```ts
interface Post {
	id: string;
	title: string;
	author: string;
	content: string;
	date: string;
}
```

`PostList` uses `PostType[]` for its posts array, and the `Post` component uses a `PostProps` interface to require a correctly shaped `post` prop. This provides type checking for the data passed between components.

## 10. Styling

The project uses external CSS files for the shared application, header, post, and post-list styles. This keeps presentation separate from most component markup.

Inline styling is used for the post date in `Post.tsx` to set its font size and italic style. Conditional styling is applied by changing the post class when the author is `janvier`, and the `New Post` badge is rendered conditionally. The post list uses Flexbox with `flex-direction: row`, `flex-wrap: wrap`, and a gap so posts can be arranged horizontally and adapt to available space.

## 11. Conditional Rendering and Styling

In `Post.tsx`, today's date is generated in `YYYY-MM-DD` format:

```ts
const today = new Date().toISOString().split("T")[0];
const isNew = post.date === today;
```

The badge is rendered only when `isNew` is true:

```tsx
{isNew && <span className="new-badge">New Post</span>}
```

The post authored by `janvier` receives the `featured` class, while other posts receive the normal `post` class:

```tsx
className={post.author === "janvier" ? "post featured" : "post"}
```

## 12. Optimization

The component is wrapped with `memo` and exported as `optimizedPost`:

```ts
export const optimizedPost = memo(Post);
```

`React.memo` can help avoid re-rendering the post component when its props have not changed. When the post list is rendered, `key={post.id}` gives every item a stable, unique key so React can identify list items and update them efficiently.

## 13. Higher-Order Component

An HOC is a function that takes a component and returns an enhanced component. The `withLogger` HOC accepts a component and a component name, then returns a wrapper that renders the original component.

Inside the wrapper, `useEffect` logs `Component Post mounted` when the wrapped component mounts. Its cleanup function logs `Component Post unmounted` when it unmounts. The HOC is applied to `optimizedPost` in `Post.tsx`:

```ts
export default withLogger(optimizedPost, "Post");
```

## 14. Challenges and Solutions

The implementation organizes the interface into separate header, list, and post components so each part has a clear responsibility. The `Post` interface and typed props help keep the post data consistent. Conditional classes and rendering handle the featured author and current-day badge, while Flexbox allows the post cards to sit in a horizontal layout and wrap when needed. `React.memo` and the `withLogger` wrapper also require understanding how components can be optimized and enhanced without changing their main rendering logic.

## 15. Learning Reflection

This project helped me understand how React functional components can be combined to build a small interface from reusable parts. I learned how to pass typed props with TypeScript, keep post data consistent with an interface, and use CSS files and Flexbox to control the layout.

I also learned how conditional rendering can show information such as the current-day badge, while conditional classes can change a post's appearance. Using `React.memo` introduced a simple optimization technique, and creating `withLogger` helped me understand how Higher-Order Components can add behavior such as mount and unmount logging around another component.

## 16. External Libraries / Packages

The packages in `package.json` are:

| Package | Type | Purpose |
| --- | --- | --- |
| `react` | Dependency | Provides React components and React APIs. |
| `react-dom` | Dependency | Connects React to the browser DOM. |
| `@types/node` | Development dependency | Provides TypeScript types for Node.js APIs used by the tooling. |
| `@types/react` | Development dependency | Provides TypeScript types for React. |
| `@types/react-dom` | Development dependency | Provides TypeScript types for React DOM. |
| `@vitejs/plugin-react` | Development dependency | Enables React support in the Vite configuration. |
| `oxlint` | Development dependency | Runs the project's lint checks. |
| `typescript` | Development dependency | Performs TypeScript type checking and compilation support. |
| `vite` | Development dependency | Provides the development server and production build tooling. |

## 17. Author

Student: Clarisse Mukayiranga
