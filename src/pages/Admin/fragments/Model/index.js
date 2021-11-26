/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../../common/components/Pagination";
import { getAllBrandAction } from "../../../../redux/actions/Brand/brandAction";
import { filterModelAction } from "../../../../redux/actions/Model/modelAction";
import Model from "./components/Model";
import ModelEditor from "./components/ModelEditor";
import ModelHeader from "./components/ModelHeader";

const ModelFragment = () => {
  const dispatch = useDispatch();
  const componentDidMountRef = useRef(false);
  const pagination = useSelector((state) => state.model.pagination);
  const updateFlag = useSelector((state) => state.model.updateFlag);
  const [modalEditor, setModalEditor] = useState(false);
  const [currentModel, setCurrentModel] = useState({});
  const [option, setOption] = useState(true);
  const [searchTerm, setSearchTerm] = useState(undefined);
  const [status, setStatus] = useState("all");
  const [idBrand, setIdBrand] = useState("all");
  const [os, setOs] = useState("all");
  const [timeDebut, setTimeDebut] = useState("all");

  const onFilterValueChange = async (e, type) => {
    switch (type) {
      case "brand":
        setIdBrand(e.target.value);
        break;
      case "status":
        setStatus(e.target.value);
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

  const filter = async (page, itemPerPage) => {
    const query = {
      name: searchTerm,
      page: page,
      itemPerPage: itemPerPage,
    };

    if (status && status !== "all") query.status = status;
    if (idBrand && idBrand !== "all") query.idBrand = idBrand;
    if (os && os !== "all") query.operation = os;
    if (timeDebut && timeDebut !== "all") query.timeDebut = timeDebut;

    await dispatch(filterModelAction(query));
  };

  const onPageChange = async (page) => {
    dispatch(filter(page, pagination.itemPerPage));
  };

  useEffect(() => {
    dispatch(getAllBrandAction());
    filter(1, 20);
  }, []);

  useEffect(() => {
    if (componentDidMountRef.current) {
      filter(pagination.page, pagination.itemPerPage);
      return;
    }
    componentDidMountRef.current = true;
  }, [updateFlag]);

  return (
    <>
      <ModelHeader
        setModalEditor={setModalEditor}
        modalEditor={modalEditor}
        setOption={setOption}
        onFilterValueChange={onFilterValueChange}
        status={status}
        idBrand={idBrand}
        os={os}
        timeDebut={timeDebut}
        filter={filter}
      />
      <Model
        setModalEditor={setModalEditor}
        modalEditor={modalEditor}
        setOption={setOption}
        setCurrentModel={setCurrentModel}
      />
      <ModelEditor
        modalEditor={modalEditor}
        toggleEditor={setModalEditor}
        option={option}
        model={currentModel}
      />
      <Pagination pagination={pagination} onPageChange={onPageChange} />
    </>
  );
};

export default ModelFragment;
