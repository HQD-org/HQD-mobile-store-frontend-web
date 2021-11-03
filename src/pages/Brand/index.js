/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminMenu from "../../common/components/AdminMenu";
import Pagination from "../../common/components/Pagination";
import {
  filterBrandAction,
  getAllBrandAction,
} from "../../redux/actions/Brand/brandAction";
import Brands from "./components/Brands";
import HeaderBrand from "./components/HeaderBrand";

const BrandPage = () => {
  const dispatch = useDispatch();
  let brands = useSelector((state) => state.brands.list) || [];
  let totalBrand = useSelector((state) => state.brands.totalBrand) || 0;
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [status, setStatus] = useState(undefined);
  const getListBrand = async (page, itemPerPage) => {
    await dispatch(getAllBrandAction(page, itemPerPage));
  };

  useEffect(() => {
    getListBrand(1, 4);
  }, []);
  const [pagination, setPagination] = useState({
    page: 1,
    itemPerPage: 4,
    totalItem: totalBrand,
  });

  const onFilterValueChange = async (value, option) => {
    if (option) {
      setSearchTerm(value);
    } else {
      setStatus(value);
    }
  };

  useEffect(() => {
    setPagination({
      ...pagination,
      page: 1,
    });
  }, [status, searchTerm]);
  useEffect(() => {
    const filter = async () => {
      let query = {
        name: searchTerm,
        page: pagination.page,
        itemPerPage: pagination.itemPerPage,
      };

      if (status) query.status = status;
      await dispatch(filterBrandAction(query));
    };
    filter();
  }, [pagination]);
  useEffect(() => {
    setPagination({
      ...pagination,
      totalItem: totalBrand,
    });
  }, [totalBrand]);

  const onPageChange = async (page) => {
    setPagination({ ...pagination, page });
  };

  return (
    <>
      <div>
        <div className="row">
          <div className="col-2" style={{ paddingRight: "4.5px" }}>
            <AdminMenu />
          </div>
          <div className="col">
            <div className="container-fluid">
              <div className="container">
                <HeaderBrand
                  getListBrand={getListBrand}
                  pagination={pagination}
                  onFilterValueChange={onFilterValueChange}
                  status={status}
                />
                <Brands
                  getListBrand={getListBrand}
                  listBrand={brands}
                  pagination={pagination}
                />
                <Pagination
                  pagination={pagination}
                  onPageChange={onPageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandPage;
