import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Loading from "../../../../../components/views/loading";
import LeadInfo from "../../../components/lead-info/LeadInfo";
import LeadInfoHeader from "../../../components/lead-info-header";
import getLeadInfo from "./actions";

export const metadata = {
  title: "Lead Info",
  description: "Lead Info",
};

export default async function RootLayout({ children, params }) {
  const {leadId} = params;
  const leadInfo = await getLeadInfo(leadId);

  return (
    <LeadInfo lead={leadInfo}>
      <LeadInfoHeader />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </LeadInfo>
  );
}

RootLayout.propTypes = {
  children: PropTypes.shape({}),
};
