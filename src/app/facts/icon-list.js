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
  PinDropOutlined,
  AllInclusiveOutlined,
  FastfoodOutlined,
  RestaurantOutlined,
  AccountCircleOutlined,
  GirlOutlined,
  RefreshOutlined,
  WorkOutlineOutlined,
  Google,
  Facebook,
  Instagram,
  Face,
  ContactPhone,
  PendingActions,
  Pending,
  ContactPhoneOutlined,
  FaceOutlined,
  PendingActionsOutlined,
  PendingOutlined,
  AddIcCallOutlined,
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
  LOCATION_OL: PinDropOutlined,
  ALL_INCLUSIVE_OL: AllInclusiveOutlined,
  FAST_FOOD_OL: FastfoodOutlined,
  RESTAURENT_OL: RestaurantOutlined,
  ACCOUNT_CIRCLE_OL: AccountCircleOutlined,
  GIRL_OL: GirlOutlined,
  REFRESH_OL: RefreshOutlined,
  WORK_OL: WorkOutlineOutlined,
  GOOGLE: Google,
  FACEBOOK: Facebook,
  INSTAGRAM: Instagram,
  FACE_OL: FaceOutlined,
  CONTACT_PHONE_OL: ContactPhoneOutlined,
  PENDING_ACTIONS_OL: PendingActionsOutlined,
  PENDING_OL: PendingOutlined,
  ADD_CALL_OL: AddIcCallOutlined

};

// IconTypes is derived from IMap to maintain a unified list and ensure a single source of truth
const IconTypes = Object.keys(IMap).reduce(
  (accumulator, iconType) => ({ ...accumulator, [iconType]: iconType }),
  {}
);

export { IMap as default, IconTypes };
