// pricingData.ts

export interface PricingPlan {
    title: string;
    price: string;
    description: string;
    features: string[];
    icon: JSX.Element; // Accepts SVG icons
}

const pricingData: PricingPlan[] = [
    {
        title: "Startup",
        price: "$9,99/month",
        description: "Perfect for individuals or startups",
        features: [
            "10 hours of support",
            "128MB of storage",
            "2048MB bandwidth",
            "Subdomain included"
        ],
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto fill-stroke text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        )
    },
    {
        title: "Corporate",
        price: "$12,99/month",
        description: "Perfect for teams up to 12 people",
        features: [
            "10 hours of support",
            "1024MB of storage",
            "4GB bandwidth",
            "Domain included"
        ],
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto fill-stroke text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
            </svg>
        )
    },
    {
        title: "Enterprise",
        price: "$19,99/month",
        description: "Perfect for large scale teams",
        features: [
            "10 hours of support",
            "10GB of storage",
            "100GB bandwidth",
            "Domain included"
        ],
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto fill-stroke text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
            </svg>
        )
    }
];

export default pricingData;
