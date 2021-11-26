import {
  CloudDownload,
  EmojiEmotions,
  FilterList,
  Print,
  ViewColumn,
} from "@mui/icons-material";
import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import React from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const EnhancedTableToolbar = (props) => {
  const { tableName, numSelected, onChangeSearch } = props;
  return (
    <Toolbar
      style={{ backgroundColor: "#3FA5EF" }}
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          backgroundColor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%", color: "white" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} {tableName}
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%", color: "white" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {tableName}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <EmojiEmotions style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            onChange={(e) => onChangeSearch(e)}
            className="form-control me-2 search-branch"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="search"
            style={{ height: "35px" }}
          />
          <Tooltip title="Download">
            <IconButton>
              <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="btnDownload-User MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-78trlr-MuiButtonBase-root-MuiIconButton-root"
                table="table-to-xls"
                filename="Branch-table"
                sheet="tablexls"
                buttonText={<CloudDownload style={{ color: "white" }} />}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Print">
            <IconButton>
              <Print style={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="View Column">
            <IconButton>
              <ViewColumn style={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter list">
            <IconButton>
              <FilterList style={{ color: "white" }} />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default EnhancedTableToolbar;
