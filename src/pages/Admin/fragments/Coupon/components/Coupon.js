import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import {
  translateStatusToVietnamese,
  formatDate,
} from "../../../../../common/utils/helper";

const columns = [
  { id: "name", label: "Tên Coupon", minWidth: 170, fontWeight: "bold" },
  {
    id: "startedDate",
    label: "Thời gian bắt đầu",
    minWidth: 170,
    fontWeight: "bold",
  },
  {
    id: "expiredDate",
    label: "Thời gian kết thúc",
    minWidth: 170,
    align: "left",
    fontWeight: "bold",
  },
  {
    id: "status",
    label: "Trạng thái",
    minWidth: 170,
    align: "left",
    fontWeight: "bold",
  },
];

const Coupons = (props) => {
  const { filter, setCurrentItem } = props;
  const pagination = useSelector((state) => state.coupon.pagination);
  const list = useSelector((state) => state.coupon.list);
  const handleChangePage = (e, newPage) => {
    filter(newPage + 1, pagination.itemPerPage);
  };

  const handleChangeRowsPerPage = (e) => {
    filter(1, e.target.value);
  };

  const onRowClick = (row) => {
    setCurrentItem(row);
  };
  return (
    <div className="container-fluid">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 750 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: column.fontWeight,
                      background: "#de7311",
                      color: "white",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row._id}
                    onClick={() => onRowClick(row)}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{formatDate(row.startedDate)}</TableCell>
                    <TableCell align={"left"}>
                      {formatDate(row.expiredDate)}
                    </TableCell>
                    <TableCell align={"left"}>
                      {translateStatusToVietnamese(row.status)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[20, 50, 100]}
          component="div"
          count={pagination.totalItem}
          rowsPerPage={pagination.itemPerPage}
          page={pagination.page - 1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default Coupons;
