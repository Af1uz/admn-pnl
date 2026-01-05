import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <h1>Admin</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">Products</NavLink>
        </li>
        <li>
          <NavLink to="/about">Usrers</NavLink>
        </li>
      </ul>
    </>
  );
};

export default SideBar;
