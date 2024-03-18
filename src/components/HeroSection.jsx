import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center gap-4 items-start hero-section h-[calc(100vh-4.85rem)] w-full bg-hero bg-repeat bg-cover pl-[15%] pr-[6%] max-xl:pl-[6%] max-xl:pr-[2%] max-lg:p-0 max-md:justify-between">
      <div className="flex justify-center gap-6 items-center max-lg:flex-col">
        <h3 className="text-lg self-start border-b-2 border-blue-500 w-fit hidden max-lg:block max-lg: max-lg:ml-[6%] max-md:ml-2 max-lg:pt-20">
          Case Studies
        </h3>
        <div className="flex flex-col relative justify-center w-full aspect-[30/29] max-h-[60vh] items-center bg-gradient-to-br from-black to-carpegreen max-lg:aspect-[30/24] lg:min-h-[480px]">
          <img
            className="w-[70%] max-lg:[40%]"
            src="/assets/CDPension.png"
            alt="Carpe Diem is a pension based on Blockchain"
          />
          <p className="text-xs w-[65%] absolute bottom-10 left-8 max-lg:hidden">
            Carpe Diem Pension, a blockchain-based retirement fund, offers
            permanent payouts through CDP deposits, with a 4.32% annual
            inflation claimable by depositors.
          </p>
          <div className="bg-white rounded-lg absolute px-6 py-3 lg:top-4 lg:-right-12 max-lg:right-12 max-lg:-bottom-6 ">
            <img
              className="w-[7rem]"
              src="/assets/CDPension-black.png"
              alt="Carpe Diem is a pension based on Blockchain"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 max-lg:px-[6%] max-lg:pb-2 max-md:px-2 max-lg:mt-20">
          <h2 className="font-jost font-medium text-4xl">
            Securing Trust : Boosting Security and Strengthening Trust at Carpe
            Diem Pension
          </h2>
          <p className="text-lg">
            QuillAudits enhances Carpe Diem Pension by addressing 33
            vulnerabilities on the Pulse blockchain, boosting security and user
            trust in digital pensions.
          </p>
        </div>
      </div>
      <div className="cursor-pointer pb-8 pr-[6%] max-lg:pl-[6%] max-md:pl-2">
        {`QuillAudits  --> Resources -->`} <span>Case Studies</span>
      </div>
    </section>
  );
};

export default HeroSection;
