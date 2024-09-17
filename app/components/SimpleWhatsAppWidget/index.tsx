"use client";

import "@/app/whatsapp.css";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface WhatsAppChatWidgetProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppChatWidget: React.FC<WhatsAppChatWidgetProps> = ({ phoneNumber, message = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
 const baseUrl = "https://api.whatsapp.com/send/"
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const whatsappUrl = `${baseUrl}?phone=${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

  return (
    <div className={`whatsapp-link ${isVisible ? 'visible' : ''}`}>
      <a
        href={whatsappUrl}
        target='_blank'
        rel="noopener noreferrer"
        className="relative block"
      >
        <span className='absolute left-0 top-0 -z-10 flex size-full items-center justify-center'>
          <span className='animate-ping rounded-full bg-green-500 opacity-75 size-10'></span>
        </span>
        <Image 
          src="/WhatsAppLogo.png" 
          alt="WhatsApp" 
          width={55} 
          height={55} 
          className='whatsapp-icon z-10'
        />
      </a>
    </div>
  );
};

export default WhatsAppChatWidget;
