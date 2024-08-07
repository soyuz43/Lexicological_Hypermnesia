// Define the Header component
const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Instaflow</h1>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <a href="/">Home</a>
          </li>
          <li style={navItemStyle}>
            <a href="/about">About</a>
          </li>
          <li style={navItemStyle}>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Define some basic styles for the header
const headerStyle = {
  backgroundColor: "#00bbff",
  color: "white",
  padding: "10px 0",
  textAlign: "center",
};

const navListStyle = {
  listStyle: "none",
  padding: 0,
};

const navItemStyle = {
  display: "inline",
  margin: "0 10px",
};

export default Header;
