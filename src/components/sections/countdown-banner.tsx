"use client";

import { Clock, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState(309); // 5:09 in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="border-b-2 border-accent/30 py-2 px-4 text-center relative z-10 overflow-hidden !bg-[#6b0f0f]">
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <div className="flex justify-around">
          <Heart className="w-4 h-4 text-pink-400/40 -mt-2 fill-current" />
          <Heart className="w-3 h-3 text-pink-300/30 -mt-1 fill-current" />
          <Heart className="w-5 h-5 text-pink-400/40 -mt-2 fill-current" />
          <Heart className="w-4 h-4 text-pink-300/40 -mt-2 fill-current" />
          <Heart className="w-3 h-3 text-pink-400/30 -mt-1 fill-current" />
          <Heart className="w-5 h-5 text-pink-300/40 -mt-2 fill-current" />
          <Heart className="w-4 h-4 text-pink-400/40 -mt-2 fill-current" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 max-w-xl mx-auto relative">
        <Clock className="w-4 h-4 text-foreground flex-shrink-0" />
        <Heart className="w-3 h-3 text-pink-300/50 animate-pulse flex-shrink-0 fill-current" />
        <p className="text-foreground text-xs md:text-sm font-medium">
          <span className="font-bold">
            You have {formattedTime} minutes left to unlock your Wingstop reward
          </span>
        </p>
        <Heart className="w-3 h-3 text-pink-300/50 animate-pulse flex-shrink-0 fill-current" />
      </div>

      <p className="text-foreground/90 text-[10px] mt-0.5">
        Complete the steps before access expires
      </p>
    </div>
  );
};

export default CountdownBanner;