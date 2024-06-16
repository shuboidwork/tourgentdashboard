
/** @type {import('next').NextConfig} */

  
const RL = {
  home: "home",
  tours: "tours",
  leads: "leads",
  varLead: ":leadId",
  itinerary: "itinerary",
}
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
          {
            source: '/',
            destination: `/${RL.tours}`,
            permanent: false,
          },
          {
            source: `/${RL.tours}`,
            destination: `/${RL.tours}/${RL.leads}`,
            permanent: false,
          },
          {
            source: `/${RL.tours}/${RL.leads}/${RL.varLead}`,
            destination: `/${RL.tours}/${RL.leads}/${RL.varLead}/${RL.itinerary}`,
            permanent: false,
          },
        ]
      },
};

export default nextConfig;

