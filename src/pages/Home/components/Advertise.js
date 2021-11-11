import React from "react";
import Adv1 from "../../../common/images/adv1.jpg";
import Adv2 from "../../../common/images/adv2.jpg";
import Adv3 from "../../../common/images/adv3.jpg";
import Adv4 from "../../../common/images/adv4.jpg";

const Advertise = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="row" style={{ paddingBottom: "20px" }}>
        <div
          id="carouselSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Adv1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Adv2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Adv3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Adv4} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
