export const ProjectHead = ({ meta, isProject }) => {
  return (
    <>
      {meta && (
        <>
          <h1 className={isProject ? "great-title" : null}>{meta.title}</h1>
          <div className="details">
            {isProject ? null : <p>{meta.description}</p>}
            <span>{meta.date}</span>
            <span role="img" aria-label="one coffee">
              ☕ {meta.readTime + " min read"}
            </span>
          </div>
        </>
      )}
    </>
  );
};
