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
import { translateStatusToVietnamese } from "../../../../../common/utils/helper";

const columns = [
  { id: "stt", label: "Số thứ tự", minWidth: 100, fontWeight: "bold" },
  {
    id: "questionSentence",
    label: "Câu hỏi",
    minWidth: 170,
    fontWeight: "bold",
  },
  {
    id: "answer",
    label: "Câu trả lời",
    minWidth: 170,
    align: "left",
    fontWeight: "bold",
  },
  {
    id: "status",
    label: "Trạng thái",
    minWidth: 101,
    align: "left",
    fontWeight: "bold",
  },
];

const QuestionList = (props) => {
  const { filterQuestion, setCurrentItem } = props;
  const pagination = useSelector((state) => state.question.pagination);
  const list = useSelector((state) => state.question.list);
  const handleChangePage = (e, newPage) => {
    filterQuestion(newPage + 1, pagination.itemPerPage);
  };

  const handleChangeRowsPerPage = (e) => {
    filterQuestion(1, e.target.value);
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
                      background: "#3FA5EF",
                      color: "white",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row._id}
                    onClick={() => onRowClick(row)}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.questionSentence}</TableCell>
                    <TableCell>{row.answer}</TableCell>

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
          rowsPerPageOptions={[5, 10, 15]}
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

export default QuestionList;
