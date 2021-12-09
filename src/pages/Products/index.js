/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../common/components/Pagination";
import { getAllBrandAction } from "../../redux/actions/Brand/brandAction";
import { filterProductAction } from "../../redux/actions/Product/productAction";
import ProductCard from "./components/ProductCard";
import ProductFilter from "./components/ProductFilter";

const ProductPage = (props) => {
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.list);
  const pagination = useSelector((state) => state.product.pagination);
  const [brand, setBrand] = useState("all");
  const [capacity, setCapacity] = useState("all");
  const [ram, setRam] = useState("all");
  // const [operating, setOperating] = useState("all");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("all");
  const [sortNew, setSortNew] = useState(true);

  const filterProduct = async (page, itemPerPage) => {
    const priceSplit = price.split("-");
    const query = {
      page,
      itemPerPage,
      minPrice: price === "all" ? 0 : priceSplit[0],
      maxPrice: price === "all" ? 1000000000 : priceSplit[1],
      idBrand: brand === "all" ? undefined : brand,
      capacity: capacity === "all" ? undefined : capacity,
      ram: ram === "all" ? undefined : ram,
      // operating: operating === "all" ? undefined : operating,
      sortNew: sortNew || undefined,
      sortPrice: sort === "all" ? undefined : sort,
    };
    await dispatch(filterProductAction(query));
  };

  useEffect(() => {
    filterProduct(1, 16);
    const getAllBrand = async () => {
      await dispatch(getAllBrandAction(false));
    };

    getAllBrand();
    dispatch(showHeaderAndFooter(true));
  }, []);

  const onChangeFilter = (e, type) => {
    switch (type) {
      case "brand":
        setBrand(e.target.value);
        break;
      case "capacity":
        setCapacity(e.target.value);
        break;
      case "ram":
        setRam(e.target.value);
        break;
      // case "operating":
      //   setOperating(e.target.value);
      //   break;
      case "price":
        setPrice(e.target.value);
        break;
      case "sort":
        setSort(e.target.value);
        break;
      case "new":
        setSortNew(true);
        break;
      case "trend":
        setSortNew(false);
        break;
      default:
        break;
    }
  };

  const onPageChange = (page) => {
    filterProduct(page, pagination.itemPerPage);
  };

  const onItemPerPageChange = (itemPerPage) => {
    filterProduct(1, itemPerPage);
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-3 mb-3">
          <ProductFilter
            onChangeFilter={onChangeFilter}
            brand={brand}
            capacity={capacity}
            ram={ram}
            // operating={operating}
            price={price}
            sort={sort}
            filterProduct={filterProduct}
          />
        </div>
        <hr />

        <div style={{ marginTop: "20px" }}>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="row row-cols-1 row-cols-md-5 g-1 group-promotion">
              {products.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Pagination
        pagination={pagination}
        onPageChange={onPageChange}
        onItemPerPageChange={onItemPerPageChange}
      />
    </div>
  );
};

export default ProductPage;
