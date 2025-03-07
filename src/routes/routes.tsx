import { BrowserRouter, Route, Routes } from "react-router";

import { AppLayout } from "@/pages/_layouts/app";
import { AuthLayout } from "@/pages/_layouts/auth";

import { NotFound } from "@/pages/404";
import { Dashboard } from "@/pages/app/dashboard/dashboard";
import { Orders } from "@/pages/app/orders/orders";
import { SignIn } from "@/pages/auth/sign-in";
import { SignUp } from "@/pages/auth/sign-up";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} errorElement={<NotFound />}>
          <Route index element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
