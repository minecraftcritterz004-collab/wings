import React from 'react';
import { Heart } from 'lucide-react';
import Image from 'next/image';

const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <Heart className="absolute top-20 left-10 w-12 h-12 text-pink-400 animate-rotate-slow fill-pink-400/20" />
        <Heart className="absolute top-40 left-20 w-8 h-8 text-pink-300 animate-float-spin fill-pink-300/20" />
        <Heart className="absolute top-32 right-16 w-10 h-10 text-pink-400 animate-twinkle fill-pink-400/20" />
        <Heart className="absolute bottom-40 left-16 w-10 h-10 text-pink-300 animate-rotate-reverse fill-pink-300/20" />
        <Heart className="absolute bottom-60 right-20 w-12 h-12 text-pink-400 animate-float-gentle fill-pink-400/20" />
        <Heart className="absolute top-1/2 left-8 w-8 h-8 text-pink-300 animate-rotate-slow fill-pink-300/20" />
        <Heart className="absolute top-1/3 right-12 w-8 h-8 text-pink-400 animate-float-spin fill-pink-400/20" />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/png-transparent-fried-chicken-buffalo-wing-wingstop-restaurants-flavor-food-fried-chicken-removebg-preview-1765871998352.png?width=8000&height=8000&resize=contain"
            alt=""
            width={80}
            height={80}
            className="absolute top-24 left-12 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/9EmrX3Z-1765872315257.png?width=8000&height=8000&resize=contain"
            alt=""
            width={160}
            height={160}
            className="absolute top-32 right-16 w-40 h-40 object-contain animate-float-gentle"
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/556-5565451_pint-glass-hd-png-download-removebg-preview-1765872390906.png?width=8000&height=8000&resize=contain"
            alt=""
            width={160}
            height={160}
            className="absolute top-1/3 left-20 w-40 h-40 object-contain animate-float-gentle"
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/556-5565451_pint-glass-hd-png-download-removebg-preview-1765871733517.png?width=8000&height=8000&resize=contain"
            alt=""
            width={160}
            height={160}
            className="absolute top-1/2 right-24 w-40 h-40 object-contain animate-float-gentle"
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Sp6vvrX-1765869925452.png?width=8000&height=8000&resize=contain"
            alt=""
            width={160}
            height={160}
            className="absolute bottom-40 left-16 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/yI9Y2Sx-1765869298978.png?width=8000&height=8000&resize=contain"
            alt=""
            width={80}
            height={80}
            className="absolute bottom-32 right-20 w-20 h-20 object-contain animate-float-gentle"
          />
      </div>
    </>
  );
};

export default AnimatedBackground;