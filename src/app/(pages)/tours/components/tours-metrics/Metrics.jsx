import React from 'react'
import MetricTile from '../metric-tile'
import { IconTypes } from '@/app/facts/icon-list'
import RouteUrls from '@/app/facts/route-urls'

const Metrics = () => {
  return (<>
   <MetricTile
          id={"leads"}
          icon={IconTypes.FACE_OL}
          label={"New Leads"}
          count={20}
          href={RouteUrls.leads}
        />
        <MetricTile
          id={"upcomingCalls"}
          icon={IconTypes.CONTACT_PHONE_OL}
          label={"Upcoming Calls"}
          count={8}
          href={RouteUrls.upcomingCalls}
        />
        <MetricTile
          id={"pedingItins"}
          icon={IconTypes.PENDING_ACTIONS_OL}
          label={"Pending Itineraries"}
          count={5}
          href={RouteUrls.pendingItins}
        />
        <MetricTile
          id={"pendingPayments"}
          icon={IconTypes.PENDING_OL}
          label={"Pending Payments"}
          count={2}
          href={RouteUrls.pendingPayments}
        />
  </>
  )
}

export default Metrics
