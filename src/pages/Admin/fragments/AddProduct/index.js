/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ModelTable from "./components/ModelTable";
import AddProductHeader from "./components/AddProductHeader";
import "../../../../common/css/Product.Style.css";
import ProductEditor from "./components/ProductEditor";
import { useDispatch, useSelector } from "react-redux";
import { getAllModelAction } from "../../../../redux/actions/Model/modelAction";

const AddProductFragment = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  useEffect(() => {
    const fetchModelList = async () => {
      await dispatch(getAllModelAction());
    };
    fetchModelList();
  }, []);
  return (
    <>
      <AddProductHeader />
      <ModelTable setModal={setModal} setCurrentItem={setCurrentItem} />
      <ProductEditor
        modal={modal}
        setModal={setModal}
        currentItem={currentItem}
      />
    </>
  );
};

export default AddProductFragment;
