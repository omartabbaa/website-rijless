'use client';
import Image from "next/image";
import "@/app/banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="Banner-left-side">
          <div className="text-content">
            <h1 className="banner-title">
              Autorijschool Rabia
            </h1>

            <div className="button-logo-container-banner">
              <div className="logo-container">
                <Image 
                  src="/logo_auto_upgrade2.png" 
                  alt="Auto Upgrade Logo" 
                  width={200}
                  height={100}
                  className="logo-image"
                />
              </div>

              <a href="#services-section" className="button-wrapper">
                <button className="begin-button">Begin nu met lessen.</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-image-container">
        <Image 
          src="/photosTestimonials/thumbs-up-15.jpg" 
          alt="hero-image" 
          layout='fill'
          objectFit='cover'
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default Banner;
