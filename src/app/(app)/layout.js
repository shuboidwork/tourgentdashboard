import "../globals.scss";
import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Loading from "../components/common/loading";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { StyledRoot } from "../StyledRoot";
import NavigationMenu from "../components/views/left-nav";
import { poppins } from "../utils/fonts";
import MenuItems from "../constants/menu-items";
import { NextAuthProvider } from "../../context/SessionProvider";
import { StoreProvider } from "../components/enhancers/useStore";

export const metadata = {
  title: "Tourgent",
  description: "Tourgent",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins}`}>
        <AppRouterCacheProvider>
          <StyledRoot>
            <NextAuthProvider>
              <StoreProvider>
                <NavigationMenu items={MenuItems}>
                  <Suspense fallback={<Loading />}>{children}</Suspense>
                </NavigationMenu>
              </StoreProvider>
            </NextAuthProvider>
          </StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.shape({}),
};
