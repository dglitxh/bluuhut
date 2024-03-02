// pricingData.ts

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

export const pricingData: PricingPlan[] = [
  {
    title: "Residential",
    price: "$25/month",
    features: [
      " Energy audit",
      "Panel inspections",
      "Safety inspections",
      "Earth testing",
      " Leakage tracing",
      "Continuity test",
      "Insulation resistance test",
      "Energy commission approval",
    ],
  },
  {
    title: "Commercial",
    price: "$50/month",
    features: [
      "Monthly energy audit",
      "Monthly safety inspections",
      "Panel inspection and upgrades",
      "Earth testing",
      "Leakage tracing",
      "Continuity test",
      "Insulation resistance test",
      "Energy commission certification and approval",
    ],
  },
  {
    title: "Enterprice",
    price: "$100/month",
    features: [
      "Monthly energy audit",
      "Monthly safety inspections",
      "Panel inspection and upgrades",
      "Earth testing",
      "Leakage tracing",
      "Continuity test",
      "Insulation resistance test",
      "Energy commission certification and approval",
    ],
  },
];


export const serviceData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
      </svg>
    ),
    title: "Electrical Solutions:",
    description:
      "From circuit design to power systems analysis, our electrical engineering team provides comprehensive solutions to meet your electrical needs. Whether youre seeking to optimize energy efficiency, enhance system reliability, or develop cutting-edge electronic devices, we have the expertise to deliver results that exceed your expectations.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
    title: "Telecom Solutions:",
    description:
      "Our telecom engineering services cover a wide range of specialties, including network design, optimization, and deployment. Whether youre a telecommunications provider, a corporate enterprise, or a government agency, our telecom experts can help you navigate the complexities of modern communication infrastructure to ensure seamless connectivity and reliable performance.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Handyman Services:",
    description:
      "In addition to our specialized engineering offerings, we also provide handyman services for general maintenance and repair work. Whether its fixing leaky faucets, installing shelves, or painting walls, our skilled handymen are ready to tackle a wide range of tasks to keep your property in top condition.",
  },
];

