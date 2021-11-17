import React from "react";
import imgXiaomi from "../../../common/images/xiaomi-redmi-note-9.png";
import imgVivo from "../../../common/images/vivo-y20s.png";
import starTrending from "../../../common/images/Star1.png";
import backgroundTrending from "../../../common/images/halloween.jpg";
import imgWait from "../../../common/images/wait.png";

const Trending = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <div style={{ textAlign: "center" }}>
        <img src={imgWait} alt=""></img>
      </div>
      <div
        className="row body-trending"
        style={{
          backgroundImage: `url(${backgroundTrending})`,
          marginTop: "-88px",
        }}
      >
        <div
          id="Indicators"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#Indicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#Indicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                  <div className="box-trending">
                    <img
                      src={imgXiaomi}
                      className="d-block img-trending"
                      alt="..."
                    />
                  </div>
                  <div className="star-trending">
                    <img src={starTrending} alt="" width="65%"></img>
                  </div>
                </div>
                <div className="col" style={{ padding: "20px" }}>
                  <div className="row txtTrending">
                    <p>
                      Xiaomi Redmi Note 9 viết tiếp câu chuyện thành công của
                      Redmi series, dòng điện thoại bán chạy nhất từ trước đến
                      nay của Xiaomi. Với sức mạnh đáng kinh ngạc, thời lượng
                      pin vượt trội và 4 camera AI chuyên nghiệp, Redmi Note 9
                      sẽ mang đến những trải nghiệm chưa từng có cho người dùng
                      smartphone giá rẻ.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4">
                      <button className="btnBuy">
                        Buy Now
                        <i className="bi bi-arrow-right-short"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                  <div className="box-trending">
                    <img
                      src={imgVivo}
                      className="d-block img-trending"
                      alt="..."
                    />
                  </div>
                  <div className="star-trending">
                    <img src={starTrending} alt="" width="65%"></img>
                  </div>
                </div>
                <div className="col" style={{ padding: "20px" }}>
                  <div className="row txtTrending">
                    <p>
                      Vivo Y20s sở hữu kiểu dáng rất bắt mắt với thân máy thanh
                      mảnh, mặt lưng phẳng, cụm camera hình chữ nhật thời
                      thượng. Không chỉ đẹp, cảm giác cầm nắm Y20s còn rất thoải
                      mái khi các phần viền cạnh được làm cong 2,5D tinh tế. Mặt
                      trước chiếc Vivo này là màn hình viền siêu mỏng hấp dẫn,
                      trong khi điểm nhấn mặt sau nằm ở cụm camera lớn, đồng
                      thời là tâm của họa tiết tỏa sáng lấp lánh đầy nổi bật.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4">
                      <button className="btnBuy">
                        Buy Now
                        <i className="bi bi-arrow-right-short"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
