import React from "react";
import "./MovieList.scss";
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Button from "../button/Button"
import { Link } from "react-router-dom";

const MovieList = () => {
  const data = [
    {
      imga: "https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII",
      title: "chauhaoivu đã làm cái này nè mọi người ơi ",
      review: "nội dung nè",
      childrenimg:
        "https://i.picsum.photos/id/141/2048/1365.jpg?hmac=xcZmN-VINP95YwmI3AXCTIxfzd61fhaczQmodKQjLbY",
    },
    {
      imga: "https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU",
      title: "chauhaoivu đã làm cái này nè mọi người ơi ",
      review: "nội dung nè",
      childrenimg:
        "https://i.picsum.photos/id/142/4272/2848.jpg?hmac=z8IS_an6FQ8ijJOBd-wSVg1JTZbeIDG4TbjHwLQbs0I",
    },
    {
      imga: "https://i.picsum.photos/id/133/2742/1828.jpg?hmac=0X5o8bHUICkOIvZHtykCRL50Bjn1N8w1AvkenF7n93E",
      title: "chauhaoivu đã làm cái này nè mọi người ơi ",
      review: "nội dung nè",
      childrenimg:
        "https://i.picsum.photos/id/143/3600/2385.jpg?hmac=gSMmnYrmuP5BJ47kmErfYdYu1L1GLePM1SNm-D2lqiA",
    },
    {
      imga: "https://i.picsum.photos/id/129/4910/3252.jpg?hmac=g1KzJMIp75lG_scR48R1baC6TjhVmkEyygSyngKYRsg",
      title: "chauhaoivu đã làm cái này nè mọi người ơi ",
      review: "nội dung nè",
      childrenimg:
        "https://i.picsum.photos/id/137/4752/3168.jpg?hmac=dGsgAtPkFewFByZXZOmSg0U7Mohr43GyVu3n1AHVIyg",
    },
    {
      imga: "https://i.picsum.photos/id/145/4288/2848.jpg?hmac=UkhcwQUE-vRBFXzDN1trCwWigpm7MXG5Bl5Ji103QG4",
      review: "nội dung nè",
    },
    {
      imga: "https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII",
      title: "chauhaoivu đã làm cái này nè mọi người ơi ",
      review: "nội dung nè",
      childrenimg:
        "https://i.picsum.photos/id/141/2048/1365.jpg?hmac=xcZmN-VINP95YwmI3AXCTIxfzd61fhaczQmodKQjLbY",
    },
    {
      imga: "https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU",
      title: "chauhaoivu đã làm cái này nè mọi người ơi ",
      review: "nội dung nè",
      childrenimg:
        "https://i.picsum.photos/id/142/4272/2848.jpg?hmac=z8IS_an6FQ8ijJOBd-wSVg1JTZbeIDG4TbjHwLQbs0I",
    },
    {
      imga: "https://i.picsum.photos/id/133/2742/1828.jpg?hmac=0X5o8bHUICkOIvZHtykCRL50Bjn1N8w1AvkenF7n93E",
      title: "chauhaoivu đã làm cái này nè mọi người ơi ",
      review: "nội dung nè",
      childrenimg:
        "https://i.picsum.photos/id/143/3600/2385.jpg?hmac=gSMmnYrmuP5BJ47kmErfYdYu1L1GLePM1SNm-D2lqiA",
    },
    {
      imga: "https://i.picsum.photos/id/129/4910/3252.jpg?hmac=g1KzJMIp75lG_scR48R1baC6TjhVmkEyygSyngKYRsg",
      title: "chauhaoivu đã làm cái này nè mọi người ơi ",
      review: "nội dung nè",
      childrenimg:
        "https://i.picsum.photos/id/137/4752/3168.jpg?hmac=dGsgAtPkFewFByZXZOmSg0U7Mohr43GyVu3n1AHVIyg",
    },
    {
      imga: "https://i.picsum.photos/id/145/4288/2848.jpg?hmac=UkhcwQUE-vRBFXzDN1trCwWigpm7MXG5Bl5Ji103QG4",
      review: "nội dung nè",
    },
  ];

  return (
    <div className="movie-list">
      <Swiper
        // navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <MovieCard
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const MovieCard = (props) => {
  const item = props.item;

  return (
      <Link>
    <div
      className="movie-card"
      style={{ backgroundImage: `url(${item.imga})` }}
    >

      <Button> <i className="bx bx-play"></i></Button>
    

      
    </div>
    <h3>{item.review}</h3>
    </Link>
  );
};

export default MovieList;
