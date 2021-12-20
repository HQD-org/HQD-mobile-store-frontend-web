import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const QuestionList = () => {
  return (
    <div className="mt-3">
      <div className="row mb-3" style={{ justifyContent: "space-between" }}>
        <div className="col-2 txtquestion">QUESTION</div>
        <div className="col-2 txtAnswer">ANSWER</div>
      </div>
      <div className="row mb-3" style={{ alignItems: "center" }}>
        <div className="col-5">
          <div className="box-headerQ"></div>
          <div className="box-bodyQ">
            Cách thức đặt hàng aaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaa
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
            Chọn product {"->"} Thêm vào giỏ hàng {"->"} Cart {"->"} Đặt hàng
            ngay {"->"} Xác nhận đơn
          </div>
        </div>
      </div>
      <div className="row mb-3" style={{ alignItems: "center" }}>
        <div className="col-5">
          <div className="box-headerQ"></div>
          <div className="box-bodyQ">
            Làm sao để có mã giảm giá ngo ngo ngooooooo
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
            Mua hàng đi rồi tặng cho nha {":>>"} mssyo
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionList;
