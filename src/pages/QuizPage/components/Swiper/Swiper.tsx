import React, { useRef } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Props } from "./types";
import { QuizCard } from "@/components/QuizCard";

const Swiper: React.FC<Props> = ({ quizzes, sliderWidth, direction }) => {
  const verticalSliderRef = useRef<HTMLDivElement | null>(null);

  if (direction === "horizontal")
    return (
      <SwiperComponent
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={10000}
        loop={true}
      >
        {quizzes?.map((currentQuiz) => (
          <SwiperSlide key={currentQuiz.id}>
            <div
              style={{
                minWidth: sliderWidth ? `${sliderWidth / 16}rem` : "100%",
              }}
            >
              <QuizCard
                direction="horizontal"
                type="similar"
                questions={currentQuiz.questions}
                title={currentQuiz.title}
                image={currentQuiz.image}
                categories={currentQuiz.categories}
                total_filled={currentQuiz.total_filled}
                level={currentQuiz.level}
                id={currentQuiz.id}
              />
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    );
  if (direction === "vertical")
    return (
      <div ref={verticalSliderRef} style={{ height: "100vh" }}>
        <SwiperComponent
          modules={[Autoplay]}
          direction="vertical"
          spaceBetween={40}
          slidesPerView={3}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={10000}
          loop={true}
          style={{ height: "100rem" }}
        >
          {quizzes?.map((currentQuiz) => (
            <SwiperSlide key={currentQuiz.id}>
              <QuizCard
                direction="vertical"
                type="similar"
                questions={currentQuiz.questions}
                title={currentQuiz.title}
                image={currentQuiz.image}
                categories={currentQuiz.categories}
                total_filled={currentQuiz.total_filled}
                level={currentQuiz.level}
                id={currentQuiz.id}
              />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    );
};

export default Swiper;
