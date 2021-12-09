import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const createData = (name, timeStart, timeEnd, status) => {
  return { name, timeStart, timeEnd, status };
};

const columns = [
  { id: "name", label: "Tên Coupon", minWidth: 170, fontWeight: "bold" },
  {
    id: "timeStart",
    label: "Thời gian bắt đầu",
    minWidth: 170,
    fontWeight: "bold",
  },
  {
    id: "timeEnd",
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

const rows = [
  createData("DealHot1", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot2", "21/11/2021", "21/12/2021", "Hết mã"),
  createData("DealHot3", "21/11/2021", "21/12/2021", "Không khả dụng"),
  createData("DealHot4", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot5", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot6", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot7", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot8", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot9", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot10", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot11", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot12", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot13", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot13", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot13", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot13", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot13", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot13", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot13", "21/11/2021", "21/12/2021", "Khả dụng"),
  createData("DealHot13", "21/11/2021", "21/12/2021", "Khả dụng"),
];

const Coupons = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default Coupons;
