import { SidebarProvider } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import { useState } from "react";
import CartSidebar from "./CartSidebar";
import AppFooter from "./AppFooter";

const LayoutContent: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      <AppHeader openCartSideBar={() => setIsCartOpen(true)} />
      <Outlet />
      <AppFooter />

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
