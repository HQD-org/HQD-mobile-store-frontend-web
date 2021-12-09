import React from "react";
import { useSelector } from "react-redux";
import SameProduct from "./SameProduct";

const AnotherProduct = () => {
  const products = useSelector((state) => state.product.list);
  const product = useSelector((state) => state.product.productDetail);

  return (
    <div>
      <div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="row row-cols-1 row-cols-md-5 g-1 group-promotion mb-3">
            {products.map((item) => {
              if (item._id === product._id) return null;
              const color = item.model.color[0];
              const price = item.color.find((c) => c.name === color.name).price;
              return (
                <SameProduct
                  key={`same-product${item._id}`}
                  img={color.images[0]}
                  price={price}
                  item={item}
                />
              );
            })}
          </div>
          <div className="row mb-3 mt-2" style={{ textAlign: "center" }}>
            <div>
              <button type="button" className="btnAnotherProduct">
                Khám phá các sản phẩm khác
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherProduct;
