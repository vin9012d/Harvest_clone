import { Link, NavLink } from "react-router-dom";

const links = [
  {
    to: "/report",
    title: "Clients"
  },
  {
    to: "/report/a",
    title: "Projects"
  },
  {
    to: "/report/b",
    title: "Tasks"
  },
  {
    to: "/report/c",
    title: "Team"
  }
];

// NavLinks
const baseStyle = {
  color: "black",
    textDecoration: "none",
    cursor:"pointer"
  
  
};

const activeStyle = {
  color: "red",
    textDecoration: "underline",
    cursor:"pointer"
};

function Mininavbar() {
   
 
    return (
        
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      {links.map((item) => (
        // activeStyle, or activeClass
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={item.to}
          key={item.to}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Mininavbar;
