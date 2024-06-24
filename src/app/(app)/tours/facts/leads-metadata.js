import { IconTypes } from "@/app/facts/icon-list";

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

export const VactionTypes = {
  RELAXING: "relaxing",
  ALL_FAMOUS: "all_famous",
  OFF_BEAT: "off_beat",
  MIXED: "mixed",
};

export const VacationTypeLabelMap = {
  [VactionTypes.RELAXING]: "Relaxing",
  [VactionTypes.ALL_FAMOUS]: "All Famous",
  [VactionTypes.OFF_BEAT]: "Off Beat",
  [VactionTypes.MIXED]: "Mixed",
};

export const GroupTypes = {
  FAMILY: "family",
  COUPLE: "couple",
  FRIENDS: "friends",
  COLLEAGUES: "colleagues",
  SOLO: "solo"
};

export const GroupTypesLabelMap = {
  [GroupTypes.FAMILY]: "Family",
  [GroupTypes.COUPLE]: "Couple",
  [GroupTypes.FRIENDS]: "Friend",
  [GroupTypes.COLLEAGUES]: "Colleagues",
  [GroupTypes.SOLO]: "Solo",
};

export const GroupTypesIconMap = {
  [GroupTypes.FAMILY]: IconTypes.FAMILY,
  [GroupTypes.COUPLE]: IconTypes.FAMILY,
  [GroupTypes.FRIENDS]: IconTypes.FAMILY,
  [GroupTypes.COLLEAGUES]: IconTypes.FAMILY,
  [GroupTypes.SOLO]: IconTypes.SOLO,
};

export const DietaryPreferences = {
  VEG: "vegetarian",
  NON_VEG: "non_vegetarian",
  VEGAN: "vegan",
  GLUTEN_FREE: "gluten_free",
  HALAL: "halal",
  KOSHER: "kosher",
  JAIN: "jain"
};

export const DietaryPreferenceLabelMap = {
  [DietaryPreferences.VEG]: "Vegetarian",
  [DietaryPreferences.NON_VEG]: "Non Vegetarian",
  [DietaryPreferences.VEGAN]: "Vegan",
  [DietaryPreferences.GLUTEN_FREE]: "Gluten Free",
  [DietaryPreferences.HALAL]: "Halal",
  [DietaryPreferences.KOSHER]: "Kosher",
  [DietaryPreferences.JAIN]: "Jain",
};
