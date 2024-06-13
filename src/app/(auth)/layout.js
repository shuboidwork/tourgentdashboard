import "../globals.scss";
import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Loading from "../components/views/loading";
import { poppins } from "../utils/fonts";
import Providers from "../components/enhancers/Providers";
import { redirect } from "next/navigation";
import { checkIsLoggedIn } from "@/lib/auth";

export default async function RootLayout({ children }) {
  const isUserLoggedIn = await checkIsLoggedIn();
  if (isUserLoggedIn) {
    redirect("/tours");
  }
  return (
    <html lang="en">
      <body className={`${poppins}`}>
        <Providers>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.shape({}),
};
