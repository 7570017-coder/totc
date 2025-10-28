import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  Section,
  Container,
  Heading,
  Card,
  Avatar,
  Name,
  Text,
  ArrowButton,
  AppSection,
  AppText,
  AppButtons,
  AppButton,
} from "./Styled";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaAndroid, FaApple } from "react-icons/fa";

import Pic from "/Pic20.2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SAMPLE_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";

const Students: React.FC = () => {
  const swiperRef = useRef<SwiperType>();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const items = [
    { id: 1, name: "Bulkin Simons", text: SAMPLE_TEXT, img: Pic },
    { id: 2, name: "Bulkin Simons", text: SAMPLE_TEXT, img: Pic },
    { id: 3, name: "Bulkin Simons", text: SAMPLE_TEXT, img: Pic },
    { id: 4, name: "Bulkin Simons", text: SAMPLE_TEXT, img: Pic },
    { id: 5, name: "Bulkin Simons", text: SAMPLE_TEXT, img: Pic },
    { id: 6, name: "Bulkin Simons", text: SAMPLE_TEXT, img: Pic },
    { id: 7, name: "Bulkin Simons", text: SAMPLE_TEXT, img: Pic },
    { id: 8, name: "Bulkin Simons", text: SAMPLE_TEXT, img: Pic },
  ];

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
      <Container>
        <Heading>What our students have to say</Heading>

        <div style={{ position: "relative" }}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <Card>
                  <Avatar src={item.img} alt={item.name} />
                  <Name>{item.name}</Name>
                  <Text>{item.text}</Text>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <ArrowButton
            ref={prevRef}
            side="left"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FiChevronLeft />
          </ArrowButton>
          <ArrowButton
            ref={nextRef}
            side="right"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FiChevronRight />
          </ArrowButton>
        </div>

        <AppSection>
          <AppText>APP is available for free</AppText>
          <AppButtons>
            <AppButton href="#" color="#1fb6ff">
              <FaAndroid /> Android APP
            </AppButton>
            <AppButton href="#" color="#21c0be">
              <FaApple /> IOS APP
            </AppButton>
          </AppButtons>
        </AppSection>
      </Container>
    </Section>
  );
};

export default Students;
