import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import "../../../../../common/css/Brand.Style.css";
const BrandCard = (props) => {
  const { list, toggle } = props;
  return list.map((value, index) => {
    const description = value.description;
    let status = "Hoạt động";
    if (value.status === "stop selling") {
      status = "Ngưng kinh doanh";
    }

    return (
      <div className="col" key={value._id}>
        <div className="card h-100 card-brand" onClick={() => toggle(index)}>
          <div className="logo-brand">
            <img
              src={value.image}
              className="card-img-top img-logo"
              alt={value.name}
            />
          </div>

          <div className="card-body">
            <h5 className="card-title"> {value.name}</h5>
            <p className="card-text">
              {description.length > 200
                ? description.slice(0, 201) + " ..."
                : description}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{status}</small>
          </div>
        </div>
      </div>
    );
  });
};

export default BrandCard;
