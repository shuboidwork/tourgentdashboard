import {
  Public,
  Groups,
  Settings,
  Dashboard,
  ConnectingAirports,
} from "@mui/icons-material";

const IMap = {
  DASHBOARD: Dashboard,
  GLOBE: Public,
  CONNECTING_AIRPLANES: ConnectingAirports,
  CROWD_SOURCE: Groups,
  SETTINGS: Settings,
};

// IconTypes is derived from IMap to maintain a unified list and ensure a single source of truth
const IconTypes = Object.keys(IMap).reduce(
  (accumulator, iconType) => ({ ...accumulator, [iconType]: iconType }),
  {}
);

export { IMap as default, IconTypes };
