import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScreenId, TransitionType, Order } from "./types";

// Import all screens
import WelcomeScreen from "./components/WelcomeScreen";
import ExploreScreen from "./components/ExploreScreen";
import RestaurantDetailScreen from "./components/RestaurantDetailScreen";
import DishDetailScreen from "./components/DishDetailScreen";
import CartScreen from "./components/CartScreen";
import CheckoutScreen from "./components/CheckoutScreen";
import MyOrdersScreen from "./components/MyOrdersScreen";
import ProfileScreen from "./components/ProfileScreen";

const initialOrders: Order[] = [
  {
    id: "order-1",
    restaurantName: "Sourdough & Stone",
    date: "Today, 12:45 PM",
    total: 42.50,
    status: "ACTIVE",
    eta: "ETA: 8 mins",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJFW1QLC2dnDON2Hb-LEKJvqc-ljez90J8EX8ftIhhCN1XUg3DnQlVi6j4mT3LW63YbGz4gBvU5Drg8XzSay6B0ttoSto7t0zQgWIBwWyQ6lPw9r3rLbEY2WwxwokVTWG0eXoUQhpSWyeKGmQyKZqOo257KBRlRmWZEMMpPnghvKfYXa5ENB6OKwobUlxPhjANilcz5NQiJ3N-aqwc5Vx9I6J5PRUzC0gSyDSVKO82-bklkL9lLjZMY0XD8rfzBtaqrYaoold1gihx",
    itemsSummary: "1x • Truffle Sourdough Pizza",
  },
  {
    id: "order-2",
    restaurantName: "Pacific Blue Poke",
    date: "Today, 1:10 PM",
    total: 28.00,
    status: "PREPARING",
    eta: "ETA: 15 mins",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdkizE9CcOmQDWcMjdhQebEdHabjVW7VpfqYIZFDYKag33m7r2QUzGALiTuj7TEW_wY3su0MqTp6i9bGIxwPAJm75RzpI4GRm3skx5kE7GJIzxgeuTntFocv72pRncNm2IeuSNF_rIawTgF-uv3kUj6xzp5uZuuYX9YNsAR-TtMJCnVY71PAc92yVcecvKHP86jupSQ_pXL0UoxR3iJEbAhNnTwqH5K5KYO8U65hhOXxeImZwDflVpuVxnakSENlaI2IrU3e_DvwVY",
    itemsSummary: "1x • Salmon Poke Bowl",
  },
  {
    id: "order-3",
    restaurantName: "The Morning Club",
    date: "Oct 24, 2023",
    total: 19.20,
    status: "DELIVERED",
    eta: "Delivered",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgBXijOfFbPXkt_TozNnz29m4JGpVAeKjzvnxSQ5fOxf1CgjbhgplSa8EUoM2E4H7i-bn3gDGoZHOd355_nDIfALj0_Y6hV7ScYoXwkKzShCYwn6mH5jDmGM7V_9jsMK_Nb2ws43zMpnn-AUsWKj_K8rAlwYW_J5fy3EeecbattRRq-pNJvOid7MHT6kkDsgPL2tfwnNeemLv2VA1h6K4S6kh0O1HJ1fZh9yOcvxf7oXAgy8wmSOjsE7mn3da5Fmkm9JCvIWVWvoqC",
    itemsSummary: "1x • Blueberry Pancakes",
  },
  {
    id: "order-4",
    restaurantName: "Ichiban Ramen",
    date: "Oct 21, 2023",
    total: 34.50,
    status: "DELIVERED",
    eta: "Delivered",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAi550E-RyISrpxD0VvytRuaXrmufroJsG7cY22chVh9ROTGPHQOHFXDUZ1DoPx5vbxTHxjpRju5PFtqNekwqqs0RHET-6jRXZfHo3uiuEk2EU8rGXl71HViLzZVkqboRw8zAS7h-x_1MpYq_rA8M3Q5Sk6TsK6RzokyWqMM-15_wQErxQbPX-7FGrYeO0F2L7J6rWLuvRPeKLP_TDUsPnOC468KhTj3EV_DJnNFc3ju2LL8QvF0wDmEB9heyPsaedVOjgYjvDfIyRE",
    itemsSummary: "2x • Tonkotsu Ramen",
  },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>(ScreenId.Welcome);
  const [lastTransition, setLastTransition] = useState<TransitionType>("none");
  const [ordersList, setOrdersList] = useState<Order[]>(initialOrders);

  const handleNavigate = (screen: ScreenId, transition: TransitionType) => {
    setLastTransition(transition);
    setCurrentScreen(screen);
  };

  const handleAddActiveOrder = () => {
    const newOrder: Order = {
      id: `order-${Date.now()}`,
      restaurantName: "Truffle Mushroom Pizza",
      date: "Today, Just Now",
      total: 28.49,
      status: "PREPARING",
      eta: "ETA: 20 mins",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC1z5RF0AyMSbYRzybttH2zXYR3DJ1y3KOB1_hri_6hgOg3_Mn4-lX50eTkQRzGqYFlmCy6f7wektIltrDpWY4U04IrKY3ltXo6FYmXAP7U6IsMlx6i6FjjcxckS_2mHHjCBOx1K0-nDBb9ZTdMB2XSothVX0HgJld74JVp0WVWeX2WBP-CRUGpMw8H9-HyMgGJyUbWIJNrrL5qnCpUI1lehv8z05c1FkqGDnJhwkNDhpTiseNM15CyKeumr8EWQPkn7HQ9_obeNPiw",
      itemsSummary: "1x • Large Pizza",
    };
    setOrdersList((prev) => [newOrder, ...prev]);
  };

  const renderScreenContent = () => {
    switch (currentScreen) {
      case ScreenId.Welcome:
        return <WelcomeScreen onNavigate={handleNavigate} />;
      case ScreenId.Explore:
        return <ExploreScreen onNavigate={handleNavigate} />;
      case ScreenId.RestaurantDetails:
        return <RestaurantDetailScreen onNavigate={handleNavigate} />;
      case ScreenId.DishDetails:
        return <DishDetailScreen onNavigate={handleNavigate} />;
      case ScreenId.Cart:
        return <CartScreen onNavigate={handleNavigate} />;
      case ScreenId.Checkout:
        return <CheckoutScreen onNavigate={handleNavigate} onAddActiveOrder={handleAddActiveOrder} />;
      case ScreenId.Orders:
        return <MyOrdersScreen onNavigate={handleNavigate} ordersList={ordersList} />;
      case ScreenId.Profile:
        return <ProfileScreen onNavigate={handleNavigate} />;
      default:
        return <WelcomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-background">
      {lastTransition === "none" ? (
        <div key={currentScreen} className="w-full min-h-screen">
          {renderScreenContent()}
        </div>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentScreen}
            initial={
              lastTransition === "push"
                ? { x: "100%" }
                : lastTransition === "push_back"
                ? { x: "-100%" }
                : lastTransition === "slide_up"
                ? { y: "100%" }
                : { opacity: 0 }
            }
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={
              lastTransition === "push"
                ? { x: "-100%" }
                : lastTransition === "push_back"
                ? { x: "100%" }
                : lastTransition === "slide_up"
                ? { y: "100%" }
                : { opacity: 0 }
            }
            transition={{ type: "spring", stiffness: 350, damping: 32 }}
            className="w-full min-h-screen"
          >
            {renderScreenContent()}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
