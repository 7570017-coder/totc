import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  Section,
  Header,
  Title,
  SeeAll,
  Card,
  Content,
  BlogTitle,
  Author,
  Description,
  Footer,
  ReadMore,
  Views,
  Pagination,
  PageButton,
} from "./Styled";

import { FaEye } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Pic1 from "/Pic1.2.png";
import Pic13 from "/Pic13.3.png";
import Avatar from "/Pic20.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Related: React.FC = () => {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType>();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleCheckout = () => navigate("/BlogDetail");

  const blogs = [
    {
      img: Pic1,
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      author: "Lina",
      desc: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251,232",
    },
    {
      img: Pic13,
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      author: "Lina",
      desc: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251,232",
    },
    // Add more blogs for better looping
    {
      img: Pic1,
      title: "EdTech startup raises $45 million for virtual classroom platform",
      author: "Lina",
      desc: "New platform aims to revolutionize online education with interactive features and AI-powered tools...",
      views: "189,456",
    },
    {
      img: Pic13,
      title: "Online learning platform sees 300% growth during pandemic",
      author: "Lina",
      desc: "The shift to remote education has accelerated digital transformation in the education sector...",
      views: "312,789",
    },
    {
      img: Pic1,
      title: "University partners with tech company for hybrid learning",
      author: "Lina",
      desc: "New collaboration brings cutting-edge technology to traditional classroom settings...",
      views: "167,890",
    },
    {
      img: Pic13,
      title: "The future of education: Blended learning models",
      author: "Lina",
      desc: "Experts predict that hybrid learning will become the new standard in education post-pandemic...",
      views: "278,901",
    },
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
      <Header>
        <Title>Related Blog</Title>
        <SeeAll onClick={handleCheckout}>See all</SeeAll>
      </Header>

      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 100,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {blogs.map((blog, i) => (
          <SwiperSlide key={i}>
            <Card>
              <img className="main-blog-img" src={blog.img} alt={blog.title} />
              <Content>
                <BlogTitle>{blog.title}</BlogTitle>
                <Author>
                  <img src={Avatar} alt={blog.author} />
                  <span>{blog.author}</span>
                </Author>
                <Description>{blog.desc}</Description>
                <Footer>
                  <ReadMore href="#">Read more</ReadMore>
                  <Views>
                    <FaEye />
                    {blog.views}
                  </Views>
                </Footer>
              </Content>
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

export default Related;
