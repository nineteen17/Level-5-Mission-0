const Image = ({ data }) => {
  console.log(data);
  return (
    <div className="Home__Relative">
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img className="Relative__Image" src={data.urls.small} alt={data.alt_description} />
      </a>
      <button
    
      >
        Add to Collection
      </button>
    </div>
  );
};

export default Image;
