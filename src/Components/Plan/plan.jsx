import React from 'react';
import Location from '../../assets/Location.png';
import Terrain from '../../terrain.jpg';
import Terrain3 from '../../terrain3.jpg';
import Appart from '../../appart.jpg';


const Plan = ({ language, translations }) => {
  return (
    <div className="bg-[#A58158] text-black py-10 px-5">
      <div className="container mx-auto">

        {/* Plan Overview Header */}
        <h1 className="text-4xl font-bold text-black mb-12 text-center">
          {translations[language].investmentPlanOverview}
        </h1>

        {/* Section 1: Situation and Terrain Data */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#F37021] mb-4">
                {translations[language].locationOverview}
              </h3>
              <p>{translations[language].locationDescription}</p>
              <p>{translations[language].locationBenefits}</p>
            </div>
            <div className="flex justify-center">
              <img src={Location} alt={translations[language].locationOverview} className="rounded-lg shadow-md w-full md:w-3/4"/>
            </div>
          </div>
        </section>

        {/* Section 2: Terrain Data */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-last md:order-first">
              <img src={Terrain} alt={translations[language].terrainData} className="rounded-lg shadow-md w-full md:w-3/4"/>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#F37021] mb-4">
                {translations[language].terrainData}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-white">
                <li>{translations[language].legalStatus}</li>
                <li>{translations[language].area}</li>
                <li>{translations[language].topography}</li>
                <li>{translations[language].infrastructure}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Architectural Option */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#F37021] mb-4">
                {translations[language].architecturalOverview}
              </h3>
              <p>{translations[language].architecturalDescription}</p>
            </div>
            <div className="flex justify-center">
              <img src={Terrain3} alt={translations[language].architecturalOverview} className="rounded-lg shadow-md w-full md:w-3/4"/>
            </div>
          </div>
        </section>

        {/* Section 4: Units Description */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-black mb-6 text-center">
            {translations[language].luxuryUnits}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img src={Appart} alt={translations[language].luxuryUnits} className="rounded-lg shadow-md w-full md:w-3/4"/>
            </div>
            <div className="bg-black p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#F37021] mb-4">
                {translations[language].unitTypes}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-white">
                <li>{translations[language].unitA}</li>
                <li>{translations[language].unitB}</li>
                <li>{translations[language].unitC}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Costs Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-black mb-6 text-center">
            {translations[language].surfaceCosts}
          </h2>

          {/* Responsive container for scrolling on small screens */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white p-6 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-black text-white">
                  <th className="px-2 py-2 text-white text-xs md:text-base">
                    {translations[language].designation}
                  </th>
                  <th className="px-2 py-2 text-xs md:text-base">{translations[language].surface}</th>
                  <th className="px-2 py-2 text-xs md:text-base">{translations[language].costPerSquareMeter}</th>
                  <th className="px-2 py-2 text-xs md:text-base">{translations[language].totalCost}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="border px-2 py-2 text-xs md:text-base">{translations[language].clinic}</td>
                  <td className="border px-2 py-2 text-xs md:text-base">2523</td>
                  <td className="border px-2 py-2 text-xs md:text-base">4500</td>
                  <td className="border px-2 py-2 text-xs md:text-base">11,353,500</td>
                </tr>
                <tr className="border-t">
                  <td className="border px-2 py-2 text-xs md:text-base">{translations[language].hotelSpa}</td>
                  <td className="border px-2 py-2 text-xs md:text-base">2600</td>
                  <td className="border px-2 py-2 text-xs md:text-base">4000</td>
                  <td className="border px-2 py-2 text-xs md:text-base">10,400,000</td>
                </tr>
                <tr className="border-t">
                  <td className="border px-2 py-2 text-xs md:text-base">{translations[language].unitsAB}</td>
                  <td className="border px-2 py-2 text-xs md:text-base">5400</td>
                  <td className="border px-2 py-2 text-xs md:text-base">3500</td>
                  <td className="border px-2 py-2 text-xs md:text-base">18,900,000</td>
                </tr>
                <tr className="border-t">
                  <td className="border px-2 py-2 text-xs md:text-base">{translations[language].villas}</td>
                  <td className="border px-2 py-2 text-xs md:text-base">2580</td>
                  <td className="border px-2 py-2 text-xs md:text-base">5000</td>
                  <td className="border px-2 py-2 text-xs md:text-base">12,900,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Plan;
