import React, { useEffect, useRef, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { statusQuestion } from "../../../../../common/constants/ListSelect";
import { FcQuestions } from "react-icons/fc";

import {
  addQuestionAction,
  updateQuestionAction,
} from "../../../../../redux/actions/Question/questionAction";
import { changeLoading } from "../../../../../redux/actions/System/systemAction";

const QuestionForm = (props) => {
  const { currentItem, setCurrentItem } = props;
  const dispatch = useDispatch();
  const [questionSentence, setQuestionSentence] = useState("");
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("true");
  const [stt, setStt] = useState("1");
  const addQuestionForm = useRef();

  const loading =
    (load = true) =>
    (dispatch) => {
      dispatch(changeLoading(load));
    };

  const onQuestionChange = (e) => {
    setQuestionSentence(e.target.value);
  };

  const onAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const resetForm = () => {
    addQuestionForm.current.reset();
    setQuestionSentence("");
    setAnswer("");
    setStatus("true");
    setCurrentItem(undefined);
  };

  const addQuestion = async (e) => {
    e.preventDefault();
    let data = {
      questionSentence: e.target.questionSentence.value,
      answer: e.target.answer.value,
      status: e.target.status.value,
    };
    loading();
    const res = await dispatch(addQuestionAction(data));
    if (res) {
      resetForm();
    }
  };

  const updateQuestion = async (e) => {
    e.preventDefault();
    let data = {
      id: currentItem._id,
      questionSentence: e.target.questionSentence.value,
      answer: e.target.answer.value,
      status: e.target.status.value,
    };
    loading();
    await dispatch(updateQuestionAction(data));
  };

  useEffect(() => {
    if (currentItem) {
      setQuestionSentence(currentItem.questionSentence);
      setAnswer(currentItem.answer);
      setStatus(currentItem.status);
    }
  }, [currentItem]);

  return (
    <div className="form-coupon">
      <div className="row header-coupon">
        <div className="col-5">
          <FcQuestions style={{ fontSize: "30px" }} />
          <span className="txtAddQuestion">Question</span>
        </div>
        <div
          className="col-7"
          style={{ display: "flex", justifyContent: "end" }}
        >
          <button className="btnreset" onClick={resetForm}>
            Reset Form
          </button>
        </div>
      </div>

      <form
        onSubmit={currentItem ? updateQuestion : addQuestion}
        ref={(el) => (addQuestionForm.current = el)}
      >
        <div>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="outlined"
            className="form-control-coupon"
          >
            <TextField
              required
              // id="outlined-basic"
              variant="outlined"
              label="Câu hỏi"
              floatinglabeltext="MultiLine and FloatingLabel"
              multiline
              rows={3}
              name="questionSentence"
              value={questionSentence}
              onChange={onQuestionChange}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="outlined"
            className="form-control-coupon"
          >
            <TextField
              required
              // id="outlined-basic"
              variant="outlined"
              label="Câu trả lời"
              floatinglabeltext="MultiLine and FloatingLabel"
              multiline
              rows={3}
              name="answer"
              value={answer}
              onChange={onAnswerChange}
            />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }} className="form-control-coupon">
            <InputLabel>Trạng thái</InputLabel>
            <Select
              required
              label="Trạng thái"
              value={status}
              name="status"
              onChange={onStatusChange}
            >
              {statusQuestion.map((item) => (
                <MenuItem value={item._id} key={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div style={{ display: "flex", justifyContent: "end" }}>
          <button type="submit" className="btnAddQuestion">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
