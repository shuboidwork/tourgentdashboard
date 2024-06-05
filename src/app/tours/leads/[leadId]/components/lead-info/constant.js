import { IconTypes } from "@/app/facts/icon-list";

export const LeadInfoSections = {
  ABOUT: "About",
  TRAVEL_PREF: "Travel Preferences",
  CONTACT: "Contact",
};
export const LeadInfoProperties = {
  NAME: "name",
  GENDER: "gender",
  AGE: "age",
  WORK: "work",
  DESTINATION: "destination",
  VACATION_TYPE: "vacation_type",
  TRAVEL_TYPE: "travel_type",
  DIETARY: "dietary",
  EMAIL: "email",
  PHONE: "phone",
};

export const LeadInfoSectionNamePropsMapping = {
  [LeadInfoSections.ABOUT]: [
    LeadInfoProperties.NAME,
    LeadInfoProperties.GENDER,
    LeadInfoProperties.AGE,
    LeadInfoProperties.WORK,
  ],
  [LeadInfoSections.TRAVEL_PREF]: [
    LeadInfoProperties.DESTINATION,
    LeadInfoProperties.VACATION_TYPE,
    LeadInfoProperties.TRAVEL_TYPE,
    LeadInfoProperties.DIETARY,
  ],
  [LeadInfoSections.CONTACT]: [
    LeadInfoProperties.EMAIL,
    LeadInfoProperties.PHONE,
  ],
};

export const LeadInfoPropertiesIconMapping = {
    [LeadInfoProperties.NAME]: IconTypes.ACCOUNT_CIRCLE_OL,
    [LeadInfoProperties.GENDER]: IconTypes.GIRL_OL,
    [LeadInfoProperties.AGE]: IconTypes.REFRESH_OL,
    [LeadInfoProperties.WORK]: IconTypes.WORK_OL,
    [LeadInfoProperties.EMAIL]: IconTypes.EMAIL_OL,
    [LeadInfoProperties.PHONE]: IconTypes.CALL_OL,
    [LeadInfoProperties.DESTINATION]: IconTypes.LOCATION_OL,
    [LeadInfoProperties.VACATION_TYPE]: IconTypes.ALL_INCLUSIVE_OL,
    [LeadInfoProperties.TRAVEL_TYPE]: IconTypes.SOLO,
    [LeadInfoProperties.DIETARY]: IconTypes.FAST_FOOD_OL,
}