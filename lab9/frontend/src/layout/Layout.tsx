import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
