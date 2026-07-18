import { useState } from "react";
import { ScreenId, TransitionType } from "../types";

interface DishDetailScreenProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export default function DishDetailScreen({ onNavigate }: DishDetailScreenProps) {
  const [quantity, setQuantity] = useState(1);
  const basePrice = 24.5;
  const totalPrice = basePrice * quantity;

  return (
    <div className="min-h-screen bg-background text-on-surface select-none pb-32">
      {/* Top Navigation (iOS Style Back) */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-14 bg-transparent pointer-events-none">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-surface/80 glass-nav active:scale-95 transition-transform shadow-sm pointer-events-auto"
          onClick={() => onNavigate(ScreenId.RestaurantDetails, "push_back")}
        >
          <span className="material-symbols-outlined text-on-surface" style={{ fontVariationSettings: "'wght' 500" }}>chevron_left</span>
        </button>
        <div className="flex gap-2 pointer-events-auto">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface/80 glass-nav active:scale-95 transition-transform shadow-sm">
            <span className="material-symbols-outlined text-on-surface">share</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface/80 glass-nav active:scale-95 transition-transform shadow-sm">
            <span className="material-symbols-outlined text-on-surface">favorite</span>
          </button>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <main className="pb-12">
        {/* Hero Image */}
        <section className="relative w-full h-[390px] overflow-hidden">
          <img
            alt="The Truffle Wagyu Burger"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpJ3xde-leCD8MfCoGLGgcQNQG0wrtywpKI0RwG5Pd9xtQZGAnQ4xQAeA5rNVEKVlxg-qMe1av_2frjVuEsGEeo4ro9vuJlhXERC7aBQQNtEB2TQnRidGY3Xqr5Tv1OvLXMAVozmOiSH8IslB30-TxkPmpOqHh1JsgKX_xSWdsonrzIutVW1uYWr44_kLQ8obRY_jEJJpA49wxbVhEGJz6peUiTC1aPvWNMArFhrfQvFXLIcASnh7rFSXe5cQMMKOBDOQKmoaz1PUQ"
          />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Content Body */}
        <div className="px-4 -mt-8 relative z-10">
          {/* Header Section */}
          <div className="flex flex-col gap-1 mb-6">
            <div className="flex justify-between items-start">
              <h1 className="font-extrabold text-3xl text-on-surface tracking-tight">The Truffle Wagyu</h1>
              <span className="font-bold text-2xl text-primary">${basePrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-secondary">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant">(4.8 • 120+ reviews)</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Our signature masterpiece featuring a 200g Wagyu beef patty, infused with black truffle oil, topped with 24-month aged Gruyère, caramelized balsamic onions, and wild arugula on a handcrafted toasted brioche bun.
            </p>
          </div>

          {/* Nutritional Info (Bento Style) */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center justify-center border border-outline-variant/15">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant/70 mb-0.5">Cal</span>
              <span className="font-bold text-base text-on-surface">840</span>
            </div>
            <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center justify-center border border-outline-variant/15">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant/70 mb-0.5">Prot</span>
              <span className="font-bold text-base text-on-surface">42g</span>
            </div>
            <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center justify-center border border-outline-variant/15">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant/70 mb-0.5">Fat</span>
              <span className="font-bold text-base text-on-surface">54g</span>
            </div>
            <div className="bg-surface-container-low rounded-xl p-3 flex flex-col items-center justify-center border border-outline-variant/15">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant/70 mb-0.5">Carb</span>
              <span className="font-bold text-base text-on-surface">38g</span>
            </div>
          </div>

          {/* Customization Options */}
          <section className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-base text-on-surface">Add extra toppings</h2>
              <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full uppercase tracking-wider">Optional</span>
            </div>
            <div className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden ios-shadow border border-outline-variant/15">
              {/* Option 1 */}
              <label className="flex items-center justify-between p-4 cursor-pointer active:bg-surface-container transition-colors">
                <div className="flex items-center gap-3">
                  <input className="w-5 h-5 rounded-md border-outline text-primary focus:ring-primary cursor-pointer" type="checkbox" />
                  <span className="text-sm font-semibold text-on-surface">Extra Gruyère Cheese</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant">+$2.50</span>
              </label>
              <div className="h-[1px] bg-outline-variant/15 ml-12" />
              {/* Option 2 */}
              <label className="flex items-center justify-between p-4 cursor-pointer active:bg-surface-container transition-colors">
                <div className="flex items-center gap-3">
                  <input className="w-5 h-5 rounded-md border-outline text-primary focus:ring-primary cursor-pointer" type="checkbox" />
                  <span className="text-sm font-semibold text-on-surface">Smoked Streaky Bacon</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant">+$3.00</span>
              </label>
              <div className="h-[1px] bg-outline-variant/15 ml-12" />
              {/* Option 3 */}
              <label className="flex items-center justify-between p-4 cursor-pointer active:bg-surface-container transition-colors">
                <div className="flex items-center gap-3">
                  <input className="w-5 h-5 rounded-md border-outline text-primary focus:ring-primary cursor-pointer" type="checkbox" />
                  <span className="text-sm font-semibold text-on-surface">Truffle Aioli Dip</span>
                </div>
                <span className="text-xs font-bold text-on-surface-variant">+$1.50</span>
              </label>
            </div>
          </section>

          {/* Quantity Selector */}
          <section className="mb-6 flex items-center justify-between">
            <h2 className="font-bold text-base text-on-surface">Quantity</h2>
            <div className="flex items-center bg-surface-container-high rounded-full p-1 gap-4 shadow-sm">
              <button
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest text-on-surface shadow-sm active:scale-90 transition-all ${
                  quantity <= 1 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={quantity <= 1}
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <span className="material-symbols-outlined text-sm font-bold">remove</span>
              </button>
              <span className="font-bold text-base w-6 text-center">{quantity}</span>
              <button
                className="w-10 h-10 flex items-center justify-center bg-primary text-on-primary rounded-full shadow-sm active:scale-90 transition-all cursor-pointer"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <span className="material-symbols-outlined text-sm font-bold">add</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 glass-nav bg-surface/90 pb-safe border-t border-outline-variant/10 shadow-lg">
        <div className="px-4 py-4 flex items-center gap-4 max-w-2xl mx-auto">
          <div className="flex flex-col min-w-[80px]">
            <span className="text-xs font-semibold text-on-surface-variant">Total</span>
            <span className="font-extrabold text-xl text-on-surface">${totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="flex-1 h-14 bg-primary text-on-primary font-bold text-base rounded-2xl active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:bg-opacity-95"
            onClick={() => onNavigate(ScreenId.Cart, "slide_up")}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
