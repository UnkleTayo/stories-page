export default function Title({ title, index, setRotation, setIndex }) {
  return (
    <div
      className="title-item"
      onMouseEnter={() => setRotation(index)}
      onMouseLeave={() => setIndex(-1)}
    >
      <h1 className="title">{title}</h1>
    </div>
  );
}
