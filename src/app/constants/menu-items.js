import { IconTypes } from "../facts/icon-list";
import RouteUrls from "../facts/route-urls";
const MenuItems = [
  {
    id: "home",
    label: "Home",
    link: RouteUrls.home,
    icon: IconTypes.DASHBOARD,
  },
  {
    id: "tours",
    label: "Tours",
    link: RouteUrls.tours,
    icon: IconTypes.GLOBE,
  },
  {
    id: "itinerary",
    label: "Itinerary",
    link: RouteUrls.itinerary,
    icon: IconTypes.CONNECTING_AIRPLANES,
  },
  {
    id: "community",
    label: "Community",
    link: RouteUrls.community,
    icon: IconTypes.CROWD_SOURCE,
  },
  {
    id: "website",
    label: "Website",
    link: RouteUrls.website,
    icon: IconTypes.GLOBE,
  },
  {
    id: "settings",
    label: "Settings",
    link: RouteUrls.settings,
    icon: IconTypes.SETTINGS,
  },
];
export default MenuItems;
