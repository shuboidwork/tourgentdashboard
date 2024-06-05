
/** @type {import('next').NextConfig} */
  
const RL = {
  home: "home",
  tours: "tours",
  leads: "leads",

}
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
          {
            source: '/',
            destination: `/${RL.home}`,
            permanent: false,
          },
          {
            source: `/${RL.tours}`,
            destination: `/${RL.tours}/${RL.leads}`,
            permanent: false,
          },
        ]
      },
};

export default nextConfig;

