const NavLink = (props) => {
  return (
    <li onClick={props.close}>
      <a href={props.tag}>{props.link}</a>
    </li>
  );
};

export default NavLink;
