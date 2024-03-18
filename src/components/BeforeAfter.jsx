import * as React from 'react';
import PulseBlockChain from './PulseBlockCompont';

const BeforeAfterComparison = () => {
  const comparisonData = [
    {
      title: 'Before QuillAudits',
      points: [
        'Exploits like reentrancy and front-running can let attackers withdraw extra funds and manipulate transaction timing for unfair gains',
        "Vulnerabilities could allow users to mint CDP tokens or pension shares indefinitely, disrupting the system's economic balance.",
      ],
    },
    {
      title: 'After QuillAudits',
      points: [
        'Implementation of reentrancy protection mechanisms.',
        'Ensure precision in decimal handling with standard libraries, recalculate accurately, fix logic errors, and secure referral systems against exploitation.',
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-16 mb-12 text-sm text-textBlack px-[20%] max-lg:px-[6%]">
      <div className="flex gap-5 mt-16 justify-center items-start max-lg:flex-col max-lg:gap-12">
        {comparisonData.map((item, index) => (
          <React.Fragment key={index}>
            <article className="flex flex-col">
              <h2
                className={`pb-1.5 text-xl font-bold font-inter leading-8 ${
                  item.title == 'Before QuillAudits'
                    ? 'bg-[#FFABC9]'
                    : 'bg-[#ABCDFF]'
                }`}>
                {item.title}
              </h2>
              <div className="flex flex-col justify-around gap-4">
                {item.points.map((point, pointIndex) => (
                  <p key={pointIndex} className="font-poppins">
                    {point}
                  </p>
                ))}
              </div>
            </article>
            {index === 0 && (
              <div className="shrink-0 w-px border-l border-solid border-[#E0E0E4] h-[250px] max-lg:hidden" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center lg:hidden">
        <PulseBlockChain />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl max-w-[70%] text-center font-semibold font-jost text-trustedHeading">
          See how QuillAudits is a trusted partner in 1000+ Audit stories
        </h2>
        <button className="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 hover:bg-gradient-to-bl font-jost text-white font-medium w-[20%] min-w-[200px] py-2 px-4 rounded">
          Request An Audit
        </button>
      </div>
    </section>
  );
};

export default BeforeAfterComparison;
