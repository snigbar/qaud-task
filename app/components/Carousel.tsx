import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../lib/CustomArrows";
import { TRecipe } from "@/store/store";
import Card from "./Card";

export default function Carousel({ data }: { data: TRecipe[] }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="w-20" />,
    prevArrow: <SamplePrevArrow className="w-20" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data && data.map((val) => <Card data={val} key={val.Id}></Card>)}
    </Slider>
  );
}
