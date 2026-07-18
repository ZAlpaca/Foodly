# Draft: Foodly App

## Status
**status:** approved
**pending_action:** write planning documents (spec.md, tasks.md, README.md, roadmap.md)
**approach:** Build portfolio-level premium food delivery app using Expo SDK 54 + NativeWind + TypeScript

## Intent
**intent:** clear
**review_required:** false

## Components Ledger
| ID | Component | Outcome | Status | Evidence |
|----|-----------|---------|--------|----------|
| 1 | Welcome/Onboarding | Hero screen with branding, CTA buttons | decided | reference/WelcomeScreen.tsx |
| 2 | Explore (Home) | Search, categories, restaurant feed, tab bar | decided | reference/ExploreScreen.tsx |
| 3 | RestaurantDetail | Hero image, info card, menu/reviews/info tabs, floating cart | decided | reference/RestaurantDetailScreen.tsx |
| 4 | DishDetail | Dish image, description, customization, quantity, add-to-cart | decided | reference/DishDetailScreen.tsx |
| 5 | Cart | Item list, promo code, summary, checkout CTA | decided | reference/CartScreen.tsx |
| 6 | Checkout | Address, payment, order summary, instructions, place order | decided | reference/CheckoutScreen.tsx |
| 7 | Orders | Active/Past tabs, order tracking, reorder | decided | reference/MyOrdersScreen.tsx |
| 8 | Profile | Avatar, menu items, logout | decided | reference/ProfileScreen.tsx |

## Decisions
| Decision | Value | Rationale |
|----------|-------|-----------|
| Data layer | Mock data (TS files) | User choice |
| State management | Zustand | Modern, lightweight, portfolio-worthy |
| Navigation | Expo Router (Tabs + Stack) | Already configured, file-based routing |
| NativeWind | Install & configure | Requested in stack |
| Testing | None (manual QA) | User choice |
| Localization | EN + RU (i18next + expo-localization) | User choice |
| Animations | react-native-reanimated | Already installed, replaces framer-motion |
| Platform | iOS-first, cross-platform | Project name + reference design |

## Owner decisions (user approved)
- Mock data only
- No tests (manual QA)
- English + Russian localization

## Design System (from reference/DESIGN.md)
- Colors: Deep Coral #b3290f (primary), Warm Gold #fdc003 (secondary)
- Typography: Plus Jakarta Sans (700/600/400)
- Spacing: 8pt grid, 16px margins
- Radius: 24px cards, 16px buttons, full chips
- Glassmorphism tab bar

## Route Map
```
app/
  _layout.tsx                    Root Stack
  index.tsx                      Welcome
  (main)/
    _layout.tsx                  Tab Navigator
    explore.tsx                  Home tab
    orders.tsx                   Orders tab
    profile.tsx                  Profile tab
    restaurant/[id].tsx          Restaurant detail
    dish/[id].tsx                Dish detail
    cart.tsx                     Cart (modal)
    checkout.tsx                 Checkout
```
