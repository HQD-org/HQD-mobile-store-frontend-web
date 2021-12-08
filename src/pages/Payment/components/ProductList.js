import React from "react";
import { useSelector } from "react-redux";
import "../../../common/css/Cart.Style.css";

const ProductList = () => {
  const itemsInCart = useSelector((state) => state.cart.items);
  const dataProduct = useSelector((state) => state.cart.dataProduct);

  return (
    <div className="col">
      <ul className="listCart">
        {itemsInCart.map((p) => (
          <li key={p.idProduct}>
            <hr />
            <div className="row">
              <div className="col-3">
                <img src={`${p.image}`} alt="" width="80%" height="100px" />
              </div>
              <div className="col-4">
                <div>
                  <h6>
                    {dataProduct.find((item) => item._id === p.idProduct).name}
                  </h6>
                  <p>{p.color}</p>
                </div>
              </div>
              <div className="col-5 price-quantity">
                <div>
                  <h6 style={{ textAlign: "end" }}>{`${p.price}₫`}</h6>
                  <p>x1</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
