import { useState } from "react";
import { ScreenId, TransitionType, CartItem } from "../types";

interface CartScreenProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
}

const initialCartItems: CartItem[] = [
  {
    id: "item-1",
    name: "Truffle Tagliatelle",
    price: 24.0,
    quantity: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD56uI32Uzgs0yNmPbwMOKpEKtGLX0OEZ-AM7d4U5L-mIYK0BfkjJCB_cSPnogafFlFyoCUEhJAoX0OuvngpkXZgzsltNybkXUFOU7axra20aeR0UTJbpc2qsKYQGqDLFn3wPAwcV760Mv9tQ8J-kqxrDaD7HuyxCep3JzO0ioQLikCB293JQ6N7x3Pqe-5cSF8KVfSIGRO6bN-xWGlOCSB_TwAq7q5M5f6qlK9wBZdtWc4r3lVpV53LvpHY6OMA8zWBJg4rKfMGrj4",
    options: ["Extra Parmesan", "No Garlic"],
  },
  {
    id: "item-2",
    name: "Heirloom Burrata",
    price: 18.5,
    quantity: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZFnXT5X4Q3SRcZqCkEc_fSGunhE_raOZtAY0YivKxJUucPGMypkjCXTp-Z6kBhR8Oy0AVJt-GKfwq72dqIsh6CL6Jy9w3VPk2EI7Msm-Tn9iQgMTSsnTAKHXZ9QIczIngZQJNtkVClqcAQK2G8kuxGatSvmM4d1kWhJp6JEgRKHOfyw6zZMoapBSwfMvpvCwKOgMP_PWqRgvdNbel9JVzIHtyfEEnOgW9oduSY96o0XTXIX4ARcRF_OuALrdLjCIj2Nye8rxJm4N3",
    options: ["Standard"],
  },
  {
    id: "item-3",
    name: "Chocolate Fondant",
    price: 12.0,
    quantity: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWiI8Z9tdcucmO-Y8GZWLV4DC6d5vaJA8ssnC4GA68ml0PUzcM_TYi3OdChIUzaaSrPHTrmAWpAFteHlxx9-KLYIoXSu2l22PWeIGCV-6esYnoBsS2ARJ1HT1gbidkEQcC-4IL9JI57E3j_RvHlaB5uTmmTLXVvxNxx8C723_Muv9G1S-DcAHP_wEf2jgR1EbGDHndUz_gYxIrs61E7MbjuCiVqFOOdQV61lf8Qk2HP1oE5rGtXHRjrZFO1UGLde6Km1VivXZJJf-H",
    options: ["Warm"],
  },
];

