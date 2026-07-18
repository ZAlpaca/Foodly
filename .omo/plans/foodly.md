# Foodly - Work Plan

## TL;DR (For humans)

**What you'll get:** A portfolio-grade premium food delivery iOS app — 8 screens (Welcome, Explore, RestaurantDetail, DishDetail, Cart, Checkout, Orders, Profile) with glassmorphism UI, Reanimated transitions, EN/RU localization, and Zustand state management. Design sourced from Stitch reference (converted from HTML→NativeWind).

**Why this approach:** Expo SDK 54 + NativeWind gives the fastest iteration with a production-quality styling system. Zustand over Redux for simplicity. Mock data keeps the project self-contained and immediately runnable. EN/RU i18n via i18next adds portfolio differentiation.

**What it will NOT do:** No real backend/api, no payments, no push notifications, no OAuth, no tests (per your choice).

**Effort:** ~22 tasks × 15-20 min ≈ 7-8 hours total build time.

**Risk:** Low — all technologies are well-understood, mock data eliminates backend dependency, design reference provides exact visual specification.

**Decisions:** All clarified — see `.omo/drafts/foodly.md` for the full decision ledger.

---

## Scope

### IN
- 8 screens matching Stitch reference exactly
- NativeWind styling with Foodly design system (colors, typography, spacing)
- Zustand stores: cart, orders, app (locale/first-launch)
- EN + RU localization via i18next + expo-localization
- Reanimated transitions between screens
- Haptic feedback on key interactions
- Mock data (6 restaurants, 6 categories, menu items, orders)
- Glassmorphism tab bar with backdrop blur
- Dark mode support (automatic via system)

### OUT (Must-NOT-Have)
- Real API integration
- Authentication/OAuth
- Payment processing
- Push notifications
- Unit/integration tests
- Android-specific optimizations (iOS-first)
- CI/CD pipeline
- App store deployment

---

## Verification strategy

Each task has explicit acceptance criteria. Since there are no automated tests, verification is visual/manual:
1. Run `npx expo start --ios` and check each screen matches the Stitch reference screenshots in `reference/stitch_foodly_ios_food_delivery/*/screen.png`
2. Verify all navigation flows work end-to-end
3. Verify EN/RU toggle switches all text
4. Verify cart state persists across navigation
5. Press all interactive elements to confirm haptics + animations

---

## Execution strategy

**Order:** Bottom-up — first the design system foundation, then mock data, then stores, then screens bottom-to-top (reusable→screen-specific), then i18n, then polish.

**Dependency matrix:**
```
Design System ─┬─→ Components ──→ Screens ──→ i18n
               ├─→ Mock Data ───→ Stores ───→ Screens
               └─→ Navigation ──→ Screens
```

**Branch strategy:** Single `feat/foodly` branch. One commit per completed task.

---

## Todos

### Wave 1: Foundation

- [x] 1. Initialize NativeWind + Tailwind config

**References:**
- NativeWind v4 docs: https://www.nativewind.dev/v4/getting-started
- `app/` directory structure (existing)
- `constants/theme.ts` (existing — will be replaced)

**Acceptance:**
- NativeWind installed via `npx nativewind-env`
- `tailwind.config.ts` created with Foodly design tokens (colors, spacing, borderRadius, fontFamily)
- `nativewind-env.d.ts` generated
- `app/globals.css` created with `@tailwind base/components/utilities`
- Running `npx expo start` shows no NativeWind errors

**QA (happy):** New `tailwind.config.ts` exists with all Foodly tokens. A test view with `className="bg-primary"` renders deep coral.
**QA (failure):** Missing token falls back gracefully; build warns but doesn't crash.

**Commit:** `feat: initialize NativeWind with Foodly design tokens`

---

- [x] 2. Install Zustand, i18next, expo-localization

**References:**
- `package.json` (existing deps)
- `app.json` (existing config)

**Acceptance:**
- `npm install zustand i18next react-i18next expo-localization` succeeds
- All packages importable without TypeScript errors

**QA (happy):** `import { create } from 'zustand'` compiles.
**QA (failure):** Version conflict — check peer deps against Expo SDK 54 compatibility.

**Commit:** `feat: install Zustand, i18next, expo-localization`

---

- [x] 3. Configure theme.ts with Foodly design tokens

