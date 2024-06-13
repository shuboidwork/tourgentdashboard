import "../globals.scss";
import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Loading from "../components/views/loading";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { StyledRoot } from "../StyledRoot";
import NavigationMenu from "../components/views/left-nav";
import { poppins } from "../utils/fonts";
import MenuItems from "../constants/menu-items";
import Providers from "../components/enhancers/Providers";
import { checkIsLoggedIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Tourgent",
  description: "Tourgent",
};

export default async function RootLayout({ children }) {
  const isUserLoggedIn = await checkIsLoggedIn();
  if (!isUserLoggedIn) {
    redirect("/sign-up");
  }

  return (
    <html lang="en">
      <body className={`${poppins}`}>
        <AppRouterCacheProvider>
          <StyledRoot>
            <Providers>
              <NavigationMenu items={MenuItems}>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </NavigationMenu>
            </Providers>
          </StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.shape({}),
};
