"use client"
import Slider from 'react-slick';
import React, { Component } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js Image component

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: '',
        name: 'John Doe',
        imgSrc: '/photosTestimonials/thumbs-up-13.jpg',
    },
    {
        profession: '',
        name: 'Jane Smith',
        imgSrc: '/photosTestimonials/thumbs-up-nine.jpg',
    },
    {
        profession: '',
        name: 'Michael Johnson',
        imgSrc: '/photosTestimonials/thumbs-up-seven.jpg',
    },
    {
        profession: '',
        name: 'Sarah Lee',
        imgSrc: '/photosTestimonials/thumbs-up-three.jpg',
    },
    {
        profession: '',
        name: 'Emily Brown',
        imgSrc: '/photosTestimonials/thubs-up-five.jpg',
    },
    {
        profession: '',
        name: 'Chris Wilson',
        imgSrc: '/photosTestimonials/tumbs-up-eleven.jpg',
    },
    {
        profession: '',
        name: 'Chris Wilson',
        imgSrc: '/photosTestimonials/thumbs up.jpg',
    },
    {
        profession: '',
        name: 'Chris Wilson',
        imgSrc: '/photosTestimonials/thumbs-up.jpg',
    },
    {
        profession: '',
        name: 'Chris Wilson',
        imgSrc: '/photosTestimonials/image.jpg',
    },
    {
        profession: '',
        name: 'Chris Wilson',
        imgSrc: '/photosTestimonials/thumbs-up-14.jpg',
    },
    {
        profession: '',
        name: 'Chris Wilson',
        imgSrc: '/photosTestimonials/thumbs-up-15.jpg',
    },
    {
        profession: '',
        name: 'Chris Wilson',
        imgSrc: '/photosTestimonials/thumbs-up-16.jpg',
    },
    {
        profession: '',
        name: 'Chris Wilson',
        imgSrc: '/photosTestimonials/thumbs-up-six.jpg',
    },


    {
        profession: '',
        name: 'Chris Wilson',
        imgSrc: '/photosTestimonials/thumbs-up-17.jpg',
    },

    {
        profession: '',
        name: 'Chris Wilson',
        imgSrc: '/photosTestimonials/thumbs-up-18.jpg',
    },
    {
        profession: '',
        name: 'Chris Wilson',
        imgSrc: '/photosTestimonials/thumbs-up-19.jpg',
    },
   
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    },
                },
            ],
        };

        return (
            <div className="bg-wework py-32">
                <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Geslaagde studenten</h3>
                    </div>
                </div>

                <Slider {...settings}>
                    {postData.map((item, i) => (
                        <div key={i}>
                            <div className="bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl">
                                <div className="relative">
                                    <Image src={item.imgSrc} alt={item.name} width={282} height={282} className="inline-block m-auto rounded-2xl" />

                                </div>
                                <h4 className="text-4xl font-bold pt-14"></h4>
                                <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50">{item.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