**References:**
- `reference/stitch_foodly_ios_food_delivery/premium_culinary_delivery/DESIGN.md` (colors, fonts, spacing, radii)
- `constants/theme.ts` (existing — overwrite)
- `reference/stitch_foodly_ios_react_vite_app_reference/src/index.css` (CSS variables reference)

**Acceptance:**
- `constants/theme.ts` exports `Colors`, `Fonts`, `Spacing`, `BorderRadius` objects matching DESIGN.md
- All 40+ color tokens defined
- Typography scale with Plus Jakarta Sans
- 8pt spacing system

**QA (happy):** Import `Colors` in any file and get e.g. `Colors.primary === '#b3290f'`.
**QA (failure):** Every DESIGN.md color key is present in the object.

**Commit:** `feat: add Foodly design tokens to theme constants`

---

- [x] 4. Configure Plus Jakarta Sans font (expo-font)

**References:**
- `reference/stitch_foodly_ios_food_delivery/premium_culinary_delivery/DESIGN.md` (typography section)
- `app/_layout.tsx` (existing — add font loading)
- Expo font docs: https://docs.expo.dev/versions/latest/sdk/font/

**Acceptance:**
- Plus Jakarta Sans loaded via `useFonts` in root layout
- Font files in `assets/fonts/PlusJakartaSans-*.ttf`
- Weights: 400, 500, 600, 700
- Fallback to system sans-serif if font fails

**QA (happy):** Text with `fontFamily: 'PlusJakartaSans-Bold'` renders the custom font.
**QA (failure):** Font load failure shows system font gracefully (no crash).

**Commit:** `feat: add Plus Jakarta Sans font loading`

---

### Wave 2: Data + State

- [x] 5. Define TypeScript types

**References:**
- `reference/stitch_foodly_ios_react_vite_app_reference/src/types.ts` (existing reference types)
- CartItem, Order interfaces from reference

**Acceptance:**
- `types/index.ts` exports: `Restaurant`, `MenuItem`, `MenuOption`, `CartItem`, `Order`, `Category`, `Review`
- All types use `interface` with required + optional fields appropriately
- `types/navigation.ts` exports route param types for expo-router typed routes

**QA (happy):** All reference data files import from `@/types` without TS errors.
**QA (failure):** Every field used in components has a corresponding type definition.

**Commit:** `feat: define shared TypeScript types`

---

- [x] 6. Create mock data files

**References:**
- `reference/stitch_foodly_ios_react_vite_app_reference/src/App.tsx` (order mocks)
- `reference/stitch_foodly_ios_react_vite_app_reference/src/components/*.tsx` (inline data patterns)
- Reference screen.png images for visual matching

