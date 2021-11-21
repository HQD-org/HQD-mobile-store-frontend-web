/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../common/components/Pagination";
import { filterBrandAction } from "../../../../redux/actions/Brand/brandAction";
import BrandEditor from "./components/BrandEditor";
import Brands from "./components/Brands";
import HeaderBrand from "./components/HeaderBrand";

const BrandFragment = () => {
  const dispatch = useDispatch();
  const componentDidMountRef = useRef(false);
  const pagination = useSelector((state) => state.brand.pagination);
  const updateFlag = useSelector((state) => state.brand.updateFlag);
  const [modal, setModal] = useState(false);
  const [currentBrand, setCurrentBrand] = useState({});
  const [option, setOption] = useState(true);
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [status, setStatus] = useState(undefined);

  const onFilterValueChange = async (value, option) => {
    if (option) {
      setSearchTerm(value);
    } else {
      setStatus(value);
    }
  };

  const filter = async (page, itemPerPage) => {
    let query = {
      name: searchTerm,
      page: page,
      itemPerPage: itemPerPage,
    };

    if (status) query.status = status;
    await dispatch(filterBrandAction(query));
  };

  const onPageChange = async (page) => {
    filter(page, pagination.itemPerPage);
  };

  useEffect(() => {
    filter(1, 8);
  }, []);

  useEffect(() => {
    if (componentDidMountRef.current) {
      filter(1, pagination.itemPerPage);
      return;
    }
  }, [status, searchTerm]);

  useEffect(() => {
    if (componentDidMountRef.current) {
      filter(pagination.page, pagination.itemPerPage);
      return;
    }
    componentDidMountRef.current = true;
  }, [updateFlag]);

  return (
    <>
      <HeaderBrand
        onFilterValueChange={onFilterValueChange}
        status={status}
        setOption={setOption}
        modal={modal}
        setModal={setModal}
      />
      <Brands
        modal={modal}
        setModal={setModal}
        setOption={setOption}
        setCurrentBrand={setCurrentBrand}
      />
      <BrandEditor
        modal={modal}
        setModal={setModal}
        option={option}
        brand={currentBrand}
      />
      <Pagination pagination={pagination} onPageChange={onPageChange} />
    </>
  );
};

export default BrandFragment;
