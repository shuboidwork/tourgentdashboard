/* eslint-disable import/no-anonymous-default-export */
import RL from "./route-literals";

export default {
  default: '/',
  home: `/${RL.home}`,
  tours: `/${RL.tours}`,
  itinerary: `/${RL.itinerary}`,
  community: `/${RL.community}`,
  website: `/${RL.website}`,
  settings: `/${RL.settings}`,
  leads: `/${RL.tours}/${RL.leads}`,
  lead: `/${RL.tours}/${RL.leads}/${RL.varLead}`,
  signIn: `/${RL.signIn}`,
  upcomingCalls: `/${RL.tours}/${RL.upcomingCalls}`,
  pendingItins: `/${RL.tours}/${RL.pendingItins}`,
  pendingPayments: `/${RL.tours}/${RL.pendingPayments}`,
  leadItinerary: `/${RL.tours}/${RL.leads}/${RL.varLead}/${RL.itinerary}`,
};
