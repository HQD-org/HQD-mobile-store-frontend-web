/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../common/components/Pagination";
import { getAllBranchAction } from "../../../../redux/actions/Branch/branchAction";
import { getAllBrandAction } from "../../../../redux/actions/Brand/brandAction";
import { filterProductAction } from "../../../../redux/actions/Product/productAction";
import ProductHeader from "./components/ProductHeader";
import ProductList from "./components/ProductList";

const ProductFragment = () => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.product.pagination);
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [idBranch, setIdBranch] = useState("all");
  const [idBrand, setIdBrand] = useState("all");
  const [status, setStatus] = useState("all");
  const [ram, setRam] = useState("all");
  const [capacity, setCapacity] = useState("all");

  const filterProduct = async (page, itemPerPage) => {
    const query = {
      itemPerPage: itemPerPage,
      page: page,
      name: searchTerm,
      minPrice: 0,
      maxPrice: 50000000,
    };

    if (status && status !== "all") query.status = status;
    if (idBrand && idBrand !== "all") query.idBrand = idBrand;
    // if (idBranch && idBranch !== "all") query.idBranch = idBranch;
    if (ram && ram !== "all") query.ram = ram;
    if (capacity && capacity !== "all") query.capacity = capacity;

    await dispatch(filterProductAction(query));
  };

  const onFilterValueChange = async (e, type) => {
    switch (type) {
      case "brand":
        setIdBrand(e.target.value);
        break;
      case "branch":
        setIdBranch(e.target.value);
        break;
      case "status":
        setStatus(e.target.value);
        break;
      case "name":
        setSearchTerm(e.target.value || undefined);
        break;
      case "ram":
        setRam(e.target.value);
        break;
      case "capacity":
        setCapacity(e.target.value);
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

  useEffect(() => {
    const fetchBrandList = async () => {
      await dispatch(getAllBrandAction());
    };
    const fetchBranchList = async () => {
      await dispatch(getAllBranchAction());
    };
    filterProduct(1, 16);
    fetchBrandList();
    fetchBranchList();
  }, []);

  return (
    <>
      <ProductHeader
        onFilterValueChange={onFilterValueChange}
        status={status}
        idBrand={idBrand}
        idBranch={idBranch}
        ram={ram}
        capacity={capacity}
        filterProduct={filterProduct}
      />
      <ProductList />
      <Pagination
        pagination={pagination}
        onPageChange={onPageChange}
        onItemPerPageChange={onItemPerPageChange}
      />
    </>
  );
};

export default ProductFragment;
