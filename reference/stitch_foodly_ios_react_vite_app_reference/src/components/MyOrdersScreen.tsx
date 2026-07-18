import { useState } from "react";
import { ScreenId, TransitionType, Order } from "../types";

interface MyOrdersScreenProps {
  onNavigate: (screen: ScreenId, transition: TransitionType) => void;
  ordersList: Order[];
}

export default function MyOrdersScreen({ onNavigate, ordersList }: MyOrdersScreenProps) {
  const [activeTab, setActiveTab] = useState<"active" | "past">("active");

  const activeOrders = ordersList.filter((o) => o.status === "ACTIVE" || o.status === "PREPARING");
  const pastOrders = ordersList.filter((o) => o.status === "DELIVERED");

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased pb-32">
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-sm border-b border-outline-variant/10">
        <div className="flex items-center justify-between px-4 h-14 w-full">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary font-bold">receipt_long</span>
            <h1 className="font-extrabold text-lg text-on-surface">Orders</h1>
          </div>
          <button className="text-on-surface-variant hover:opacity-80 active:scale-95 transition-transform duration-200">
            <span className="material-symbols-outlined font-bold">search</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="pt-20 px-4 max-w-2xl mx-auto">
        {/* Order Type Tabs */}
        <div className="flex items-center gap-8 mb-6 border-b border-outline-variant/20 relative">
          <button
            className={`pb-2 text-xs font-bold relative transition-colors ${
              activeTab === "active" ? "text-primary border-b-2 border-primary" : "text-on-surface-variant"
            }`}
            onClick={() => setActiveTab("active")}
          >
            Active
          </button>
          <button
            className={`pb-2 text-xs font-bold relative transition-colors ${
              activeTab === "past" ? "text-primary border-b-2 border-primary" : "text-on-surface-variant"
            }`}
            onClick={() => setActiveTab("past")}
          >
            Past
          </button>
        </div>

        {/* Active Orders Tab */}
        {activeTab === "active" && (
          <section className="space-y-4">
            <h2 className="sr-only">Active Orders</h2>
            {activeOrders.length > 0 ? (
              activeOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-surface-container-lowest rounded-[24px] p-4 order-card-shadow border border-surface-container shadow-sm active:scale-[0.99] transition-transform duration-200"
                >
                  <div className="flex gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-outline-variant/10">
                      <img className="w-full h-full object-cover" src={order.image} alt={order.restaurantName} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-base text-on-surface leading-tight">{order.restaurantName}</h3>
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                            order.status === "ACTIVE"
                              ? "bg-secondary-container text-on-secondary-container"
                              : "bg-surface-container-high text-on-surface-variant"
                          }`}
                        >
                          {order.status === "ACTIVE" ? "Active" : "Preparing"}
                        </span>
                      </div>
                      <p className="text-on-surface-variant text-[11px] font-semibold mt-1">
                        {order.date} • {order.itemsSummary}
                      </p>
                    </div>
                  </div>

                  <div className="bg-surface-container-low rounded-xl p-3 mb-4 flex items-center gap-3 border border-outline-variant/5">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </div>
                    <span className="text-xs font-bold text-primary">
                      {order.status === "ACTIVE" ? "Out for Delivery" : "Kitchen Preparing"}
                    </span>
                    <span className="text-on-surface-variant text-[11px] font-semibold ml-auto">{order.eta}</span>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 h-12 bg-primary hover:bg-opacity-95 text-on-primary rounded-xl text-xs font-bold active:scale-95 transition-all shadow-sm">
                      Track Order
                    </button>
                    {order.status === "ACTIVE" && (
                      <button className="w-12 h-12 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl flex items-center justify-center active:scale-95 transition-transform shadow-sm border border-outline-variant/10">
                        <span className="material-symbols-outlined text-sm">call</span>
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 flex flex-col items-center text-center space-y-3">
                <span className="material-symbols-outlined text-5xl text-on-surface-variant/30">delivery_dining</span>
                <p className="text-xs font-semibold text-on-surface-variant">No active orders at the moment</p>
              </div>
            )}
          </section>
        )}

        {/* Past Orders Tab */}
        {activeTab === "past" && (
          <section className="space-y-4">
            <h2 className="sr-only">Past Orders</h2>
            {pastOrders.map((order) => (
              <div
                key={order.id}
                className="bg-surface-container-lowest rounded-[24px] p-4 order-card-shadow border border-surface-container shadow-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 grayscale-[0.1] border border-outline-variant/10">
                    <img className="w-full h-full object-cover" src={order.image} alt={order.restaurantName} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-base text-on-surface leading-tight">{order.restaurantName}</h3>
                      <span className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">Delivered</span>
                    </div>
                    <p className="text-on-surface-variant text-[11px] font-semibold mt-1">
                      {order.date} • ${order.total.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 h-12 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-xs font-bold active:scale-95 transition-transform border border-outline-variant/10">
                    Reorder
                  </button>
                  <button className="flex-1 h-12 border border-outline-variant text-on-surface hover:bg-surface-container-low rounded-xl text-xs font-bold active:scale-95 transition-transform">
                    View Receipt
                  </button>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pt-2 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-1px_0_0_rgba(0,0,0,0.05)] z-50 rounded-t-xl h-20 border-t border-outline-variant/10">
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer active:scale-90 transition-all duration-200"
          onClick={() => onNavigate(ScreenId.Explore, "none")}
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-xs font-semibold">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-primary cursor-pointer active:scale-90 transition-all duration-200" onClick={() => {}}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>receipt_long</span>
          <span className="text-xs font-semibold">Orders</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer active:scale-90 transition-all duration-200"
          onClick={() => onNavigate(ScreenId.Profile, "none")}
        >
          <span className="material-symbols-outlined">person</span>
          <span className="text-xs font-semibold">Profile</span>
        </a>
      </nav>
    </div>
  );
}
