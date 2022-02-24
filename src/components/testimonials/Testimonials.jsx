import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
          </div>
          <h5 className="client__name">Eren Yeager</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            voluptate distinctio ratione illum vero rerum quidem. Pariatur sed
            beatae deleniti corporis quasi ad aspernatur obcaecati dolore ipsum?
            Impedit, aliquam adipisci!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar" />
          </div>
          <h5 className="client__name">Lelouch VII Britannia</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            voluptate distinctio ratione illum vero rerum quidem. Pariatur sed
            beatae deleniti corporis quasi ad aspernatur obcaecati dolore ipsum?
            Impedit, aliquam adipisci!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar" />
          </div>
          <h5 className="client__name">Thorfinn Karlsefni</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            voluptate distinctio ratione illum vero rerum quidem. Pariatur sed
            beatae deleniti corporis quasi ad aspernatur obcaecati dolore ipsum?
            Impedit, aliquam adipisci!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar" />
          </div>
          <h5 className="client__name">Power Devil</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            voluptate distinctio ratione illum vero rerum quidem. Pariatur sed
            beatae deleniti corporis quasi ad aspernatur obcaecati dolore ipsum?
            Impedit, aliquam adipisci!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
