/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import QuestionHeader from "./components/QuestionHeader";
import QuestionList from "./components/QuestionList";
import QuestionForm from "./components/QuestionForm";
import "../../../../common/css/Question.Style.css";
import { filterQuestionAction } from "../../../../redux/actions/Question/questionAction";
import { useDispatch, useSelector } from "react-redux";

const QuestionFragment = () => {
  const dispatch = useDispatch();
  const updateFlag = useSelector((state) => state.question.updateFlag);
  const pagination = useSelector((state) => state.question.pagination);
  const [currentItem, setCurrentItem] = useState(undefined);
  const [status, setStatus] = useState("all");
  const filterQuestion = async (page, itemPerPage) => {
    const query = {
      page,
      itemPerPage,
    };
    if (status && status !== "all") query.status = status;
    await dispatch(filterQuestionAction(query));
  };

  useEffect(() => {
    console.log(pagination.itemPerPage);
    filterQuestion(1, 5);
  }, []);

  useEffect(() => {
    filterQuestion(pagination.page, pagination.itemPerPage);
  }, [updateFlag]);

  useEffect(() => {
    filterQuestion(1, pagination.itemPerPage);
  }, [status]);

  return (
    <div>
      <QuestionHeader setStatus={setStatus} status={status} />
      <div className="row">
        <div className="col-8">
          <QuestionList
            filterQuestion={filterQuestion}
            setCurrentItem={setCurrentItem}
          />
        </div>
        <div className="col-4">
          <QuestionForm
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionFragment;
