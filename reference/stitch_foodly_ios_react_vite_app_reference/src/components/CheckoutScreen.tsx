import { useState } from "react";
import { ScreenId, TransitionType } from "../types";

interface CheckoutScreenProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
  onAddActiveOrder?: () => void;
}

export default function CheckoutScreen({ onNavigate, onAddActiveOrder }: CheckoutScreenProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [instructions, setInstructions] = useState("");

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      if (onAddActiveOrder) {
        onAddActiveOrder();
      }
      setIsProcessing(false);
      onNavigate(ScreenId.Orders, "push");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased pb-36">
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-sm flex items-center justify-between px-4 h-14 border-b border-outline-variant/10">
        <div className="flex items-center gap-2">
          <button
            className="text-on-surface-variant active:scale-95 transition-transform duration-200"
            onClick={() => onNavigate(ScreenId.Cart, "push_back")}
          >
            <span className="material-symbols-outlined text-2xl font-bold">arrow_back_ios</span>
          </button>
          <h1 className="font-extrabold text-lg text-on-surface">Checkout</h1>
        </div>
        <div className="flex items-center gap-4 text-on-surface-variant cursor-pointer">
          <span className="material-symbols-outlined">help_outline</span>
        </div>
      </header>

      {/* Checkout Main Flow */}
      <main className="pt-20 px-4 max-w-2xl mx-auto space-y-6">
        {/* Delivery Address Section */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-extrabold text-base text-on-surface">Delivery Address</h2>
            <button className="text-primary font-bold text-xs">Change</button>
          </div>
          <div className="apple-card-shadow bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/15 shadow-sm">
            <div className="h-32 w-full relative">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpY0bqzkrqd5zbkx1btvzTd1McVQi8eUylAcDaoMdFXn3JPcfcCPK4LbaHicXcKzTGJ2UUTAy8HTmjSoK_-aRdy68yCRmK5GaCAv3wOGPbvxyH10w5qX2UMnc4F09tnELOYzoMm2VUuvFvdAxbu-kUgUr9Y_-4yeRu4C83OKy9UZI_QxI0FnuG8mBNJ_6-ZyfZUPSraYxaGk80jp-m4JZBA09Dtlc0KlgK0K4PQ3IbkRKCYI57BFCRC8DQpcvILgUkXV58MeKpc_ar')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/20 to-transparent" />
              <div className="absolute bottom-3 left-3 bg-primary text-on-primary p-2 rounded-full shadow-md">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <p className="font-bold text-[15px] text-on-surface">Home</p>
              <p className="text-xs text-on-surface-variant font-semibold leading-tight">450 Serra Mall, Stanford, CA 94305</p>
              <p className="text-[11px] text-on-surface-variant/70 font-semibold italic">Apt 402 • Gate Code: 1234</p>
            </div>
          </div>
        </section>

        {/* Payment Method (Apple Wallet Style) */}
        <section className="space-y-3">
          <h2 className="font-bold text-base text-on-surface">Payment Method</h2>
          <div className="apple-card-shadow bg-surface-container-lowest rounded-2xl p-4 flex items-center justify-between border border-outline-variant/15 active:scale-[0.98] transition-all cursor-pointer shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-black rounded-md flex items-center justify-center">
                <svg fill="none" height="13" viewBox="0 0 38 15" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 0.5H12.5L10.5 8.5L8.5 0.5H5.5L2.5 14.5H5.5L6.5 10.5H11.5L12.5 14.5H15.5L15.5 0.5ZM10.5 7.5H7.5L9 1.5L10.5 7.5Z" fill="white"></path>
                  <path d="M21.5 10.5C21.5 12.7091 19.7091 14.5 17.5 14.5H16.5V0.5H17.5C19.7091 0.5 21.5 2.29086 21.5 4.5V10.5ZM18.5 3.5H19.5V11.5H18.5V3.5Z" fill="white"></path>
                  <path d="M27.5 0.5H22.5V14.5H27.5V11.5H25.5V9.5H27.5V6.5H25.5V3.5H27.5V0.5Z" fill="white"></path>
                </svg>
              </div>
              <div>
                <p className="font-bold text-[15px] text-on-surface">Apple Pay</p>
                <p className="text-xs text-on-surface-variant font-semibold">Visa •••• 4242</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </div>
        </section>

        {/* Order Summary */}
        <section className="space-y-3">
          <h2 className="font-bold text-base text-on-surface">Order Summary</h2>
          <div className="apple-card-shadow bg-surface-container-lowest rounded-2xl p-5 space-y-4 border border-outline-variant/15 shadow-sm">
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant/15">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-container border border-outline-variant/10">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1z5RF0AyMSbYRzybttH2zXYR3DJ1y3KOB1_hri_6hgOg3_Mn4-lX50eTkQRzGqYFlmCy6f7wektIltrDpWY4U04IrKY3ltXo6FYmXAP7U6IsMlx6i6FjjcxckS_2mHHjCBOx1K0-nDBb9ZTdMB2XSothVX0HgJld74JVp0WVWeX2WBP-CRUGpMw8H9-HyMgGJyUbWIJNrrL5qnCpUI1lehv8z05c1FkqGDnJhwkNDhpTiseNM15CyKeumr8EWQPkn7HQ9_obeNPiw"
                    alt="Truffle Mushroom Pizza"
                  />
                </div>
                <div>
                  <p className="font-bold text-[14px] text-on-surface">Truffle Mushroom Pizza</p>
                  <p className="text-[11px] text-on-surface-variant/85 font-semibold">1x • Large</p>
                </div>
              </div>
              <p className="font-bold text-sm text-on-surface">$24.00</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-on-surface-variant font-semibold">
                <span>Subtotal</span>
                <span>$24.00</span>
              </div>
              <div className="flex justify-between text-xs text-on-surface-variant font-semibold">
                <span>Delivery Fee</span>
                <span>$2.99</span>
              </div>
              <div className="flex justify-between text-xs text-on-surface-variant font-semibold">
                <span>Service Fee</span>
                <span className="flex items-center gap-1">
                  $1.50 <span className="material-symbols-outlined text-[14px]">info</span>
                </span>
              </div>
            </div>
            <div className="pt-3 border-t border-outline-variant/20 flex justify-between items-center">
              <span className="font-bold text-base text-on-surface">Total</span>
              <span className="font-extrabold text-lg text-primary">$28.49</span>
            </div>
          </div>
        </section>

        {/* Delivery Instructions */}
        <section className="space-y-3">
          <h2 className="font-bold text-base text-on-surface">Delivery Instructions</h2>
          <div className="relative">
            <textarea
              className="w-full bg-surface-container-low border-none rounded-xl p-4 text-xs font-semibold text-on-surface placeholder:text-on-surface-variant/45 focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[100px] resize-none"
              placeholder="E.g. Please leave at the side door or call when you arrive..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
            <div className="absolute bottom-3 right-3">
              <span className="material-symbols-outlined text-on-surface-variant/40">edit_note</span>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Action Area */}
      <div className="fixed bottom-0 left-0 right-0 glass-nav bg-surface/80 border-t border-outline-variant/10 pb-safe z-50 shadow-lg">
        <div className="px-4 py-4 max-w-2xl mx-auto">
          <button
            id="place-order-btn"
            className={`w-full h-[54px] bg-primary text-on-primary rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-md hover:bg-opacity-95 transition-all duration-200 cursor-pointer ${
              isProcessing ? "opacity-75 cursor-not-allowed" : "active:scale-95"
            }`}
            disabled={isProcessing}
            onClick={handlePlaceOrder}
          >
            {isProcessing ? (
              <>
                <span className="material-symbols-outlined animate-spin">sync</span>
                Processing...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
                Place Order
              </>
            )}
          </button>
          <p className="text-center text-[10px] font-semibold text-on-surface-variant/60 mt-3 px-6 leading-tight">
            By tapping Place Order, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
