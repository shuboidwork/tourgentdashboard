/* eslint-disable import/no-anonymous-default-export */
import RL from "./route-literals";

export default {
  home: `/${RL.home}`,
  tours: `/${RL.tours}`,
  itinerary: `/${RL.itinerary}`,
  community: `/${RL.community}`,
  website: `/${RL.website}`,
  settings: `/${RL.settings}`,
  leads: `/${RL.tours}/${RL.leads}`,
  lead: `/${RL.tours}/${RL.leads}/${RL.varLead}`,
};
