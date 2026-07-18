import { useState } from "react";
import { ScreenId, TransitionType } from "../types";

interface RestaurantDetailScreenProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

export default function RestaurantDetailScreen({ onNavigate }: RestaurantDetailScreenProps) {
  const [activeTab, setActiveTab] = useState<"menu" | "reviews" | "info">("menu");

  return (
    <div className="min-h-screen bg-background text-on-surface pb-32">
      {/* Top App Bar (Header with Navigation) */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="flex items-center justify-between px-4 h-14 w-full bg-surface/85 backdrop-blur-md shadow-sm">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest/80 shadow-sm active:scale-95 transition-transform"
            onClick={() => onNavigate(ScreenId.Explore, "push_back")}
          >
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest/80 shadow-sm active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-on-surface">search</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-lowest/80 shadow-sm active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-on-surface" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Image Section */}
      <section className="relative h-[340px] w-full overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbrNVfLautwkdPP9rDOrRIQc73oRJss1ABrQeaxkSpHyDlNr8lDdMMKawClAJ9QWajM85IvAIW4jGWdDzkAhdMfFnKwhqIQPnUa_mGfDsM_e3dk0m96zM3PqyJrNUd3D-M1ULTZ3Zr9Gzce-EXN_eL9KtjWCyjfANROS3ebXwCNS6KeCiHfM-__k4zq3zV8HwoC5gNhexBxgkFHYyJ8kNBH3yCKVHeop5UMmo6gQAZ82KeNR96XYobTOjXk05yXDA8cJYmobpWvJ70')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
      </section>

      {/* Floating Info Card */}
      <section className="relative -mt-12 px-4 z-10">
        <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-outline-variant/20">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="font-extrabold text-2xl text-on-surface mb-1">Maison de l'Élégance</h1>
              <p className="text-sm text-on-surface-variant font-medium">Modern French Fine Dining • $$$</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 bg-secondary-container px-3 py-1 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-xs font-bold text-on-secondary-container">4.9</span>
              </div>
              <p className="text-xs font-semibold text-on-surface-variant mt-2">200+ reviews</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/20">
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-primary mb-1">schedule</span>
              <span className="text-xs font-semibold text-on-surface-variant">25-35 min</span>
            </div>
            <div className="flex flex-col items-center border-x border-outline-variant/20">
              <span className="material-symbols-outlined text-primary mb-1">delivery_dining</span>
              <span className="text-xs font-semibold text-on-surface-variant">$4.99 Delivery</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-primary mb-1">distance</span>
              <span className="text-xs font-semibold text-on-surface-variant">1.2 miles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Segmented Tab Control */}
      <section className="sticky top-14 bg-background/95 backdrop-blur-md z-40 py-4 px-4 border-b border-outline-variant/10">
        <div className="flex bg-surface-container-low p-1 rounded-2xl relative">
          <button
            className={`flex-1 py-2 rounded-xl text-center text-xs font-semibold z-10 transition-colors ${
              activeTab === "menu" ? "text-primary font-bold" : "text-on-surface-variant"
            }`}
            onClick={() => setActiveTab("menu")}
          >
            Menu
          </button>
          <button
            className={`flex-1 py-2 rounded-xl text-center text-xs font-semibold z-10 transition-colors ${
              activeTab === "reviews" ? "text-primary font-bold" : "text-on-surface-variant"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
          <button
            className={`flex-1 py-2 rounded-xl text-center text-xs font-semibold z-10 transition-colors ${
              activeTab === "info" ? "text-primary font-bold" : "text-on-surface-variant"
            }`}
            onClick={() => setActiveTab("info")}
          >
            Info
          </button>
          {/* Animated active indicator */}
          <div
            className="absolute top-1 bottom-1 bg-surface-container-lowest rounded-xl shadow-sm transition-all duration-300"
            style={{
              width: "calc(33.33% - 4px)",
              left: activeTab === "menu" ? "4px" : activeTab === "reviews" ? "33.33%" : "calc(66.66% - 4px)",
            }}
          />
        </div>
      </section>

      {/* Menu & Sub-sections */}
      {activeTab === "menu" && (
        <section className="px-4 mt-6 space-y-8">
          <div>
            <h2 className="font-extrabold text-xl text-on-surface mb-6">Signature Entrées</h2>
            <div className="space-y-6">
              {/* Menu Item 1 - Wild Truffle Risotto */}
              <div
                className="flex gap-4 group cursor-pointer"
                onClick={() => onNavigate(ScreenId.DishDetails, "push")}
              >
                <div className="flex-1">
                  <h3 className="font-bold text-base text-on-surface mb-1">Wild Truffle Risotto</h3>
                  <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                    Arborio rice slow-cooked with seasonal wild mushrooms, fresh black truffle shavings, and aged Parmesan.
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="font-bold text-base text-primary">$32.00</span>
                    <button className="bg-primary hover:bg-opacity-90 text-on-primary px-4 py-1.5 rounded-full text-xs font-semibold transition-all active:scale-95 shadow-sm">
                      Add
                    </button>
                  </div>
                </div>
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-outline-variant/15 bg-cover bg-center"
                     style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEeSwuTcTHlKgD8AaclHh7LvUFeotKmvTstvXRvY9KdJ9GINvuj6jCWKSWCiO9kB6k9Sq31BMtotLpmwTzWRapOUdSJ2YLALFpJ0LyKc-yANWIY_GwvXLFbIex4WB0S99xKVyqTdV-VjHIzy8gC5aXcXeFCTkTLgeFDcFFhP82OvaVGCDAcy7m9XhkU8XUdHn-_f6pME1rIDP0MSnLT01cx7Ubato43lSkosWtczyJf1kRzv4xrtDljrs0UQEGukGY62VApWd-KHDW')" }}
                />
              </div>

              <div className="h-[1px] bg-outline-variant/20" />

              {/* Menu Item 2 - Pan-Seared Scallops */}
              <div
                className="flex gap-4 group cursor-pointer"
                onClick={() => onNavigate(ScreenId.DishDetails, "push")}
              >
                <div className="flex-1">
                  <h3 className="font-bold text-base text-on-surface mb-1">Pan-Seared Scallops</h3>
                  <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                    Hokkaido scallops served over a velvet parsnip purée with brown butter and pomegranate reduction.
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="font-bold text-base text-primary">$45.00</span>
                    <button className="bg-primary hover:bg-opacity-90 text-on-primary px-4 py-1.5 rounded-full text-xs font-semibold transition-all active:scale-95 shadow-sm">
                      Add
                    </button>
                  </div>
                </div>
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-outline-variant/15 bg-cover bg-center"
                     style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAY6I1YW453-TDmWzLUGZBKpwXVo-i7z64F-J8mLfCVWubZ_pLItCxABisQg7jecXhCECJt2JRIylwdubdkGANFk-cnocky97BT8gKgCOBj8ki7KoVVS8RuJ7lUaEoGVy0XuHAXK0B9A6JDqwcSsex4KPjVlR6alV0MV3ivO6sfbUzSrX2FEvdZDlaqHJpPZshEDEn_3PXJs1V9tD3NcBaWE8_h7wfmf2ZuJITQFT73qgV8anTs20mAHv1hlRadcOwgFyrsPLeHPg5o')" }}
                />
              </div>

              <div className="h-[1px] bg-outline-variant/20" />

              {/* Menu Item 3 - Wagyu Beef Rossini (TRIGGER ITEM) */}
              <div
                className="flex gap-4 group cursor-pointer"
                onClick={() => onNavigate(ScreenId.DishDetails, "push")}
              >
                <div className="flex-1">
                  <h3 className="font-bold text-base text-on-surface mb-1">Wagyu Beef Rossini</h3>
                  <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                    A5 Wagyu tenderloin, topped with foie gras and Madeira sauce on a toasted brioche base.
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="font-bold text-base text-primary">$85.00</span>
                    <button className="bg-primary hover:bg-opacity-90 text-on-primary px-4 py-1.5 rounded-full text-xs font-semibold transition-all active:scale-95 shadow-sm">
                      Add
                    </button>
                  </div>
                </div>
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-outline-variant/15 bg-cover bg-center"
                     style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJGwzQGkB-Lg0H5IwnsROLOic7al0E8atIBM4Bno-axhwz5hSEWHeE4HXkJi74MY2gFFDgwl7S9aQQKlVFSHM0IMg2zLrjE7J3x31aenP4Q8fgYcHiX3-lyP4eur999VXoFaG0Dfk-7LY63av3HB2k3fzTXPYu73lXaMI4qNx78gztS4mz6sY7jtNXqiJ_FFnYtQO4rHHzTxo_lye2t4tjodxQk0az4HEjBCxuVaIMcHbHN38WBdzCr-J3iSbY_lEiuSKNhdeNBJPe')" }}
                />
              </div>
            </div>
          </div>

          {/* Bento Style Chef's Choice Feature Card */}
          <div className="bg-primary-container/10 rounded-[32px] p-6 border border-primary-container/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary text-[20px]">auto_awesome</span>
              <span className="text-[10px] text-primary uppercase font-bold tracking-wider">Chef's Choice</span>
            </div>
            <h2 className="font-extrabold text-xl text-on-surface mb-2">The Degustation Experience</h2>
            <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
              A curated 7-course journey through the finest seasonal ingredients, paired with premium vintages.
            </p>
            <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 shadow-sm">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6sfGsZRAjIiYqgHmYD2BRseBsK_i_7UVkJqhdji6qxqJivNGhGSM4oAeVNhRuSVnfehVu9rGnn0YhWbsPbHjChyc_xb7F1Y-7XtR5jwLdXfI61NiFKTvpnVRcoHD-gikQhSTRGLAk9lFJV8y8ffrR1YmeEbgIO2FJD3JPDcVR0VcDkKG4dD4TaR9Va0EFDdT-9E6-0ZuEottwzOc_CNNPTrpb88wfQTPLSk-RKmHrTX4hYQ3N476l8mgherHT8zf-ak1mduBzv0xP')",
                }}
              />
            </div>
            <button className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold text-sm transition-all active:scale-[0.98] shadow-md hover:bg-opacity-95">
              Reserve for $180
            </button>
          </div>
        </section>
      )}

      {/* Review Tab Placeholder */}
      {activeTab === "reviews" && (
        <section className="px-4 mt-6 space-y-4">
          <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/10">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-sm">Clara Dupont</span>
              <div className="flex text-secondary text-xs">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Absolutely outstanding experience. The Truffle Risotto was creamy, earthy and deeply satisfying. Professional service that is rare to find. Highly recommend!
            </p>
          </div>
          <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/10">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-sm">Jean-Marc</span>
              <div className="flex text-secondary text-xs">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[16px]">star</span>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              The steak Rossini is legendary here. Perfectly cooked, rich foie gras topping. Simply exquisite. Excellent delivery tracking.
            </p>
          </div>
        </section>
      )}

      {/* Info Tab Placeholder */}
      {activeTab === "info" && (
        <section className="px-4 mt-6 space-y-4 text-xs text-on-surface-variant leading-relaxed">
          <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/10 space-y-3">
            <h3 className="font-bold text-sm text-on-surface">About the Restaurant</h3>
            <p>
              Maison de l'Élégance delivers classic and contemporary French culinary craft directly to your door. Under the mastery of Chef Charles, we guarantee unmatched visual, aromatic, and tasting perfection.
            </p>
            <div className="flex items-center gap-2 text-on-surface font-semibold pt-1">
              <span className="material-symbols-outlined">map</span>
              <span>12 Avenue de l'Opéra, Paris / deliveries worldwide</span>
            </div>
          </div>
        </section>
      )}

      {/* Floating Cart Bar (Contextual FAB) */}
      <div className="fixed bottom-6 left-4 right-4 z-50">
        <div id="cart-bar" className="glass-nav bg-on-surface/90 text-surface-container-lowest flex items-center justify-between p-4 rounded-3xl shadow-2xl transition-all duration-300 transform">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white shadow-sm">2</div>
            <div>
              <p className="text-[10px] opacity-85 uppercase tracking-wider font-semibold">View Basket</p>
              <p className="font-extrabold text-base text-white">$77.00</p>
            </div>
          </div>
          <button
            className="bg-primary hover:bg-opacity-95 text-on-primary px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all active:scale-95 shadow-md"
            onClick={() => onNavigate(ScreenId.Cart, "slide_up")}
          >
            Checkout
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
      </div>
    </div>
  );
}
