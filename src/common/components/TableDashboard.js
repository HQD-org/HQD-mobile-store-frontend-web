/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import { formatDate } from "../utils/helper";

const TableDashboard = (props) => {
  const {
    headCells,
    type,
    pagination,
    list,
    setSortBy,
    setAscSort,
    sortBy,
    ascSort,
    onChangeSearch,
    setOption,
    modal,
    setModal,
    setCurrentItem,
    filter,
  } = props;
  const { page, itemPerPage, totalItem } = pagination;
  const [selected, setSelected] = useState([]);
  const [dense, setDense] = useState(false);

  const toggle = (index) => {
    if (index || index === 0) {
      setCurrentItem(list[index]);
      setOption(false);
    }
    setModal(!modal);
  };
  const handleRequestSort = (property) => {
    const isAsc = sortBy === property && ascSort === "asc";
    setAscSort(isAsc ? "desc" : "asc");
    setSortBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelectedOptions = list.map((item, index) => index);
      setSelected(newSelectedOptions);
      return;
    }
    setSelected([]);
  };

  const onRowClick = (index) => {
    toggle(index);
  };

  const handleOnClickCheckbox = (name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    switch (selectedIndex) {
      case -1:
        newSelected = newSelected.concat(selected, name);
        break;
      case 0:
        newSelected = newSelected.concat(selected.slice(1));
        break;
      case selected.length - 1:
        newSelected = newSelected.concat(selected.slice(0, -1));
        break;
      default:
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
        break;
    }

    setSelected(newSelected);
  };

  const handleChangePage = async (e, newPage) => {
    filter(newPage + 1, itemPerPage);
  };

  const handleChangeRowsPerPage = (e) => {
    filter(1, e.target.value);
  };

  const handleChangeDense = (e) => {
    setDense(e.target.checked);
  };

  const isSelected = (index) => selected.indexOf(index) !== -1;

  const openChangePassword = () => {};
  const lockUser = () => {};
  const unlockUser = () => {};

  const renderIcon = (type, status) => {
    switch (type) {
      case "Users":
        return (
          <>
            <TableCell>
              <MdPassword onClick={openChangePassword} />
            </TableCell>
            {status === "active" ? (
              <TableCell>
                <AiFillLock onClick={lockUser} />
              </TableCell>
            ) : (
              <TableCell>
                <AiFillUnlock onClick={unlockUser} />
              </TableCell>
            )}
          </>
        );
      default:
        return <th> </th>;
    }
  };

  const renderRows = list.map((item, index) => {
    const isItemSelected = isSelected(index);
    const labelId = `enhanced-table-checkbox-${index}`;

    return (
      <TableRow
        hover
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={labelId}
        selected={isItemSelected}
      >
        <TableCell key={index}>
          <Checkbox
            onChange={() => handleOnClickCheckbox(index)}
            color="primary"
            checked={isItemSelected}
            inputProps={{
              "aria-labelledby": labelId,
            }}
          />
        </TableCell>
        {headCells.map((headCell, i) => {
          let value = item;
          headCell.property.forEach((prop) => {
            value = value[`${prop}`] || "";
          });
          if (i === 0) return <th key={i}> </th>;
          return i === 1 ? (
            <TableCell
              component="th"
              id={labelId}
              scope="row"
              padding="none"
              key={i}
              onClick={() => onRowClick(index)}
            >
              {value}
            </TableCell>
          ) : (
            <TableCell align="left" key={i} onClick={() => onRowClick(index)}>
              {formatDate(value)}
            </TableCell>
          );
        })}
        {renderIcon(type, item.status)}
      </TableRow>
    );
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          onChangeSearch={onChangeSearch}
          tableName={type}
          numSelected={selected.length}
        />
        <TableContainer>
          <Table
            id="table-to-xls"
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={ascSort}
              orderBy={sortBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={list.length}
              headCells={headCells}
            />
            <TableBody>{renderRows}</TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[20, 50, 100]}
          component="div"
          count={totalItem}
          rowsPerPage={itemPerPage || 50}
          page={page - 1}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
};

export default TableDashboard;
