function Content({ online = true }) {
  return (
    <figure style={{ filter: online || "grayscale(100%)" }}>
      <img src="src/assets/parade.png" />
      <figcaption>Parade</figcaption>
    </figure>
  );
}

export default Content;
