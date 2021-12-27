import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../common/css/Question.Style.css";
import QuestionList from "./components/Question";
import {
  getAllQuestionAction,
  filterQuestionAction,
} from "../../redux/actions/Question/questionAction";
import Pagination from "../../common/components/Pagination";

const QuestionPage = (props) => {
  const { showHeaderAndFooter } = props;
  const pagination = useSelector((state) => state.question.pagination);
  const [questionSentence, setQuestionSentence] = useState(undefined);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeaderAndFooter(true));
  });

  const filterQuestion = async (page, itemPerPage) => {
    const query = {
      name: questionSentence,
      page: page,
      itemPerPage: itemPerPage,
    };

    await dispatch(filterQuestionAction(query));
  };

  useEffect(() => {
    filterQuestion(1, 16);
    const getAllQuestion = async () => {
      await dispatch(getAllQuestionAction(false));
    };

    getAllQuestion();
  }, []);

  const onPageChange = (page) => {
    filterQuestion(page, pagination.itemPerPage);
  };

  const onItemPerPageChange = (itemPerPage) => {
    filterQuestion(1, itemPerPage);
  };

  return (
    <div className="container">
      <div className="row mb-3 mt-3">
        <QuestionList />
      </div>
      <Pagination
        pagination={pagination}
        onPageChange={onPageChange}
        onItemPerPageChange={onItemPerPageChange}
      />
    </div>
  );
};
export default QuestionPage;
