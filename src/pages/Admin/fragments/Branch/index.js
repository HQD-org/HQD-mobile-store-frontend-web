/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderDashboard from "../../../../common/components/HeaderDashboard";
import TableDashboard from "../../../../common/components/TableDashboard";
import { filterBranchAction } from "../../../../redux/actions/Branch/branchAction";
import BranchEditor from "./components/BranchEditor";

const headCells = [
  {
    id: "_id",
    label: "_id",
    property: ["_id"],
  },
  {
    id: "name",
    label: "Tên chi nhánh",
    property: ["name"],
  },
  {
    id: "address",
    label: "Địa chỉ",
    property: ["address", "province"],
  },
  {
    id: "adminName",
    label: "Quản trị viên",
    property: ["manager", "username"],
  },
  {
    id: "grandOpeningDate",
    label: "Thời gian khai trương",
    property: ["grandOpeningDate"],
  },
  {
    id: "status",
    label: "Trạng thái",
    property: ["status"],
  },
];

const BranchFragment = () => {
  const dispatch = useDispatch();
  const componentDidMountRef = useRef(false);
  const typingTimeoutRef = useRef(null);
  const branches = useSelector((state) => state.branch.list);
  const pagination = useSelector((state) => state.branch.pagination);
  const updateFlag = useSelector((state) => state.branch.updateFlag);
  const [currentItem, setCurrentItem] = useState(undefined);
  const [sortBy, setSortBy] = useState("name");
  const [ascSort, setAscSort] = useState("asc");
  const [option, setOption] = useState(true);
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState(undefined);

  const onFilterValueChange = (value, type) => {
    switch (type) {
      case "search":
        setSearchTerm(value);
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
      sortBy: sortBy,
      ascSort: ascSort,
    };

    await dispatch(filterBranchAction(query));
  };

  const onChangeSearch = async (e) => {
    if (!onFilterValueChange) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(async () => {
      const searchKey = e.target.value || undefined;
      onFilterValueChange(searchKey, "search");
    }, 300);
  };

  useEffect(() => {
    filter(1, 20);
  }, []);

  useEffect(() => {
    if (componentDidMountRef.current) {
      filter(pagination.page, pagination.itemPerPage);
      return;
    }
  }, [updateFlag]);

  useEffect(() => {
    if (componentDidMountRef.current) {
      filter(1, pagination.itemPerPage);
      return;
    }
    componentDidMountRef.current = true;
  }, [searchTerm, sortBy, ascSort]);

  return (
    <>
      <HeaderDashboard
        type={"Branch"}
        modal={modal}
        setModal={setModal}
        setOption={setOption}
        setCurrentItem={setCurrentItem}
      />
      <TableDashboard
        pagination={pagination}
        list={branches}
        sortBy={sortBy}
        ascSort={ascSort}
        setSortBy={setSortBy}
        setAscSort={setAscSort}
        onChangeSearch={onChangeSearch}
        modal={modal}
        setModal={setModal}
        setOption={setOption}
        setCurrentItem={setCurrentItem}
        filter={filter}
        headCells={headCells}
        type={"Branches"}
      />
      ;
      <BranchEditor
        modal={modal}
        setModal={setModal}
        option={option}
        branch={currentItem}
      />
    </>
  );
};

export default BranchFragment;
