import { IconTypes } from "@/app/facts/icon-list"

export const SignUpIcons = {
    GOOGLE: 'google',
    FACEBOOK: 'facebook',
    INSTAGRAM: 'instagram'
}

export const SignUpIconInfoMap = { 
    [SignUpIcons.GOOGLE]: {
        icon: IconTypes.GOOGLE,
        disabled: false,
    },
    [SignUpIcons.FACEBOOK]:  {
        icon: IconTypes.FACEBOOK,
        disabled: true,
    },
   
    [SignUpIcons.INSTAGRAM]:  {
        icon: IconTypes.INSTAGRAM,
        disabled: true,
    }
}