**Acceptance:**
- `data/restaurants.ts` — 6 restaurants with full menus (3-5 items each), matching the reference examples (The Golden Truffle, Sakura Zenith, Wagyu Burger Lab, Maison de l'Élégance, Sourdough & Stone, Pacific Blue Poke)
- `data/categories.ts` — 6 categories with icons (Dining, Bakery, Drinks, Dessert, Burger, Asian)
- `data/orders.ts` — 4 sample orders with varied statuses
- `data/reviews.ts` — 2+ reviews per restaurant
- All images use the Google-hosted URLs from the reference (working in iOS simulator)

**QA (happy):** Import any data file and get populated arrays.
**QA (failure):** Every restaurant has at least one menu item; every order has a valid status.

**Commit:** `feat: add mock data for restaurants, categories, orders, reviews`

---

- [x] 7. Create Zustand stores

**References:**
- Zustand docs: https://github.com/pmndrs/zustand
- `store/cart-store.ts`, `store/orders-store.ts`, `store/app-store.ts`

**Acceptance:**
- `cartStore`: `items`, `addItem`, `removeItem`, `updateQuantity`, `applyPromo`, `clearCart`, computed `subtotal`/`total`/`deliveryFee`/`serviceFee`
- `ordersStore`: `orders`, `activeOrders`, `pastOrders` (computed), `addOrder`, `updateOrderStatus`
- `appStore`: `locale`, `isFirstLaunch`, `setLocale`

**QA (happy):** Add item → subtotal increases. Apply promo "FOODLY10" → $10 discount. Remove item → cart empty.
**QA (failure):** Quantity never goes below 1. Empty cart subtotal = 0.

**Commit:** `feat: create Zustand stores (cart, orders, app)`

---

### Wave 3: Navigation Shell

- [x] 8. Restructure Expo Router with (main) tab layout

**References:**
- `app/_layout.tsx` (existing — modify)
- `app/(tabs)/_layout.tsx` (existing — will be replaced by (main)/_layout.tsx)
- Expo Router tab navigation docs

**Acceptance:**
- Root Stack: `index` (Welcome), `(main)` (tab navigator)
- `app/(main)/_layout.tsx` — Tab Navigator with 3 tabs
- Tab icons: home (Explore/SF Symbol `house.fill`), receipt_long (Orders/`receipt.fill`), person (Profile/`person.fill`)
- Tab bar styled with Foodly glassmorphism: `bg-surface/85 backdrop-blur-xl rounded-t-xl`
- HapticTab imported from existing `components/haptic-tab.tsx`
- Empty screen placeholders for explore, orders, profile (display screen name)

**QA (happy):** App starts on Welcome. Tapping "Get Started" navigates to Explore tab. Tab bar visible with 3 icons. Switching tabs works.
**QA (failure):** Tab bar respects safe area on iPhone 14 Pro notch/island.

**Commit:** `feat: restructure navigation with (main) tab layout`

---

- [x] 9. Create stack navigation for detail screens

**References:**
- `app/(main)/_layout.tsx` — add Stack screens inside tab
- Expo Router nested navigation docs

**Acceptance:**
- Stack screens added inside (main) for: `restaurant/[id]`, `dish/[id]`, `checkout`
- `cart` screen as modal presentation
- Back navigation returns to previous screen
- Route params typed in `types/navigation.ts`

**QA (happy):** Navigate: Explore → Restaurant → Dish → Cart → Checkout. Back button at each step returns correctly.
**QA (failure):** Modal cart dismisses via swipe-down gesture (iOS modal behavior).

**Commit:** `feat: add stack navigation for detail screens`

---

### Wave 4: Screens (Bottom-up)

#### 4.1 [x] Build reusable UI components

**References:**
- `reference/stitch_foodly_ios_react_vite_app_reference/src/components/WelcomeScreen.tsx` (button styles)
- `reference/stitch_foodly_ios_react_vite_app_reference/src/components/ExploreScreen.tsx` (card, chip patterns)
- DESIGN.md (radius, shadows, colors)

**Acceptance:**
- `components/ui/button.tsx` — Primary (`bg-primary text-on-primary rounded-2xl h-[54px]`) + Secondary (`bg-surface-container-low text-on-surface`)
- `components/ui/card.tsx` — `rounded-[24px]` with shadow, active scale(0.98)
- `components/ui/chip.tsx` — pill-shaped, active/inactive states
- `components/ui/input.tsx` — search bar with icon
- `components/ui/quantity-selector.tsx` — +/- buttons with number
- `components/ui/glass-card.tsx` — backdrop blur wrapper
- `components/shared/header.tsx` — configurable top bar with back/actions

**QA (happy):** Each component renders correctly in isolation with default props.
**QA (failure):** Primary button at 54px height passes touch target accessibility (iOS HIG).

**Commit:** `feat: build reusable UI component library`

---

#### 4.2 [x] Build Welcome Screen

**References:**
- `reference/stitch_foodly_ios_react_vite_app_reference/src/components/WelcomeScreen.tsx` (exact layout)
- `reference/stitch_foodly_ios_food_delivery/welcome_to_foodly/screen.png` (visual reference)

**Acceptance:**
- Hero image with gradient overlay (top 65%)
- "Foodly" logo text (text-primary, font-bold, text-3xl, tracking-tighter)
- Animated decorative element (restaurant icon circle)
- "Elevate Your Culinary Journey" headline (font-extrabold, text-4xl)
- Subtitle paragraph
- "Get Started" primary button → navigates to explore
- "Log In" secondary button → navigates to explore
- Terms footer
- Atmospheric glow effect (`bg-primary/5 blur-[120px]`)
- EN/RU language toggle in header (or settings icon)

**QA (happy):** All elements visible and centered. "Get Started" triggers navigation.
**QA (failure):** Long text in Russian fits without truncation.

**Commit:** `feat: implement Welcome screen`

---

#### 4.3 [x] Build Explore Screen

**References:**
- `reference/stitch_foodly_ios_react_vite_app_reference/src/components/ExploreScreen.tsx` (full layout)
- `reference/stitch_foodly_ios_food_delivery/explore_foodly/screen.png` (visual reference)

**Acceptance:**
- Glassmorphism header with location dropdown + notification bell
- Search bar with tune/filter icon
- Category horizontal scroll (6 pill chips with icons)
- Restaurant vertical feed (3 cards: The Golden Truffle, Sakura Zenith, Wagyu Burger Lab)
- Each card: hero image with rating badge + delivery time/price tags, name, cuisine, description
- Card tap → RestaurantDetail (or DishDetail for Wagyu Burger Lab)
- Bottom tab bar (Explore active = home fill icon)

**QA (happy):** Scroll categories horizontally. Scroll restaurant feed. Tap a restaurant → detail screen. Tap tab bar items.
**QA (failure):** Category scroll doesn't clip — hidden overflow works on iOS.

**Commit:** `feat: implement Explore/Home screen`

---

#### 4.4 [x] Build Restaurant Detail Screen

**References:**
- `reference/stitch_foodly_ios_react_vite_app_reference/src/components/RestaurantDetailScreen.tsx`
- `reference/stitch_foodly_ios_food_delivery/restaurant_details/screen.png`

**Acceptance:**
- Hero image with gradient overlay (340px height)
- Back button + search + favorite in header
- Floating info card: name, rating, delivery stats grid (time, fee, distance)
- Segmented tab control: Menu / Reviews / Info with animated active indicator
- Menu tab: list of menu items (image, name, description, price, Add button), Chef's Choice feature card
- Reviews tab: 2 review cards with star ratings
- Info tab: restaurant description, address
- Floating cart bar at bottom (when items in cart): count, total, Checkout button
- Cart bar tap → Cart screen

**QA (happy):** All three tabs work. Add button on menu item increases cart count in floating bar.
**QA (failure):** Chef's Choice card with $180 price renders correctly.

**Commit:** `feat: implement Restaurant Detail screen`

---

#### 4.5 [x] Build Dish Detail Screen

**References:**
- `reference/stitch_foodly_ios_react_vite_app_reference/src/components/DishDetailScreen.tsx`
- `reference/stitch_foodly_ios_food_delivery/dish_details/screen.png`

**Acceptance:**
- Full-width hero image (390px height)
- Back + share + favorite in floating header
- Dish name + price header, star rating
- Description paragraph
- Nutritional info grid (4 cells: Cal, Prot, Fat, Carb)
- Customization options (checkboxes with prices)
- Quantity selector (+/-) with disabled state at min=1
- Bottom action bar: Total price + "Add to Cart" button
- "Add to Cart" → adds to Zustand cartStore → navigates to Cart

**QA (happy):** Quantity changes update total price. Adding toppings increases total. Add to Cart navigates to Cart.
**QA (failure):** Quantity can't go below 1 (button disabled). Very long description wraps correctly.

**Commit:** `feat: implement Dish Detail screen`

---

#### 4.6 [x] Build Cart Screen

**References:**
- `reference/stitch_foodly_ios_react_vite_app_reference/src/components/CartScreen.tsx`
- `reference/stitch_foodly_ios_food_delivery/your_cart/screen.png`

**Acceptance:**
- Header: back, "Your Cart", Clear button (empties cart)
- Delivery address card (static mock)
- Cart items: image, name, options, quantity controls (+/-), price, delete
- Empty state: shopping bag icon, "Your cart is empty", "Explore Menu" CTA
- Promo code input with Apply (FOODLY10 = $10 discount)
- Order summary: Subtotal, Discount (if applied), Delivery Fee ($5), Service Fee ($2.50), Total
- Sticky bottom "Go to Checkout" button → Checkout screen

**QA (happy):** Modify quantities → subtotal updates. Remove item → count decreases. Apply FOODLY10 → $10 discount. Empty all → empty state appears.
**QA (failure):** Delivery fee is $5 only when cart has items. Empty cart = $0 subtotal.

**Commit:** `feat: implement Cart screen`

---

#### 4.7 [x] Build Checkout Screen

**References:**
- `reference/stitch_foodly_ios_react_vite_app_reference/src/components/CheckoutScreen.tsx`

**Acceptance:**
- Header with back + title
- Delivery address with map preview image + address details
- Payment method card (Apple Pay style with card icon)
- Order summary with item thumbnails + pricing breakdown
- Delivery instructions textarea
- "Place Order" button with processing spinner state
- 1.5s simulated delay → new order added to ordersStore → navigate to Orders tab

**QA (happy):** Place Order shows spinner for 1.5s, then navigates to Orders with new order visible.
**QA (failure):** Tapping Place Order multiple times — button disabled during processing.

**Commit:** `feat: implement Checkout screen`

---

#### 4.8 [x] Build Orders Screen

**References:**
- `reference/stitch_foodly_ios_react_vite_app_reference/src/components/MyOrdersScreen.tsx`
- `reference/stitch_foodly_ios_food_delivery/my_orders/screen.png`

**Acceptance:**
- Header with receipt icon + "Orders" title
- Toggle tabs: Active / Past with underline indicator
- Active orders: restaurant name, status badge (Active=gold, Preparing=neutral), live dot animation, ETA, "Track Order" button, Call button
- Past orders: restaurant name, "Delivered" badge, date, total, "Reorder" + "View Receipt" buttons
- Empty state for no active orders
- Bottom tab bar (Orders active)

**QA (happy):** Active tab shows current orders. Past tab shows delivered orders. New order from checkout appears in Active.
**QA (failure):** Order with DELIVERED status only appears in Past tab.

**Commit:** `feat: implement Orders screen`

---

#### 4.9 [x] Build Profile Screen

**References:**
- `reference/stitch_foodly_ios_react_vite_app_reference/src/components/ProfileScreen.tsx`
- `reference/stitch_foodly_ios_food_delivery/profile/screen.png`

**Acceptance:**
- Header with location + notifications
- Avatar with edit icon overlay
- User name + email (mock: Alexander West)
- Menu list: Personal Info, Payment Methods, Address Book, Promotions, Settings (each with icon + chevron)
- Logout button → Welcome screen
- Version footer: "Version 1.0.0"
- Bottom tab bar (Profile active)

**QA (happy):** All menu items display. Logout returns to Welcome. Tab bar persists.
**QA (failure):** Avatar edit icon positioned correctly at bottom-right of avatar (not clipped).

**Commit:** `feat: implement Profile screen`

---

### Wave 5: Localization

#### 5.1 [x] Create i18n setup + locale detection

**References:**
- i18next docs: https://www.i18next.com/
- expo-localization docs

**Acceptance:**
- `locales/i18n.ts` — i18next init with `expo-localization` detector
- `locales/en/common.json`, `locales/en/screens.json`, `locales/en/food.json`
- `locales/ru/common.json`, `locales/ru/screens.json`, `locales/ru/food.json`
- `hooks/use-i18n.ts` — `t()` function + `locale` + `setLocale`
- Default: device locale (EN fallback)
- appStore locale switch persists across navigation

**QA (happy):** App launches in device language. Switching locale updates all visible text immediately.
**QA (failure):** Missing translation key shows the key name itself (i18next default), not a crash.

**Commit:** `feat: set up i18n with EN/RU localization`

---

#### 5.2 [x] Add translation keys to all screens

**References:**
- Each screen component file (from Wave 4)
- `locales/en/screens.json`, `locales/ru/screens.json`

**Acceptance:**
- All hardcoded strings replaced with `t()` calls
- Translation keys organized per-screen
- Russian translations cover all UI text (not just screen-level — buttons, labels, placeholders, error states)
- Language toggle in Welcome screen header (EN/RU switch)

**QA (happy):** Switch to RU → Welcome screen in Russian. Switch to EN → back to English.
**QA (failure):** Russian text for "Get Started" fits button width without truncation.

**Commit:** `feat: add translation keys and Russian localizations`

---

### Wave 6: Polish

#### 6.1 [x] Animate screen transitions

**References:**
- `reference/stitch_foodly_ios_react_vite_app_reference/src/App.tsx` (spring animation config: stiffness 350, damping 32)
- react-native-reanimated docs

**Acceptance:**
- Custom transition component wraps stack navigator
- Push transitions: spring animation (stiffness: 350, damping: 32)
- Modal (Cart): slide-up with spring
- Back navigation: reverse direction
- Duration: ~400ms

**QA (happy):** Navigate between screens — smooth spring animation, not jerky.
**QA (failure):** Fast navigation (tapping back repeatedly) doesn't break animation state.

**Commit:** `feat: add Reanimated screen transitions`

---

#### 6.2 [x] Add haptic feedback

**References:**
- expo-haptics docs: https://docs.expo.dev/versions/latest/sdk/haptics/
- Components: buttons, cards, quantity controls

**Acceptance:**
- Primary button presses → `impactAsync(Haptics.ImpactFeedbackStyle.Medium)`
- Card taps → `impactAsync(Haptics.ImpactFeedbackStyle.Light)`
- Quantity +/- → `impactAsync(Haptics.ImpactFeedbackStyle.Light)`
- Tab switches → `impactAsync(Haptics.ImpactFeedbackStyle.Light)`

**QA (happy):** Physical device — haptic feedback on all interactive elements.
**QA (failure):** Haptics gracefully no-op on devices without Taptic Engine (no crash).

**Commit:** `feat: add haptic feedback to interactions`

---

#### 6.3 [x] Polish dark mode support

**References:**
- `constants/theme.ts` (dark color definitions)
- `app/_layout.tsx` (existing dark theme provider)
- DESIGN.md colors for dark variants

**Acceptance:**
- All colors have dark variants matching the design system
- Surface colors dim appropriately in dark mode
- Text remains readable (inverse-on-surface for dark bg)
- Tab bar adapts to dark surface
- Images may use reduced brightness in dark mode

**QA (happy):** Toggle system to dark mode → app UI switches seamlessly.
**QA (failure):** No unreadable contrast — text on dark bg passes WCAG AA.

**Commit:** `feat: add dark mode support`

---

#### 6.4 [x] Final polish: Splash screen + app icon + status bar

**References:**
- `app.json` (existing splash config)
- `assets/images/splash-icon.png`, `icon.png`

**Acceptance:**
- Splash screen shows Foodly branding (white bg, logo)
- App icon updated with Foodly icon (deep coral + fork/knife or food icon)
- Status bar: `style="auto"` (light/dark adaptive) — already configured

**QA (happy):** Cold start → splash screen → app loads. Icon shows on iOS home screen.
**QA (failure):** Splash icon centered and not clipped on iPhone 14 Pro Max.

**Commit:** `chore: finalize splash screen, app icon, status bar`

---

### Wave 7: Cleanup

#### 7.1 [x] Remove starter template boilerplate

**References:**
- `app/(tabs)/` — old tab files (backup before removing)
- `components/hello-wave.tsx`, `components/parallax-scroll-view.tsx`, `components/themed-*.tsx`
- `hooks/use-color-scheme.ts`, `hooks/use-theme-color.ts` (keep use-color-scheme)
- `scripts/reset-project.js` (remove)

**Acceptance:**
- No remaining Expo starter template code in app/ or components/
- No unused imports or dead code
- Lint clean (`npx expo lint` passes with 0 errors)

**QA (happy):** Build succeeds. App runs without referencing removed files.
**QA (failure):** Any import from a removed file causes a TS error — verify before commit.

**Commit:** `chore: remove starter template boilerplate`

---

## Final verification wave

Run ALL these in parallel and report results:

1. **[x] F1 — Plan compliance audit**: Every screen from spec matches its implementation. Navigation flows match the route map.
2. **[x] F2 — Code quality review**: No `any` types, no unused imports, consistent naming (PascalCase components, camelCase functions), lint passes.
3. **[x] F3 — Real manual QA**: Full walkthrough on iOS simulator: Welcome → Explore → Restaurant → Dish → Cart → Checkout → Orders. Test EN/RU toggle. Test dark mode.
4. **[x] F4 — Scope fidelity**: No scope creep (no API, no auth, no tests). Must-NOT-Have list is respected.

---

## Commit strategy

One commit per todo, prefixed:
- `feat:` for features
- `fix:` for bug fixes
- `chore:` for tooling/cleanup

Branch: `feat/foodly` (create from `main`).

---

## Success criteria

- App launches without errors on iOS simulator
- All 8 screens render correctly matching Stitch design reference
- Full navigation flow works end-to-end (Welcome → Explore → ... → Order placed)
- EN/RU language switching works on all screens
- Dark mode adapts correctly
- Cart state persists across navigation
- No TypeScript errors (`npx tsc --noEmit` passes)
- No lint errors (`npx expo lint` passes)
