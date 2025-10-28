import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  Section,
  HeaderRow,
  Card,
  CardImg,
  CardBody,
  Title,
  AuthorRow,
  ProgressRow,
  ProgressOuter,
  ProgressInner,
  LessonText,
  Pagination,
  PageButton,
} from "./Styled";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Pic13_5 from "/Pic13.5.png";
import Pic22 from "/Pic22.png";
import Pic19_2 from "/Pic19.2.png";
import AvatarImg from "/Pic20.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ContinueLearning: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      img: Pic13_5,
      progress: "70%",
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      img: Pic22,
      progress: "70%",
    },
    {
      id: 3,
      title: "AWS Certified Solutions Architect",
      img: Pic19_2,
      progress: "70%",
    },
    // Add more courses for better looping effect
    {
      id: 4,
      title: "AWS Certified Solutions Architect",
      img: Pic13_5,
      progress: "50%",
    },
    {
      id: 5,
      title: "AWS Certified Solutions Architect",
      img: Pic22,
      progress: "80%",
    },
    {
      id: 6,
      title: "AWS Certified Solutions Architect",
      img: Pic19_2,
      progress: "30%",
    },
  ];

  const swiperRef = useRef<SwiperType>();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (swiperRef.current) {
      // @ts-ignore
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      // @ts-ignore
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <Section>
      <HeaderRow>
        <h2>Welcome back, ready for your next lesson?</h2>
        <a>View history</a>
      </HeaderRow>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {courses.map((c) => (
          <SwiperSlide key={c.id}>
            <Card>
              <CardImg className="main-course-img" src={c.img} alt={c.title} />
              <CardBody>
                <Title>{c.title}</Title>
                <AuthorRow>
                  <img src={AvatarImg} alt="Author avatar" />
                  <span>Lina</span>
                </AuthorRow>
                <ProgressRow>
                  <ProgressOuter>
                    <ProgressInner w={c.progress} />
                  </ProgressOuter>
                  <LessonText>Lesson 5 of 7</LessonText>
                </ProgressRow>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <Pagination>
        <PageButton
          ref={prevRef}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FiChevronLeft />
        </PageButton>
        <PageButton
          ref={nextRef}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FiChevronRight />
        </PageButton>
      </Pagination>
    </Section>
  );
};

export default ContinueLearning;
