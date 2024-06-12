import React from "react";
import { pricingData, PricingPlan } from "../utils/data";
import { Button } from "@nextui-org/react";

function PricingPlanComponent({ plan }: { plan: PricingPlan }) {
  return (
    <div id="pricing">
      <div className="rounded-lg overflow-hidden w-full transform hover:shadow-1xl hover:scale-105 transition duration-100 ease-in">
        <div className="w-full py-5 border-b ">
          <h2 className="font-semibold text-2xl">{plan.title}</h2>

          <h3 className="font-normal text-primary text-xl mt-2">
            {plan.price}
          </h3>
        </div>
        <div className="">
          <div className="leading-8 mb-10 text-md font-light">
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <svg
                    className="w-6 h-6 inline-block mr-2 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="w-full mt-10 px-3">
              <Button color="secondary" variant="flat">
                subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <div className="max-w-screen-xl container antialiased w-full h-full  font-inter p-10 mx-auto">
      <div>
        <div id="title" className=" my-10">
          <h1 className="font-semibold text-3xl ">
            Pricing <span className="text-primary">Plans</span>
          </h1>
          <p className="text-light  ">Here are our pricing plans</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
          {pricingData.map((plan, index) => (
            <PricingPlanComponent key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
