import Image from 'next/image';
import { Gift, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
      <div className="max-w-lg mx-auto text-center">
                  <div className="mb-0 flex flex-col items-center p-0 m-0">
                        <div className="w-35 mb-0 p-0 m-0">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WING.D-0148b42a-1765874273955.png"
                      alt="Wingstop Logo"
                      width={176}
                      height={176}
                      className="w-full h-auto object-contain drop-shadow-xl block p-0 m-0"
                    />
                  </div>

              <div className="relative mb-6 mt-6 animate-float">
            <div className="relative inline-block">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Untitled-design-3-1765878937787.png?width=8000&height=8000&resize=contain"
                      alt="Ranch Money Wingstop Card"
                      width={288}
                      height={435}
                      className="w-56 h-auto mx-auto drop-shadow-2xl relative z-10"
                    />
              <div className="absolute inset-0 bg-gradient-radial from-yellow-500/10 to-transparent blur-3xl -z-10"></div>
            </div>
          </div>

            <h1 className="text-lg md:text-xl font-bold text-foreground mb-1.5 text-shadow-glow px-2 relative">
              Unlock{' '}
                <span className="inline-flex items-center gap-1" style={{ color: '#E4B363' }}>
                  Wingstop Rewards
                  <Gift className="w-4 h-4 inline-block" style={{ color: '#E4B363' }} />
              </span>
            </h1>

          <p className="text-xs md:text-sm text-foreground/95 mb-2 font-medium text-shadow-strong px-2 relative">
            Here's how to claim your free{' '}
              <span className="font-bold !w-[148px] !h-[17px]" style={{ color: '#E4B363' }}>$500 Wingstop gift card</span>
          </p>
      </div>
    </div>
  );
};

export default HeroSection;
