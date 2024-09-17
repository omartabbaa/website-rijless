"use client";
import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";

// CAROUSEL DATA

interface DataType {
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Najib Daraa",
    comment:
      "I thank you very much for your patience and teaching, Mr. Ahmed. I have become proficient in driving with all comfort and confidence, thanks to God, and then thanks to you, Mr. Ahmed. Thank you from the heart.",
    imgSrc: "/photosTestimonials/Najib-Daraa.jpg",
  },
  {
    name: "Adham",
    comment:
      "Mr. Ahmed, thank you for your efforts. I am happy to know you. I hope you are always well",
    imgSrc: "/photosTestimonials/Adham.jpg",
  },
  {
    name: "Roos",
    comment: "bedankt meneer voor de leuke lessen en het vele lachen😊",
    imgSrc: "/photosTestimonials/Roos.jpg",
  },
  {
    name: "Kariem",
    comment:
      "The honorable Professor Ahmed, I would like to express my thanks and appreciation to you for the great efforts you made with me during the period of learning to drive. You have always been patient and understanding, and provided me with valuable advice that helped me improve my skills and build my confidence behind the wheel. Learning with you has been an enjoyable and rewarding experience, and I feel grateful to have been my guide on this journey. I truly appreciate the time and effort you have given me, and I am grateful for your patience and expertise. Thank you for everything, and I wish you every success in your career.",
    imgSrc: "/photosTestimonials/Kariem.jpg",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    return (
      <div id="testimonials-section" className="pt-20 pb-16 lg:py-32">
        <div className="mx-auto max-w-7xl sm:py-4 px-6 lg:px-8">
          <div className="text-center">
            <h3 id="text_hight_testomonials" className="text-4xl sm:text-6xl font-bold text-white my-14">
              Wat zeggen mijn studenten
            </h3>
          </div>

          <Slider {...settings}>
            {postData.map((item, i) => (
              <div key={i} className="px-4 py-10">
                <div className="bg-white shadow-lg p-10 rounded-3xl relative transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <Image
                      src={item.imgSrc}
                      alt={item.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h4 className="text-base font-medium text-gray-600 mb-4">
                    {item.comment}
                  </h4>
                  <hr className="border-gray-300 mb-4" />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
