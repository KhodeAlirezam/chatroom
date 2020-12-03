import "./Header.css";

const Header = (props) => {
  return (
    <div className="Header">
      <div className="burger">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default Header;
