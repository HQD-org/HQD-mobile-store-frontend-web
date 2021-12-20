import React from "react";

const QuestionHeader = () => {
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <div className="col-6">
        <input
          className="form-control input-question"
          type="search"
          placeholder="Your question"
        />
      </div>
    </div>
  );
};

export default QuestionHeader;
