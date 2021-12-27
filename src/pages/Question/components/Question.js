import React from "react";
import { useSelector } from "react-redux";
import HelpIcon from "@mui/icons-material/Help";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const QuestionList = (props) => {
  const questions = useSelector((state) => state.question.list);
  return (
    <div className="mt-3">
      <div className="row mb-3" style={{ justifyContent: "space-between" }}>
        <div className="col-2 txtQuestion">QUESTION</div>
        <div className="col-2 txtAnswer">ANSWER</div>
      </div>
      {questions.map((item) => {
        return item.status === "true" ? (
          <div className="row mb-3" style={{ alignItems: "center" }}>
            <div className="col-5">
              <div className="box-headerQ"></div>
              <div className="box-bodyQ">
                {item.questionSentence}
                <HelpIcon className="help-icon" />
              </div>
            </div>
            <div className="col-2" style={{ textAlign: "center" }}>
              <ArrowBackIosIcon />
              <ArrowForwardIosIcon />
            </div>
            <div className="col-5">
              <div className="box-headerA"></div>
              <div className="box-bodyA">
                <LightbulbIcon className="light-icon" />
                {item.answer}
              </div>
            </div>
          </div>
        ) : (
          <></>
        );
      })}
      <div className="mt-3 mb-3"> </div>
    </div>
  );
};

export default QuestionList;
