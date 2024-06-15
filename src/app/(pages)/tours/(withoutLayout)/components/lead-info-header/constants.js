import { IconTypes } from "@/app/facts/icon-list";
import RouteUrls from "@/app/facts/route-urls";

export const Tiles = [
    {
      label: "Activity Timeline",
      icon: IconTypes.BAR_CHART,
      id: "activityTimeline",
      href: "",
      disabled: true,
    },
    {
      label: "Trip Details",
      icon: IconTypes.APARTMENT,
      id: "tripDetails",
      href: "",
      disabled: true,
    },
    {
      label: "Itinerary",
      icon: IconTypes.PENDING_ACTIONS_OL,
      id: "itinerary",
      href: RouteUrls.leadItinerary,
      disabled: false,
    },
    {
      label: "Notes",
      icon: IconTypes.NOTES,
      id: "notes",
      href: "",
      disabled: true,
    },
  ];