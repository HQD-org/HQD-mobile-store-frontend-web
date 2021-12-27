import React, { useRef } from "react";
import { FormGroup } from "reactstrap";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { statusQuestion } from "../../../../../common/constants/ListSelect";

const QuestionHeader = (props) => {
  const { setStatus, status } = props;
  const onStatusFilterChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="row" style={{ marginTop: "50px", alignItems: "baseline" }}>
      <div className="col">
        <div style={{ display: "inline-flex" }}>
          <HelpCenterIcon className="icon-admin icon-question" />
          <span className="name-management">Question</span>
        </div>

        <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
      </div>

      <div className="col-7">
        <form>
          <div className="form-filter-brand">
            <div className="col-3">
              <FormGroup>
                <select
                  className="form-select"
                  value={status}
                  onChange={onStatusFilterChange}
                >
                  <option value="all">Status</option>
                  {statusQuestion.map((item) => (
                    <option value={item._id} key={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </div>
          </div>
        </form>
      </div>

      <div className="col-2"></div>
    </div>
  );
};

export default QuestionHeader;
