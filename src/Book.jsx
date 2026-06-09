export default function Book({ img, title, authur, number }) {
  return (
    <>
      <article className="book">
        <img src={img} alt={title} />
        <h2>{title} </h2>
        <h4>{authur} </h4> <span className="number">{`# ${number + 1}`} </span>
        {/* <button onClick={}></button> */}
      </article>
    </>
  );
}
