// pricingData.ts

export interface PricingPlan {
    title: string;
    price: string;
    features: string[];
}

const pricingData: PricingPlan[] = [
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
            "Energy commission approval"],
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
        title: "Commercial",
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
       
    }
];

export default pricingData;
