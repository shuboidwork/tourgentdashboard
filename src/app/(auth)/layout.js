import "../globals.scss";
import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Loading from "../components/views/loading";
import { poppins } from "../utils/fonts";
import Providers from "../components/enhancers/Providers";

export default function RootLayout({ children }) {
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
