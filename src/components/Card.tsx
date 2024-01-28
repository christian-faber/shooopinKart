import "../styles/Card.css";

const Card = ({ id, name, price }) => {
  return (
    <div className="shop-card">
      <div className="card-content">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
