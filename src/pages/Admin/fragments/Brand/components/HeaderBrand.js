import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, useRef } from "react";
import { FormGroup } from "reactstrap";
import "../../../../../common/css/Brand.Style.css";
import BrandEditor from "./BrandEditor";
const HeaderBrand = React.memo((props) => {
  const { buttonLabel, getListBrand, pagination, onFilterValueChange, status } =
    props;
  const { page, itemPerPage } = pagination;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const typingTimeoutRef = useRef(null);
  const onChangeSearch = async (e) => {
    if (!onFilterValueChange) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(async () => {
      const name = e.target.value || undefined;
      await onFilterValueChange(name, true);
    }, 300);
  };
  const onChangeStatus = async (e) => {
    if (!onFilterValueChange) return;
    let status = e.target.value;
    if (status === "all") status = undefined;
    await onFilterValueChange(status, false);
  };
  return (
    <div className="row" style={{ marginTop: "50px", alignItems: "baseline" }}>
      <div className="col">
        <div style={{ display: "inline-flex" }}>
          <i className="fab fa-react icon-admin icon-brandHeader"></i>
          <span className="name-management">Brand</span>
        </div>

        <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
      </div>

      <div className="col-6">
        {" "}
        <div className="form-filter-brand">
          <div className="col-4">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              onChange={onChangeSearch}
            />
          </div>
          <div className="col-3">
            {" "}
            <FormGroup>
              <select
                defaultValue={status}
                className="form-select"
                name="status"
                onChange={onChangeStatus}
              >
                <option value="all">Tất cả</option>
                <option value="active">Hoạt động</option>
                <option value="stop selling">Ngừng kinh doanh</option>
              </select>
            </FormGroup>
          </div>
          {/* <div className="col-4">
            <button type="submit" className="btn-addBrand">
              <span>Search</span>
            </button>
          </div> */}
        </div>
      </div>

      <div className="col-2">
        <button type="button" className="btn-addBrand" onClick={toggle}>
          {buttonLabel}
          <i className="bi bi-plus-square-fill icon-brand"></i>
          <span>Add Brand</span>
        </button>
      </div>

      <BrandEditor
        modal={modal}
        toggle={toggle}
        getListBrand={getListBrand}
        option={true}
        brand={undefined}
        page={page}
        itemPerPage={itemPerPage}
      />
    </div>
  );
});

export default HeaderBrand;
