import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Loading from "../../../../../components/common/loading";
import LeadInfo from "../../../components/lead-info/LeadInfo";
import LeadInfoHeader from "../../../components/lead-info-header";
import getLeadInfo from "./actions";
import { useStore } from "@/app/components/enhancers/useStore";

export const metadata = {
  title: "Lead Info",
  description: "Lead Info",
};

export default async function RootLayout({ children, params }) {
  const {leadId} = params;
  return (
    <LeadInfo leadId={leadId}>
      <LeadInfoHeader />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </LeadInfo>
  );
}

RootLayout.propTypes = {
  children: PropTypes.shape({}),
};
