import React from "react";
import pricingData, { PricingPlan } from "./pricingData";

function PricingPlanComponent({ plan }: { plan: PricingPlan }) {
  return (
    <div id="pricing">
      <div className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
        <div className="w-full py-5 border-b border-gray-800">
          <h2 className="font-bold text-3xl">{plan.title}</h2>
          <h3 className="font-normal text-primary text-xl mt-2">
            {plan.price}
          </h3>
        </div>
        <div className="">
          <div className="leading-8 mb-10 text-lg font-light">
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="w-full mt-10 px-6">
              <button className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded w-32 h-10">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <div className="max-w-screen-xl container antialiased w-full h-full text-gray-400 font-inter p-10 mx-auto">
      <div>
        <div id="title" className=" my-10">
          <h1 className=" text-3xl text-white">
            Pricing <span className="text-primary">plans</span>
          </h1>
          <p className="text-light  text-1xl">Here are our pricing plans</p>
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
