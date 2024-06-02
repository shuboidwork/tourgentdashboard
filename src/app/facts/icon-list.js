import {
  Public,
  Groups,
  Settings,
  Dashboard,
  ConnectingAirports,
  SwapHoriz,
  PostAdd,
  EmojiPeople,
  ArrowForward,
  CallOutlined,
  EmailOutlined,
  MoreVert,
} from "@mui/icons-material";

const IMap = {
  DASHBOARD: Dashboard,
  GLOBE: Public,
  CONNECTING_AIRPLANES: ConnectingAirports,
  CROWD_SOURCE: Groups,
  SETTINGS: Settings,
  SWAP_HORIZ: SwapHoriz,
  POST_ADD: PostAdd,
  SOLO: EmojiPeople,
  ARROW_RIGHT: ArrowForward,
  CALL_OL: CallOutlined,
  EMAIL_OL: EmailOutlined,
  MORE_VERTICLE: MoreVert,
};

// IconTypes is derived from IMap to maintain a unified list and ensure a single source of truth
const IconTypes = Object.keys(IMap).reduce(
  (accumulator, iconType) => ({ ...accumulator, [iconType]: iconType }),
  {}
);

export { IMap as default, IconTypes };
