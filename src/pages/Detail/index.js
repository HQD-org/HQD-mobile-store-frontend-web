/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductAction,
  findProductByIdAction,
} from "../../redux/actions/Product/productAction";
import AnotherProduct from "./components/AnotherProduct";
import BasicInfo from "./components/BasicInfo";
import Description from "./components/Description";
import Information from "./components/Information";
import Specifications from "./components/Specifications";

const DetailPage = (props) => {
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productDetail);
  const [like, setLike] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      await dispatch(findProductByIdAction(props.match.params.idProduct));
    };
    dispatch(showHeaderAndFooter(true));
    fetchProduct();
  }, []);

  useEffect(() => {
    if (product.model) {
      const filterProduct = async () => {
        await dispatch(
          filterProductAction(
            {
              page: 1,
              itemPerPage: 1000,
              idBrand: product.brand._id,
            },
            false
          )
        );
      };
      filterProduct();
    }
  }, [product]);

  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="row mb-2">
            <div className="col heart">
              <div>
                <FaHeart
                  style={{ cursor: "pointer" }}
                  color={`${like ? "red" : "#cecece"}`}
                  onClick={() => setLike(!like)}
                />
              </div>
            </div>
          </div>

          <hr />
          <BasicInfo />
          <div className="row mt-3">
            <div className="col-6">
              <Information />
              <Description />
            </div>
            <div className="col-6">
              <Specifications />
            </div>
          </div>

          <div className="row mt-3">
            <hr />
            <h5>Một số sản phẩm cùng hãng</h5>
            <AnotherProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
