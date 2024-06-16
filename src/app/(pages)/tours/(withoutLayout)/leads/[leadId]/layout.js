import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Loading from "../../../../../components/views/loading";
import LeadInfo from "../../components/lead-info/LeadInfo";
import LeadInfoHeader from "../../components/lead-info-header";

export const metadata = {
  title: "Lead Info",
  description: "Lead Info",
};

export default async function RootLayout({ children }) {
  return (
    <LeadInfo>
      <LeadInfoHeader/>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </LeadInfo>
  );
}

RootLayout.propTypes = {
  children: PropTypes.shape({}),
};
