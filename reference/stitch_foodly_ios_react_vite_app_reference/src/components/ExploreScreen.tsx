import { ScreenId, TransitionType } from "../types";

interface ExploreScreenProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export default function ExploreScreen({ onNavigate }: ExploreScreenProps) {
  return (
    <div className="min-h-screen bg-background text-on-surface pb-24">
      {/* Top AppBar (Sticky Glass Header) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-sm flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2 active:scale-95 transition-transform duration-200 cursor-pointer">
          <span className="material-symbols-outlined text-primary">location_on</span>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-on-surface-variant opacity-70 font-semibold leading-none">Deliver to</span>
            <h1 className="font-semibold text-sm leading-tight text-on-surface">Current Location</h1>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant text-sm">expand_more</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low active:scale-95 transition-transform duration-200">
          <span className="material-symbols-outlined text-on-surface">notifications</span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="pt-20 px-4">
        {/* Minimalist Search Bar */}
        <section className="mb-6">
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-on-surface-variant">search</span>
            </div>
            <input
              className="w-full h-14 pl-12 pr-12 bg-surface-container-low border-none rounded-xl text-sm text-on-surface placeholder:text-on-surface-variant/75 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Search for dishes or restaurants..."
              type="text"
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
              <span className="material-symbols-outlined text-primary cursor-pointer">tune</span>
            </div>
          </div>
        </section>

        {/* Categories (Horizontal Scrolling) */}
        <section className="mb-6 -mx-4 px-4 overflow-hidden">
          <div className="flex items-center justify-between mb-4 px-4">
            <h2 className="font-bold text-lg text-on-surface">Categories</h2>
            <button className="text-primary text-sm font-semibold">See All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 py-2">
            {/* Category Pill 1 */}
            <div className="flex flex-col items-center gap-2 shrink-0 cursor-pointer active:scale-90 transition-all">
              <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-sm">
                <span className="material-symbols-outlined text-[28px]">restaurant</span>
              </div>
              <span className="text-xs font-semibold text-on-surface">Dining</span>
            </div>
            {/* Category Pill 2 */}
            <div className="flex flex-col items-center gap-2 shrink-0 cursor-pointer active:scale-90 transition-all">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shadow-sm">
                <span className="material-symbols-outlined text-[28px]">bakery_dining</span>
              </div>
              <span className="text-xs font-medium text-on-surface-variant">Bakery</span>
            </div>
            {/* Category Pill 3 */}
            <div className="flex flex-col items-center gap-2 shrink-0 cursor-pointer active:scale-90 transition-all">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shadow-sm">
                <span className="material-symbols-outlined text-[28px]">local_bar</span>
              </div>
              <span className="text-xs font-medium text-on-surface-variant">Drinks</span>
            </div>
            {/* Category Pill 4 */}
            <div className="flex flex-col items-center gap-2 shrink-0 cursor-pointer active:scale-90 transition-all">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shadow-sm">
                <span className="material-symbols-outlined text-[28px]">icecream</span>
              </div>
              <span className="text-xs font-medium text-on-surface-variant">Dessert</span>
            </div>
            {/* Category Pill 5 */}
            <div className="flex flex-col items-center gap-2 shrink-0 cursor-pointer active:scale-90 transition-all">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shadow-sm">
                <span className="material-symbols-outlined text-[28px]">lunch_dining</span>
              </div>
              <span className="text-xs font-medium text-on-surface-variant">Burger</span>
            </div>
            {/* Category Pill 6 */}
            <div className="flex flex-col items-center gap-2 shrink-0 cursor-pointer active:scale-90 transition-all">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shadow-sm">
                <span className="material-symbols-outlined text-[28px]">ramen_dining</span>
              </div>
              <span className="text-xs font-medium text-on-surface-variant">Asian</span>
            </div>
          </div>
        </section>

        {/* Featured Restaurants (Vertical Feed) */}
        <section className="space-y-6">
          <h2 className="font-bold text-lg text-on-surface mb-2">Featured Restaurants</h2>

          {/* Restaurant Card 1 - The Golden Truffle */}
          <div
            className="bg-surface rounded-[24px] overflow-hidden card-shadow group active:scale-[0.98] transition-all duration-300 cursor-pointer border border-outline-variant/10"
            onClick={() => onNavigate(ScreenId.RestaurantDetails, "push")}
          >
            <div className="relative h-56 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHSHoYjtF9wdd6_mMGFztfGBDDfgBrGpb0rn81Pj1Jh1iQW_3EvyIk7iEireHotbzKV2RvrXAUh4Y3WFAYhzFXqibY_I9xsbAlLgS0B6XJ_VbSuWvEANEuAp_v_VX8fbNw3WMfDODjpAMI2nQkjviiG6BuluT0AxnIZYAZpHB-jSoZUKYQ7rVFSfrBohNgxdzyuL27MJyC9CIIOv1YwrnmuWQf4MctU2P0UJkJftFhIEN-z2TysOO_HOfkh-6OfEJlXeZ3ZMoI6VzM')",
                }}
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-xs font-bold text-on-surface">4.8</span>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-primary/95 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  15-25 min
                </span>
                <span className="bg-on-surface/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">Free Delivery</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg text-on-surface">The Golden Truffle</h3>
                <span className="text-on-surface-variant text-xs font-semibold bg-surface-container px-2 py-1 rounded-md">$$$ • Italian</span>
              </div>
              <p className="text-sm text-on-surface-variant line-clamp-1 leading-relaxed">Exquisite handmade pasta and premium white truffle selections.</p>
            </div>
          </div>

          {/* Restaurant Card 2 - Sakura Zenith */}
          <div className="bg-surface rounded-[24px] overflow-hidden card-shadow group active:scale-[0.98] transition-all duration-300 border border-outline-variant/10">
            <div className="relative h-56 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCO38PB5IfwU_PMhbpKO7qptKDYTVjB7KcHcAbbIcL_T0V8IasLzEM-PM5z3GjhBu4o5W3sCc5Ev7nKmpePiWWTBH6y8Vw4cHHmpIYvchZkyj0Y6tIg9nue4Ko8ye9SAv76OA1-2ylNISfrbkLT1T_KFYNE6zwEB1cUZix7MJuPRuGyj0MedYQHqYHp5Y4WHMHDgrMXWzVdSESpAi__qaqvhVwFJLLpibnT_16KmIFmnKIIrr2s1f6u5k1Whcg16coQv7hDDsU5LtuZ')",
                }}
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-xs font-bold text-on-surface">4.9</span>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-primary/95 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  20-35 min
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg text-on-surface">Sakura Zenith</h3>
                <span className="text-on-surface-variant text-xs font-semibold bg-surface-container px-2 py-1 rounded-md">$$$$ • Japanese</span>
              </div>
              <p className="text-sm text-on-surface-variant line-clamp-1 leading-relaxed">Contemporary fusion sushi with rare seasonal imports from Tokyo.</p>
            </div>
          </div>

          {/* Restaurant Card 3 - Wagyu Burger Lab */}
          <div
            className="bg-surface rounded-[24px] overflow-hidden card-shadow group active:scale-[0.98] transition-all duration-300 cursor-pointer border border-outline-variant/10"
            onClick={() => onNavigate(ScreenId.DishDetails, "push")}
          >
            <div className="relative h-56 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGkkHfwRwcsDkWD6E3FpCpct7oHwM3VZOZOSGP3XaNkNUal3__YoinHX33bQNOKBVVWE3ovqooBNb-dpcSTNHX6-TtLpEUGdZsWpUrubWKxFkE8H2fakZz2u5rUK0gZjuj2JgtiEz-VDzkQFHWy6x9L1cL864r5hOuX2sGX8s773aLhq8S6bG0XxalxuoCS9wvZ_B_OFxYkjB6BE0TDHxJ2ApwwqjPCJTDdggbuot0R9YZQkS4Dr5GgACe5RajYFk-KlBdcINm1SHI')",
                }}
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-xs font-bold text-on-surface">4.7</span>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-primary/95 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  10-20 min
                </span>
                <span className="bg-on-surface/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">Fast Delivery</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-lg text-on-surface">Wagyu Burger Lab</h3>
                <span className="text-on-surface-variant text-xs font-semibold bg-surface-container px-2 py-1 rounded-md">$$ • American</span>
              </div>
              <p className="text-sm text-on-surface-variant line-clamp-1 leading-relaxed">Scientifically perfected burgers using A5 wagyu beef and artisanal buns.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation Bar (Glass effect) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pt-2 pb-safe bg-surface/85 backdrop-blur-xl z-50 rounded-t-xl shadow-[0_-1px_0_0_rgba(0,0,0,0.05)] h-20 border-t border-outline-variant/10">
        <a className="flex flex-col items-center justify-center text-primary cursor-pointer active:scale-90 transition-all duration-200" onClick={() => {}}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="text-xs font-semibold">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer active:scale-90 transition-all duration-200" onClick={() => onNavigate(ScreenId.Orders, "none")}>
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="text-xs font-semibold">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer active:scale-90 transition-all duration-200" onClick={() => onNavigate(ScreenId.Profile, "none")}>
          <span className="material-symbols-outlined">person</span>
          <span className="text-xs font-semibold">Profile</span>
        </a>
      </nav>
    </div>
  );
}
