export const LeadStatuses = {
    NEW_LEAD: "new_lead",
    LEAD_PROFILED: "lead_profiled",
    OVERVIEW_READY: "overview_ready",
    CREATOR_CALL_DONE: "creator_call_done",
    ITINERARY_PAYMENT_DONE: "itinerary_payment_done",
    ITINERARY_SHARED: "itinerary_shared",
    PACKAGE_SHARED: "package_shared",
    BOOKING_CONFIRMED: "booking_confirmed",
    TRIP_ACTIVE: "trip_active",
    TRIP_COMPLETED: "trip_completed",
    LOST: "lost",
  };

export const LeadStatusesIds = {
  0: [LeadStatuses.NEW_LEAD],
  1: [LeadStatuses.LEAD_PROFILED],
  2: [LeadStatuses.OVERVIEW_READY],
  3: [LeadStatuses.CREATOR_CALL_DONE],
  4: [LeadStatuses.ITINERARY_PAYMENT_DONE],
  5: [LeadStatuses.ITINERARY_SHARED],
  6: [LeadStatuses.PACKAGE_SHARED],
  7: [LeadStatuses.BOOKING_CONFIRMED],
  8: [LeadStatuses.TRIP_ACTIVE],
  9: [LeadStatuses.TRIP_COMPLETED],
  10: [LeadStatuses.LOST],
};


export const LeadStatusesLabelMap = {
  [LeadStatuses.NEW_LEAD]: "New Lead",
  [LeadStatuses.LEAD_PROFILED]: "Lead Profiled",
  [LeadStatuses.OVERVIEW_READY]: "Overview Ready",
  [LeadStatuses.CREATOR_CALL_DONE]: "Creator Call Done",
  [LeadStatuses.ITINERARY_PAYMENT_DONE]: "Itinerary Payment Done",
  [LeadStatuses.ITINERARY_SHARED]: "Itinerary Shared",
  [LeadStatuses.PACKAGE_SHARED]: "Package Shared",
  [LeadStatuses.BOOKING_CONFIRMED]: "Booking Confirmed",
  [LeadStatuses.TRIP_ACTIVE]: "Trip Active",
  [LeadStatuses.TRIP_COMPLETED]: "Trip Completed",
  [LeadStatuses.LOST]: "Lost",
};
