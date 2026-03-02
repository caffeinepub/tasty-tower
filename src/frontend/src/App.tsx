import {
  Link,
  Outlet,
  RouterProvider,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import FloatingCallButton from "./components/FloatingCallButton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OfferPopup from "./components/OfferPopup";
import ContactPage from "./pages/ContactPage";
import FruitFlavorsPage from "./pages/FruitFlavorsPage";
import HomePage from "./pages/HomePage";
import JuicesPage from "./pages/JuicesPage";
import MilkshakesPage from "./pages/MilkshakesPage";
import PureJuicesPage from "./pages/PureJuicesPage";
import TastySpecialsPage from "./pages/TastySpecialsPage";
import ThickShakesPage from "./pages/ThickShakesPage";

// Root layout
function RootLayout() {
  const [showPopup, setShowPopup] = useState(false);
  const routerState = useRouterState();

  // Scroll to top on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [routerState.location.pathname]);

  useEffect(() => {
    const shown = sessionStorage.getItem("tt_offer_shown");
    if (!shown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("tt_offer_shown", "1");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "oklch(0.10 0.025 258)" }}
    >
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCallButton />
      {showPopup && <OfferPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

// Create routes
const rootRoute = createRootRoute({ component: RootLayout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const juicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/juices",
  component: JuicesPage,
});
const milkshakesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/milkshakes",
  component: MilkshakesPage,
});
const pureJuicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pure-juices",
  component: PureJuicesPage,
});
const thickShakesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/thick-shakes",
  component: ThickShakesPage,
});
const fruitFlavorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/fruit-flavors",
  component: FruitFlavorsPage,
});
const tastySpecialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tasty-specials",
  component: TastySpecialsPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  juicesRoute,
  milkshakesRoute,
  pureJuicesRoute,
  thickShakesRoute,
  fruitFlavorsRoute,
  tastySpecialsRoute,
  contactRoute,
]);

const hashHistory = createHashHistory();

const router = createRouter({ routeTree, history: hashHistory });

// Register for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Re-export Link for use in other components
export { Link };

export default function App() {
  return <RouterProvider router={router} />;
}
