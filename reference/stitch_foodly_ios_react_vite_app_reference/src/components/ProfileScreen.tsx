import { ScreenId, TransitionType } from "../types";

interface ProfileScreenProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased pb-32">
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-sm flex items-center justify-between px-4 h-14 border-b border-outline-variant/10">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary font-bold">location_on</span>
          <h1 className="font-extrabold text-base">Current Location</h1>
        </div>
        <button className="active:scale-95 transition-transform duration-200">
          <span className="material-symbols-outlined text-on-surface-variant font-bold">notifications</span>
        </button>
      </header>

      {/* Profile Flow */}
      <main className="pt-20 px-4 max-w-2xl mx-auto">
        {/* Profile Header Section */}
        <section className="flex flex-col items-center mb-8">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 rounded-full overflow-hidden profile-card-shadow border-4 border-surface-container-lowest transition-transform group-active:scale-95 duration-200">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4QjyAfvmK9IAXrdsNNng9VMSw8a3Nfqbg2gP6KkZcZjUDAUtiPq3ga56o_ptUFnstv-y545gXlofHVkHUFKss5KDCPDteZv64MjSUxb-KBaVdzdaoeSvOnaHMUeX--Vtqim12l0dGpuoNZAv-vZSpYIvXYykaQ99SVK0K11qvQXoolzo57_matrMsXBqLFd9OttSiXEeHwxwmwCi7pKNfZ__6ZMiTbZaWOGQ7vuKQA0QfZ5h8_OpAN0xik-6VSm_LAYR15fB4h55V"
                alt="Alexander West"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-on-primary p-1.5 rounded-full shadow-lg border-2 border-surface">
              <span className="material-symbols-outlined text-[18px]">edit</span>
            </div>
          </div>
          <h2 className="mt-4 font-extrabold text-2xl text-on-surface">Alexander West</h2>
          <p className="text-on-surface-variant text-sm font-semibold opacity-70">alexander.west@premium.com</p>
        </section>

        {/* Profile Menu Group */}
        <section className="bg-surface-container-lowest rounded-2xl overflow-hidden profile-card-shadow mb-8 border border-outline-variant/15 shadow-sm">
          {/* Personal Info */}
          <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors duration-150 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-container/10">
                <span className="material-symbols-outlined text-primary font-bold">person</span>
              </div>
              <span className="text-sm font-bold text-on-surface">Personal Info</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
          </button>
          <div className="h-[1px] bg-outline-variant/20 ml-16" />

          {/* Payment Methods */}
          <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors duration-150 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-secondary-container/10">
                <span className="material-symbols-outlined text-secondary font-bold">credit_card</span>
              </div>
              <span className="text-sm font-bold text-on-surface">Payment Methods</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
          </button>
          <div className="h-[1px] bg-outline-variant/20 ml-16" />

          {/* Address Book */}
          <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors duration-150 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-tertiary-container/10">
                <span className="material-symbols-outlined text-tertiary font-bold">location_on</span>
              </div>
              <span className="text-sm font-bold text-on-surface">Address Book</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
          </button>
          <div className="h-[1px] bg-outline-variant/20 ml-16" />

          {/* Promotions */}
          <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors duration-150 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-secondary-container/20">
                <span className="material-symbols-outlined text-secondary font-bold">sell</span>
              </div>
              <span className="text-sm font-bold text-on-surface">Promotions</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
          </button>
          <div className="h-[1px] bg-outline-variant/20 ml-16" />

          {/* Settings */}
          <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low transition-colors duration-150 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-variant">
                <span className="material-symbols-outlined text-on-surface-variant font-bold">settings</span>
              </div>
              <span className="text-sm font-bold text-on-surface">Settings</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
          </button>
        </section>

        {/* Logout Section */}
        <section className="mt-8 px-4">
          <button
            className="w-full h-[54px] bg-surface-container-low hover:bg-surface-container-high rounded-2xl flex items-center justify-center gap-2 text-primary text-sm font-extrabold active:scale-[0.98] transition-all duration-200 border border-outline-variant/25 cursor-pointer shadow-sm"
            onClick={() => onNavigate(ScreenId.Welcome, "push_back")}
          >
            <span className="material-symbols-outlined font-bold">logout</span>
            Logout
          </button>
          <p className="text-center mt-6 text-on-surface-variant text-xs font-semibold opacity-40">Version 2.4.1 (Premium)</p>
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pt-2 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-1px_0_0_rgba(0,0,0,0.05)] z-50 rounded-t-xl h-20 border-t border-outline-variant/10">
        <button
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer active:scale-90 transition-all duration-200 px-4 py-2 bg-transparent border-none"
          onClick={() => onNavigate(ScreenId.Explore, "none")}
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-xs font-semibold">Home</span>
        </button>
        <button
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer active:scale-90 transition-all duration-200 px-4 py-2 bg-transparent border-none"
          onClick={() => onNavigate(ScreenId.Orders, "none")}
        >
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="text-xs font-semibold">Orders</span>
        </button>
        <button
          className="flex flex-col items-center justify-center text-primary cursor-pointer active:scale-90 transition-all duration-200 px-4 py-2 bg-transparent border-none"
          onClick={() => {}}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="text-xs font-semibold">Profile</span>
        </button>
      </nav>
    </div>
  );
}