export default function CartScreen({ onNavigate }: CartScreenProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 5.0 : 0.0;
  const serviceFee = subtotal > 0 ? 2.5 : 0.0;
  const total = subtotal + deliveryFee + serviceFee - discount;

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "FOODLY10") {
      setDiscount(10.0);
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased pb-40">
      {/* Top AppBar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-14 bg-surface/80 backdrop-blur-xl shadow-sm border-b border-outline-variant/10">
        <button
          className="text-on-surface-variant active:scale-95 transition-transform duration-200"
          onClick={() => onNavigate(ScreenId.RestaurantDetails, "push_back")}
        >
          <span className="material-symbols-outlined text-2xl font-bold">arrow_back_ios_new</span>
        </button>
        <h1 className="font-extrabold text-lg text-on-surface">Your Cart</h1>
        <button
          className="text-primary active:scale-95 transition-transform duration-200 text-sm font-bold"
          onClick={() => setCartItems([])}
        >
          Clear
        </button>
      </header>

      {/* Cart Content */}
      <main className="pt-20 px-4 max-w-2xl mx-auto space-y-6">
        {/* Delivery Address Section */}
        <div className="p-4 bg-surface-container-low rounded-xl flex items-center gap-4 border border-outline-variant/10">
          <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
          </div>
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Delivering to</p>
            <p className="text-sm text-on-surface font-extrabold leading-tight">221B Baker Street, London</p>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
        </div>

        {/* Cart Items List */}
        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-surface-container-lowest rounded-2xl ios-shadow border border-outline-variant/10 transition-all duration-200"
              >
                {/* Product Image */}
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-outline-variant/10">
                  <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                </div>

                {/* Info and quantity setter */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-[15px] text-on-surface leading-snug">{item.name}</h3>
                      <p className="text-xs text-on-surface-variant/80 font-medium">{item.options.join(", ")}</p>
                    </div>
                    <span className="text-sm font-extrabold text-on-surface">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center bg-surface-container-low rounded-full p-1 shadow-sm gap-2">
                      <button
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-surface-container-highest active:scale-90 transition-all text-on-surface"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <span className="material-symbols-outlined text-sm font-bold">remove</span>
                      </button>
                      <span className="px-1 text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-secondary-container active:scale-90 transition-all text-on-secondary-fixed"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <span className="material-symbols-outlined text-sm font-bold">add</span>
                      </button>
                    </div>

                    <button className="text-error active:scale-90 transition-all" onClick={() => removeItem(item.id)}>
                      <span className="material-symbols-outlined">delete_outline</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 flex flex-col items-center text-center space-y-3">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant/30">shopping_bag</span>
            <h2 className="font-bold text-lg text-on-surface">Your cart is empty</h2>
            <p className="text-xs text-on-surface-variant max-w-xs leading-relaxed">
              Explore our menu and add fine gourmet meals to your order to enjoy a luxurious dining experience.
            </p>
            <button
              className="mt-2 bg-primary text-on-primary font-bold text-sm px-6 py-2.5 rounded-full shadow-md active:scale-95"
              onClick={() => onNavigate(ScreenId.Explore, "push_back")}
            >
              Explore Menu
            </button>
          </div>
        )}

        {/* Coupon Code Section */}
        {cartItems.length > 0 && (
          <div className="mt-6 flex gap-3 items-center p-3 bg-white border border-outline-variant/30 rounded-2xl shadow-sm">
            <span className="material-symbols-outlined text-primary ml-2">sell</span>
            <input
              className="flex-1 bg-transparent border-none text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-0"
              placeholder="Add promo code (try FOODLY10)"
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-on-surface text-surface font-semibold text-xs rounded-xl active:scale-95 transition-transform"
              onClick={applyPromo}
            >
              Apply
            </button>
          </div>
        )}

        {/* Order Summary Section */}
        {cartItems.length > 0 && (
          <div className="mt-8 space-y-3 border-t border-outline-variant/15 pt-5 pb-10">
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant text-sm font-semibold">Subtotal</span>
              <span className="text-on-surface text-sm font-bold">${subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between items-center text-primary">
                <span className="text-sm font-semibold">Promo Discount</span>
                <span className="text-sm font-bold">-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant text-sm font-semibold">Delivery Fee</span>
              <span className="text-on-surface text-sm font-bold">${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant text-sm font-semibold">Service Fee</span>
              <span className="text-on-surface text-sm font-bold">${serviceFee.toFixed(2)}</span>
            </div>
            <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center">
              <span className="text-on-surface font-extrabold text-base">Total</span>
              <span className="text-primary font-extrabold text-xl">${total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Action Bar (Fixed) */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-xl px-4 pt-4 pb-safe border-t border-outline-variant/10 z-50 shadow-lg">
          <div className="max-w-2xl mx-auto pb-4">
            <button
              className="w-full h-[54px] bg-primary text-on-primary rounded-2xl font-bold text-base flex items-center justify-center gap-3 active:scale-95 transition-all duration-200 shadow-md shadow-primary/10 hover:bg-opacity-95"
              onClick={() => onNavigate(ScreenId.Checkout, "push")}
            >
              <span>Go to Checkout</span>
              <span className="material-symbols-outlined font-bold">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
