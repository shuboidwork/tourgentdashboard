import { IconFlagIN } from "material-ui-flags";

const IMap = {
  INDIA: IconFlagIN,
};

// IconFlagTypes is derived from IMap to maintain a unified list and ensure a single source of truth
const IconFlagTypes = Object.keys(IMap).reduce(
  (accumulator, iconflag) => ({ ...accumulator, [iconflag]: iconflag }),
  {}
);

export { IMap as default, IconFlagTypes };
