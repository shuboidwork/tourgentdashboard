import { IconTypes } from "@/app/facts/icon-list";
import RouteUrls from "@/app/facts/route-urls";

export const Tiles = [
    {
      label: "Activity Timeline",
      icon: IconTypes.GLOBE,
      id: "activityTimeline",
      href: "",
      disabled: true,
    },
    {
      label: "Trip Details",
      icon: IconTypes.GLOBE,
      id: "tripDetails",
      href: "",
      disabled: true,
    },
    {
      label: "Itinerary",
      icon: IconTypes.GLOBE,
      id: "itinerary",
      href: RouteUrls.leadItinerary,
      disabled: false,
    },
    {
      label: "Notes",
      icon: IconTypes.GLOBE,
      id: "notes",
      href: "",
      disabled: true,
    },
  ];