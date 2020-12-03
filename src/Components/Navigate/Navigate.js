import { NavLink } from "react-router-dom";

const Navigate = () => {
  return (
    <ul>
      <li>
        <NavLink to="/contacts" exact>
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigate;
