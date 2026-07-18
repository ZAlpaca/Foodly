import { ScreenId, TransitionType } from "../types";

interface WelcomeScreenProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export default function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background">
      {/* High-Impact Hero Section */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-[65%] relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnEy49k5-QdUGbZ4tEYoIY1T51kXYUT0WsYh61VhDatSpWVWFkNGvqt36qN38cJwGn6DtrEnJLa3C1RRPYjgg7tysHB4owp-LGxP7KzjsUG559YtjUVIOMCcvyQA_YzdEuoPt1_eaos0mH5Mcjwnr6cqRBkhItIx91gNrBb23B01f_LED5CQ9BRlFumSdHAKRpF8M6J285zp-mdRqYLzmF34h5p6mPnYuJL8XFkxEAcF-s12PTUac5cNtK12KKB_WGDgk0kXQUCDWo')",
            }}
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
      </div>

      {/* Brand Identity: Minimalist Logo */}
      <header className="relative z-10 pt-16 px-4 flex justify-center">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold text-3xl tracking-tighter">Foodly</span>
        </div>
      </header>

      {/* Onboarding Content Canvas */}
      <div className="relative z-10 px-4 pb-12 flex flex-col items-center text-center mt-auto">
        {/* Animated Decorative Element */}
        <div className="mb-8 animate-float">
          <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-on-primary-fixed text-4xl">restaurant</span>
          </div>
        </div>

        {/* Typography & Copy */}
        <h1 className="font-sans font-extrabold text-4xl text-on-surface mb-4 max-w-[320px] leading-tight tracking-tight">
          Elevate Your Culinary Journey
        </h1>
        <p className="font-sans text-base text-on-surface-variant mb-8 max-w-[340px] leading-relaxed">
          Experience premium dining from the city's finest chefs, delivered with the precision and elegance you deserve.
        </p>

        {/* Interaction Layer: CTA */}
        <div className="w-full max-w-md flex flex-col gap-4">
          <button
            className="h-[54px] w-full bg-primary text-on-primary font-semibold text-lg rounded-[24px] shadow-[0_4px_20px_rgba(179,41,15,0.2)] active:scale-95 hover:bg-opacity-95 transition-all duration-200 flex items-center justify-center gap-2"
            onClick={() => onNavigate(ScreenId.Explore, "push")}
          >
            Get Started
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button
            className="h-[54px] w-full bg-surface-container-low text-on-surface font-semibold text-base rounded-[24px] active:scale-95 hover:bg-surface-container-high transition-all duration-200"
            onClick={() => onNavigate(ScreenId.Explore, "push")}
          >
            Log In
          </button>
        </div>

        {/* Legal/Small Print */}
        <footer className="mt-8 opacity-45">
          <p className="text-xs text-on-surface-variant font-medium">
            By continuing, you agree to our Terms of Service
          </p>
        </footer>
      </div>

      {/* Aesthetic Lighting/Atmospheric Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </div>
  );
}
