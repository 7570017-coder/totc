import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  MarketingWrapper,
  MarketingHeader,
  SeeAll,
  Pagination,
  PageButton,
  MarketingCard,
  MarketingImg,
  MarketingContent,
  MarketingMeta,
  Title,
  Desc,
  MarketingFooter,
  Author,
  Avatar,
  Price,
  OldPrice,
  NewPrice,
  MetaItem,
} from "./Styled";
import { FiChevronLeft, FiChevronRight, FiGrid, FiClock } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import images
import Pic14 from "/Pic14.png";
import Pic13_2 from "/Pic13.4.png";
import Pic20 from "/Pic20.png";

const Recommended = () => {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType>();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleCheckout = () => navigate("/CourseDetail");

  // All cards data - we'll use this to create individual slides
  const allCards = [
    {
      img: Pic14,
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      duration: "3 Month",
      category: "Design",
      oldPrice: "$100",
      newPrice: "$80",
      author: "Lina",
      avatar: Pic20,
    },
    {
      img: Pic13_2,
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      duration: "3 Month",
      category: "Design",
      oldPrice: "$100",
      newPrice: "$80",
      author: "Lina",
      avatar: Pic20,
    },
    {
      img: Pic14,
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      duration: "3 Month",
      category: "Design",
      oldPrice: "$100",
      newPrice: "$80",
      author: "Lina",
      avatar: Pic20,
    },
    {
      img: Pic13_2,
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      duration: "3 Month",
      category: "Design",
      oldPrice: "$100",
      newPrice: "$80",
      author: "Lina",
      avatar: Pic20,
    },
    // Add more cards for a better slider experience
    {
      img: Pic14,
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      duration: "2 Month",
      category: "Technology",
      oldPrice: "$120",
      newPrice: "$95",
      author: "Lina",
      avatar: Pic20,
    },
    {
      img: Pic13_2,
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      duration: "4 Month",
      category: "Data",
      oldPrice: "$150",
      newPrice: "$120",
      author: "Lina",
      avatar: Pic20,
    },
    {
      img: Pic14,
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      duration: "6 Month",
      category: "Development",
      oldPrice: "$200",
      newPrice: "$160",
      author: "Lina",
      avatar: Pic20,
    },
    {
      img: Pic13_2,
      title: "AWS Certified solutions Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      duration: "4 Month",
      category: "Development",
      oldPrice: "$180",
      newPrice: "$140",
      author: "Lina",
      avatar: Pic20,
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
    <div>
      <MarketingWrapper>
        <MarketingHeader>
          <h2>Recommended for you</h2>
          <SeeAll onClick={handleCheckout}>See all</SeeAll>
        </MarketingHeader>

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
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {allCards.map((card, index) => (
            <SwiperSlide key={index}>
              <MarketingCard>
                <MarketingImg
                  className="main-marketing-img"
                  src={card.img}
                  alt={card.title}
                />
                <MarketingContent>
                  <MarketingMeta>
                    <MetaItem>
                      <FiGrid /> {card.category}
                    </MetaItem>
                    <MetaItem>
                      <FiClock /> {card.duration}
                    </MetaItem>
                  </MarketingMeta>
                  <Title>{card.title}</Title>
                  <Desc>{card.desc}</Desc>
                  <MarketingFooter>
                    <Author>
                      <Avatar src={card.avatar} alt={card.author} />
                      <span>{card.author}</span>
                    </Author>
                    <Price>
                      <OldPrice>{card.oldPrice}</OldPrice>
                      <NewPrice>{card.newPrice}</NewPrice>
                    </Price>
                  </MarketingFooter>
                </MarketingContent>
              </MarketingCard>
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
      </MarketingWrapper>
    </div>
  );
};

export default Recommended;
