import { Link } from "react-router";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">about</Link>
    </div>
  );
}

