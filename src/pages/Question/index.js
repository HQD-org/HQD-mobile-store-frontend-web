import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import QuestionHeader from "./components/QuestionHeader";
import "../../common/css/Question.Style.css";
import QuestionList from "./components/Question";

const QuestionPage = (props) => {
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeaderAndFooter(true));
  });

  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <QuestionHeader />
      </div>
      <div className="row mb-3">
        <QuestionList />
      </div>
    </div>
  );
};
export default QuestionPage;
