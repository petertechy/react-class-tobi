const ProductCard = ({ title, age, style, likes, onLike }) => {
  console.log({ title, age, style, likes });

  return (
    <div className="mx-auto col-7 rounded my-3 p-4">
      <h1 className={style}>Name: {title}</h1>
      <h3 className={style}>Age: {age}</h3>
      <h4 className={style}>Likes: {likes}</h4>
      <button className="btn btn-success" onClick={onLike}>
        Like Button
      </button>
    </div>
  );
};

export default ProductCard;
