
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AccountSidebar } from "@/components/account/AccountSidebar";
import { useEffect } from "react";

const AccountLayout = () => {
  // In a real app, you would check if the user is logged in
  // and redirect to login if not
  useEffect(() => {
    // This could be a check against your auth system
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      // For this demo, let's just set it to true
      localStorage.setItem("isLoggedIn", "true");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 pt-24">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <AccountSidebar />
            </div>
            <div className="md:col-span-3">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccountLayout;
