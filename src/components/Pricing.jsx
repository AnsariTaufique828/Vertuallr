import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

export const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-10 border border-neutral-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <p className="text-4xl mb-4 font-semibold text-center">
                {option.title}
                {option.title.toLowerCase() === "pro" && (
                  <span className="block text-xl mt-2 bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text">
                    Most Popular
                  </span>
                )}
              </p>
              <p className="text-2xl mb-6 text-center text-neutral-400">
                {option.price}
              </p>
              <ul className="space-y-2 text-lg text-neutral-300">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200-"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
