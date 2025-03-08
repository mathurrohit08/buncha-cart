
import React from "react";

// Industry logos array
const industryLogos = [
  {
    name: "TechGiant",
    logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "GlobalCorp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "Innovatech",
    logo: "https://images.unsplash.com/photo-1596746225586-7edce3c60dd8?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "FutureSolutions",
    logo: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "PrimeSystems",
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "NextLevel",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "MegaCorp",
    logo: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=150&h=150&fit=crop&auto=format",
  },
  {
    name: "EliteInc",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=150&fit=crop&auto=format",
  },
];

// Duplicate logos to create a seamless scrolling effect
const duplicatedLogos = [...industryLogos, ...industryLogos];

export const IndustryTrust: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
          Trusted by Industry Leaders
        </h2>
        
        <div className="relative">
          {/* First row scrolling left */}
          <div className="industry-trust-scroll">
            <div className="industry-trust-scroll-inner flex">
              {duplicatedLogos.map((company, index) => (
                <div key={`${company.name}-${index}`} className="mx-8 flex-shrink-0">
                  <div className="h-20 w-20 rounded-full bg-white p-2 shadow-sm mx-auto">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-full w-full object-contain rounded-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&h=150";
                      }}
                    />
                  </div>
                  <p className="text-center text-sm mt-2 dark:text-gray-300">{company.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Second row scrolling right with different logos */}
          <div className="industry-trust-scroll mt-10">
            <div className="industry-trust-scroll-inner flex animate-[scroll_35s_linear_infinite_reverse]">
              {[...duplicatedLogos].reverse().map((company, index) => (
                <div key={`${company.name}-rev-${index}`} className="mx-8 flex-shrink-0">
                  <div className="h-20 w-20 rounded-full bg-white p-2 shadow-sm mx-auto">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-full w-full object-contain rounded-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=150&h=150";
                      }}
                    />
                  </div>
                  <p className="text-center text-sm mt-2 dark:text-gray-300">{company.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
