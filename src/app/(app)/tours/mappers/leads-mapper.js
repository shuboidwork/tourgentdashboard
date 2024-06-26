import {getXDaysFutureDate } from "@/app/utils/date-utils";
import { DietaryPreferenceLabelMap, GroupTypesLabelMap, LeadStatusesIds, LeadStatusesLabelMap, VacationTypeLabelMap } from "../facts/leads-metadata";
import { LeadInfoProperties } from "../components/lead-info/constants";
export const mapIncomingLeadData = ({
  data,
  status,
  lead_profile,
  store_customer,
  id,
  store: storeId,
  itinerary: itineraryId
}) => {
  const { destination } = data;
  const { first_name, last_name, email, phone } = store_customer;
  const {
    number_of_days,
    number_of_people,
    dietary_preference,
    hotel_category, //'air_bnbs',3_star
    occasion, // 'vacation',
    vacation_type, // 'mixed', all_famous
    passions, //[Array],
    private_transfers, // false,
    visa_status, // 'not_required',
    visa_required,
    group_type,
  } = lead_profile;

  return {
    id,
    storeId,
    itineraryId,
    [LeadInfoProperties.NAME]: first_name + " " + last_name,
    [LeadInfoProperties.EMAIL]: email,
    [LeadInfoProperties.PHONE]: phone,
    days: number_of_days,
    people: number_of_people,
    [LeadInfoProperties.DIETARY]: DietaryPreferenceLabelMap[dietary_preference] || dietary_preference,
    status: LeadStatusesLabelMap[LeadStatusesIds[status]] || "",
    startDate: getXDaysFutureDate(30),
    endDate: getXDaysFutureDate(30 + number_of_days),
    [LeadInfoProperties.GROUP_TYPE]: GroupTypesLabelMap[group_type] || group_type,
    [LeadInfoProperties.GENDER]: "Male",
    [LeadInfoProperties.AGE]: "30",
    [LeadInfoProperties.WORK]: "Developer",
    [LeadInfoProperties.DESTINATION]: destination,
    [LeadInfoProperties.VACATION_TYPE]: VacationTypeLabelMap[vacation_type] || vacation_type,
  };
};
