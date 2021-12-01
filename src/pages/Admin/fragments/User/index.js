/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderDashboard from "../../../../common/components/HeaderDashboard";
import TableDashboard from "../../../../common/components/TableDashboard";
import { filterUserAction } from "../../../../redux/actions/User/userAction";
import UserEditor from "./components/UserEditor";

const headCells = [
  {
    id: "_id",
    label: "_id",
    property: ["idUser", "_id"],
  },
  {
    id: "name",
    label: "Tên",
    property: ["idUser", "name"],
  },
  {
    id: "role",
    label: "Vai trò",
    property: ["role"],
  },
  {
    id: "phone",
    label: "Số điện thoại",
    property: ["idUser", "phone"],
  },
  {
    id: "address",
    label: "Địa chỉ",
    property: ["idUser", "address", "province"],
  },
  {
    id: "email",
    label: "Email",
    property: ["idUser", "email"],
  },
];

const UserFragment = () => {
  const dispatch = useDispatch();
  const componentDidMountRef = useRef(false);
  const typingTimeoutRef = useRef(null);
  const users = useSelector((state) => state.user.list);
  const pagination = useSelector((state) => state.user.pagination);
  const updateFlag = useSelector((state) => state.user.updateFlag);
  const [currentItem, setCurrentItem] = useState({});
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
      phone: searchTerm,
      email: searchTerm,
      page: page,
      itemPerPage: itemPerPage,
      sortBy: sortBy,
      ascSort: ascSort,
    };

    await dispatch(filterUserAction(query));
  };

  const onChangeSearch = async (e) => {
    console.log("log at ==> index.js ==> e: ", e);
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
        type={"User"}
        modal={modal}
        setModal={setModal}
        setOption={setOption}
        setCurrentItem={setCurrentItem}
      />
      <TableDashboard
        pagination={pagination}
        headCells={headCells}
        type={"Users"}
        list={users}
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
      />
      ;
      <UserEditor
        modal={modal}
        setModal={setModal}
        option={option}
        user={currentItem}
      />
    </>
  );
};

export default UserFragment;
