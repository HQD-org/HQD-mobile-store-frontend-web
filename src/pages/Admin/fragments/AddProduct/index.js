/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../common/components/Pagination";
import "../../../../common/css/Product.Style.css";
import { getAllBrandAction } from "../../../../redux/actions/Brand/brandAction";
import { filterModelAction } from "../../../../redux/actions/Model/modelAction";
import AddProductHeader from "./components/AddProductHeader";
import ModelTable from "./components/ModelTable";
import ProductEditor from "./components/ProductEditor";

const AddProductFragment = () => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.model.pagination);
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [idBrand, setIdBrand] = useState("all");
  const [os, setOs] = useState("all");
  const [timeDebut, setTimeDebut] = useState("all");

  const onFilterValueChange = async (e, type) => {
    switch (type) {
      case "brand":
        setIdBrand(e.target.value);
        break;
      case "name":
        setSearchTerm(e.target.value || undefined);
        break;
      case "os":
        setOs(e.target.value);
        break;
      case "timeDebut":
        setTimeDebut(e.target.value);
        break;
      default:
        break;
    }
  };

  const filterModel = async (page, itemPerPage) => {
    const query = {
      name: searchTerm,
      page: page,
      itemPerPage: itemPerPage,
    };

    if (idBrand && idBrand !== "all") query.idBrand = idBrand;
    if (os && os !== "all") query.operation = os;
    if (timeDebut && timeDebut !== "all") query.timeDebut = timeDebut;

    await dispatch(filterModelAction(query));
  };

  const onPageChange = (page) => {
    filterModel(page, pagination.itemPerPage);
  };

  const onItemPerPageChange = (itemPerPage) => {
    filterModel(1, itemPerPage);
  };

  useEffect(() => {
    const fetchBrandList = async () => {
      await dispatch(getAllBrandAction());
    };
    filterModel();
    fetchBrandList();
  }, []);
  return (
    <>
      <AddProductHeader
        onFilterValueChange={onFilterValueChange}
        idBrand={idBrand}
        os={os}
        timeDebut={timeDebut}
        filterModel={filterModel}
      />
      <ModelTable setModal={setModal} setCurrentItem={setCurrentItem} />
      <ProductEditor
        modal={modal}
        setModal={setModal}
        currentItem={currentItem}
      />
      <Pagination
        pagination={pagination}
        onPageChange={onPageChange}
        onItemPerPageChange={onItemPerPageChange}
      />
    </>
  );
};

export default AddProductFragment;
