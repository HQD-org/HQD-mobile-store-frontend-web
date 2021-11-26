import React, { useState } from "react";
import HeaderDashboard from "../../../../common/components/HeaderDashboard";
import BranchEditor from "./components/BranchEditor";
import TableDashboard from "../../../../common/components/TableDashboard";

const createData = (branchName, address, adminName, timeDebut, status) => {
  return {
    branchName,
    address,
    adminName,
    timeDebut,
    status,
  };
};

const rows = [
  createData("HQD Mobile Thủ Đức", "HCM", "Id/Tên", "12/11/2021", "Hoạt động"),
  createData("HQD Mobile Q9", "HCM", "Id/Tên", "12/11/2021", "Hoạt động"),
  createData("HQD Mobile Q1", "HCM", "Id/Tên", "12/11/2021", "Hoạt động"),
  createData("HQD Mobile Q2", "HCM", "Id/Tên", "12/11/2021", "Hoạt động"),
  createData("HQD Mobile Q3", "HCM", "Id/Tên", "12/11/2021", "Hoạt động"),
  createData("HQD Mobile Q4", "HCM", "Id/Tên", "12/11/2021", "Hoạt động"),
  createData("HQD Mobile Q5", "HCM", "Id/Tên", "12/11/2021", "Hoạt động"),
  createData("HQD Mobile Q6", "HCM", "Id/Tên", "12/11/2021", "Hoạt động"),
  createData("HQD Mobile Q7", "HCM", "Id/Tên", "12/11/2021", "Hoạt động"),
];
const headCells = [
  {
    id: "branchName",
    disablePadding: true,
    label: "Tên chi nhánh",
  },
  {
    id: "address",
    disablePadding: false,
    label: "Địa chỉ",
  },
  {
    id: "adminName",
    disablePadding: false,
    label: "Quản trị viên",
  },
  {
    id: "timeDebut",
    disablePadding: false,
    label: "Thời gian khai trương",
  },
  {
    id: "status",
    disablePadding: false,
    label: "Trạng thái",
  },
];

const BranchFragment = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <HeaderDashboard type={"Branch"} toggle={toggle} />
      <TableDashboard rows={rows} headCells={headCells} type={"Branches"} />;
      <BranchEditor modal={modal} toggle={toggle} option={true} />
    </>
  );
};

export default BranchFragment;
