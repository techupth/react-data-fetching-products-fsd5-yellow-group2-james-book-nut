export default function Prouct(props) {
    const {id, name, price, image: imgSrc, description} = props.data;
    const deleteProduct = props.deleteProduct;
    return (
        <div className="product">
        <div className="product-preview">
          <img
            src={imgSrc}
            alt="some product"
            width="350"
            height="350"
          />
        </div>
        <div className="product-detail">
          <h1>Product name: {name}</h1>
          <h2>Product price: {price} Baht</h2>
          <p>Product description: {description}</p>
        </div>

        <button className="delete-button" onClick={() => deleteProduct(id)}>x</button>
      </div>
    )
}