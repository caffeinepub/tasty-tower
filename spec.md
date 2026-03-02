# Tasty Tower

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full multi-page information website for Tasty Tower juice & shake shop
- Pages: Home, Juices, Milkshakes, Pure Juices, Thick Shakes, Fruit Flavors, Tasty Specials, Contact
- Sticky responsive navbar with mobile hamburger menu
- Hero section: "Experience Premium Freshness at Tasty Tower" with subheading and CTA buttons (Explore Menu, Visit Us)
- Highlight section on Home showing Thick Shakes first as premium glassmorphism cards
- "Customer Favorite" badge on Dragon and Kit-Kat thick shakes
- All menu pages display items in grid with glassmorphism cards, hover lift/zoom effects
- Popup offer (3s delay): uses uploaded offer poster image as background, scale-in animation, close button
- Scroll reveal animations on all sections
- Floating phone call button (no WhatsApp -- info site only)
- Premium footer: address, phone, Instagram (tastytower2024), YouTube (Tasty-Tower), Google review CTA
- Full mobile/tablet/desktop responsive layout

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan

### Menu Data (all from uploaded menu image)

**Juices (17 items):**
Papaya ₹30, Banana ₹30, Musk Melon ₹40, Water Melon ₹40, Grape ₹40, Pineapple ₹40, Sapota ₹40, Pomegranate ₹60, Mango ₹50, Orange ₹40, Dragon (W or R) ₹60, Carrot ₹40, Beetroot ₹40, Apple ₹40, Custard Apple ₹40, Lassi ₹40, Mixed Juices ₹60

**Milkshakes (21 items):**
Dragon (R or W) ₹80, Banana ₹50, Water Melon ₹50, Musk Melon ₹50, Pineapple ₹50, Custard Apple ₹70, Papaya ₹50, Grape ₹50, Sapota ₹60, Mango ₹60, Apple ₹60, Chocolate ₹70, Butterscotch ₹70, Strawberry ₹70, Vanilla ₹70, Dry Fruit Lassi ₹70, Strawberry shake (price TBC), Rasmalai shake (price TBC), Badam shake (price TBC), Pista shake (price TBC), Black current shake (price TBC)

**Pure Juices (11 items):**
Grape ₹50, Carrot ₹50, Mosambi ₹50, Watermelon ₹40, Pineapple ₹60, Orange ₹50, Muskmelon ₹50, Papaya ₹50, Dragon (R or W) ₹100, Beetroot ₹50

**Thick Shakes 350ml (8 items):**
Dragon (R or W) ₹100, Kaju Banana ₹70, Custard Apple ₹90, Avocado ₹120, Sapota ₹80, Papaya ₹70, Kit-Kat ₹90, Oreo ₹90

**Fruit Flavors 500ml (3 items):**
Sp Salad (5 Fruits) ₹60, Salad (3 Fruits) ₹40, Salad (2 Fruits) ₹30

**Tasty Specials (2 items):**
Special Lassi ₹40, Mocktails ₹60

### Implementation Steps
1. Rename project to "Tasty Tower"
2. Generate visual assets (hero background, drink category images)
3. Generate minimal Motoko backend (static info store)
4. Build React frontend:
   - App.tsx with router and page components
   - Navbar component (sticky, mobile hamburger)
   - HomePage with hero + thick shakes highlight section + menu preview
   - Individual menu pages (Juices, Milkshakes, Pure Juices, Thick Shakes, Fruit Flavors, Tasty Specials)
   - Contact page
   - OfferPopup component (uses uploaded poster image, 3s delay, scale animation)
   - FloatingCallButton component
   - Footer component
5. Apply glassmorphism, hover effects, scroll reveal animations
6. Ensure full responsive design
