import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import "../../../../../common/css/Brand.Style.css";
import BrandEditor from "./BrandEditor";
const Brands = React.memo((props) => {
  const { buttonLabel, getListBrand, listBrand, pagination } = props;
  const { page, itemPerPage } = pagination;
  const [currentBrand, setCurrentBrand] = useState({});
  const [modal, setModal] = useState(false);
  const toggle = (index) => {
    if (index || index === 0) setCurrentBrand(listBrand[index]);
    setModal(!modal);
  };

  const BrandCard = React.memo((props) => {
    return props.list.map((value, index) => {
      return (
        <div className="col" key={value._id}>
          <div className="card h-100 card-brand" onClick={() => toggle(index)}>
            {buttonLabel}
            <div className="logo-brand">
              <img
                src={value.image}
                className="card-img-top img-logo"
                alt={value.name}
              />
            </div>

            <div className="card-body">
              <h5 className="card-title"> {value.name}</h5>
              <p className="card-text card-description">{value.description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{value.status}</small>
            </div>
          </div>
        </div>
      );
    });
  });

  return (
    <div
      className="row row-cols-1 row-cols-md-4 g-4"
      style={{ marginTop: "15px" }}
    >
      <BrandCard list={listBrand} />
      <BrandEditor
        modal={modal}
        toggle={toggle}
        getListBrand={getListBrand}
        option={false}
        brand={currentBrand}
        page={page}
        itemPerPage={itemPerPage}
      />
    </div>
  );
});

export default Brands;
