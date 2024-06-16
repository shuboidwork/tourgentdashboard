import { IconTypes } from "@/app/facts/icon-list"

export const SignUpProviders = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
  INSTAGRAM: "instagram",
};

export const SignUpIconInfoMap = {
  [SignUpProviders.GOOGLE]: {
    icon: IconTypes.GOOGLE,
    disabled: false,
  },
  [SignUpProviders.FACEBOOK]: {
    icon: IconTypes.FACEBOOK,
    disabled: true,
  },

  [SignUpProviders.INSTAGRAM]: {
    icon: IconTypes.INSTAGRAM,
    disabled: true,
  },
};