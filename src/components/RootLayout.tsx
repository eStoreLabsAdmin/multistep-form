import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">User List</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create User</NavLink>
            </li>
            <li>
              <NavLink to="/edit">Edit User</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
