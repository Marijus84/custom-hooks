function Header({ online = true }) {
  return <h1>Flower Bulb Activities {online || "(Offline)"}</h1>;
}

export default Header;
