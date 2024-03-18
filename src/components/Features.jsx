import * as React from 'react';
import {
  vulnerabilities,
  auditSteps,
  remediationPoints,
} from '@/datas/featureData';
import PulseBlockChain from './PulseBlockCompont';

const Features = () => {
  const articles = [
    {
      heading: "CarpeDiem Pension's Flexible, Blockchain-Enabled Future",
      content:
        'CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly, CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one simply needs to install and configure a blockchain wallet.',
      imgSrc: '/assets/Flexible.png',
    },
    {
      heading:
        "CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting",
      content:
        'CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits.Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares.  Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension.',
      imgSrc: '/assets/Challenges.png',
    },
  ];

  return (
    <section className="grid grid-cols-2 px-[15%] text-textBlack max-lg:grid-cols-1 max-lg:px-[6%] max-md:px-2">
      <div className="flex flex-col gap-4">
        <p>
          Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
          self-managed, inclusive, globally portable fund. Unique for its token
          burn mechanism, it ensures a sustainable 4.32% inflation payout. With
          $143.11k and 41.06% of CDP already burned, it serves 35 users
          globally.
        </p>
        <div className="flex flex-col gap-8">
          {articles.map((article, index) => (
            <div className="flex flex-col gap-8" key={article.heading}>
              <h2 className="font-jost font-bold text-3xl">
                {article.heading}
              </h2>
              <p>{article.content}</p>
              <img src={article.imgSrc} alt="Carpe Diem Features" />
            </div>
          ))}
        </div>
        <CarpeDiemAuditProcess />
      </div>
      <div className="mt-20 justify-self-center max-lg:hidden">
        <PulseBlockChain />
      </div>
    </section>
  );
};

export default Features;

const CarpeDiemAuditProcess = () => {
  const AuditStep = ({title, points, idx}) => (
    <section>
      <h3 className="mt-12 w-full text-xl font-semibold leading-7 max-md:mt-10 max-md:max-w-full">{`${
        idx + 1
      }. ${title}`}</h3>
      <ul className="flex flex-col list-inside gap-6 self-center max-md:flex-wrap max-md:max-w-full">
        {points.map((point, index) => (
          <li
            key={index}
            className={`max-md:max-w-full ${
              idx === 1 && index > 0 ? 'ml-10 special-list' : 'ml-4 list-disc'
            }`}>
            {point}
          </li>
        ))}
      </ul>
    </section>
  );

  const Vulnerability = ({title, points, idx}) => (
    <div>
      <h3 className="w-full font-semibold">{`${idx + 1}. ${title}`}</h3>
      <ul className="flex flex-col list-inside">
        {points.map((point, index) => (
          <li key={index} className="ml-4 mt-4">
            {`a. ${point}`}
          </li>
        ))}
      </ul>
    </div>
  );

  const StrategicApproach = () => (
    <section className="">
      <h2 className="mt-12 w-full text-3xl font-bold leading-10 max-md:mt-10 max-md:max-w-full">
        QuillAudits' Strategic Approach to CDP Security Audits
      </h2>
      <p className="mt-12 w-full leading-7 max-md:mt-10 max-md:max-w-full">
        We prioritize threat modeling based on platform-specific risks.
        Security-first, we identify and mitigate vulnerabilities beyond
        functionality testing. Using white-box and black-box tests, we conduct
        thorough vulnerability assessments. Maintaining transparency, we
        communicate openly with the CDP team. Emphasizing clarity, we present
        actionable insights for efficient issue resolution.
      </p>
    </section>
  );

  const AuditDiscoveryandVulnerabilities = () => (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-12">
        <h2 className="w-full text-3xl font-bold leading-10 max-md:mt-10 max-md:max-w-full">
          Comprehensive Audit Discoveries and Remediation Strategies
        </h2>
        <p className=" w-full leading-7 max-md:mt-10 max-md:max-w-full">
          Throughout the audit process, we unearthed a total of 33 issues,
          spanning from minor concerns to critical vulnerabilities. Among these,
          some of the critical issues identified were: Here's how we remediated
          them :
        </p>
      </div>
      {vulnerabilities.map((vulnerability, index) => (
        <Vulnerability
          key={index}
          idx={index}
          title={vulnerability.title}
          points={vulnerability.points}
        />
      ))}
    </section>
  );

  const Remediation = () => (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-12">
        <h2 className="w-full text-3xl font-bold max-md:max-w-full">
          Remediation & Impact:
        </h2>
        <p className="w-full leading-7 max-md:mt-10 max-md:max-w-full">
          All identified vulnerabilities were addressed by the CDP team,
          significantly enhancing the smart contract's security posture. Key
          improvements include
        </p>
      </div>
      <ul className="flex gap-4 flex-col w-full max-md:max-w-full">
        {remediationPoints.map((point, index) => (
          <li
            className="max-md:max-w-full list-inside ml-4 list-disc"
            key={index}>
            {point}
          </li>
        ))}
      </ul>
      <p className="w-full font-semibold max-lg:break-words">
        Embed this tweet :-{' '}
        <a
          href="https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20"
          className="text-[#204ECF]">
          https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20
        </a>
      </p>
      <p className="w-full max-md:max-w-full">
        CDP smart contract audit revealed and fixed critical vulnerabilities,
        safeguarding funds and ensuring platform stability. This underscores the
        need for proactive security in blockchain projects, crucial for
        financial asset management. Through audits and issue resolution, CDP
        reinforces platform security, bolstering user trust.
      </p>
    </section>
  );

  const Testimonial = () => {
    return (
      <article className="flex flex-col pb-4 bg-white shadow-sm">
        <header className="pt-4 relative pr-16 pl-4 rounded bg-[linear-gradient(90deg,#2B4D93_-10.68%,#0E205B_27.98%,#162867_55.94%,#323A87_103.52%)] max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col max-md:ml-0 w-full">
              <div className="flex flex-col w-full text-white max-md:mt-10">
                <img
                  loading="lazy"
                  src="/assets/StartApos.png"
                  alt="Quotation mark icon"
                  className="w-8 aspect-[1.28] fill-white"
                />
                <div className="flex flex-col w-full items-start pl-10 mt-8 max-lg:items-end">
                  <h2 className="text-3xl font-semibold">Sally Radley</h2>
                  <p className="mt-2.5 text-xl">WebGFi - CEO</p>
                </div>
              </div>
            </div>
            <div className="flex absolute -bottom-[35%] right-12 bg-[#204ECF] rounded-lg flex-col aspect-[0.851] w-[24%] max-w-[183px] max-lg:left-12"></div>
          </div>
        </header>
        <div className="flex flex-col pr-4 pl-16 mt-5 w-full text-sm font-jost text-black max-md:pl-5 max-md:max-w-full">
          <div className="flex max-lg:justify-end">
            {Array.from({length: 5}).map((_, index) => (
              <div key={index} className="flex gap-2">
                ⭐
              </div>
            ))}
          </div>
          <p className="mt-8 max-md:max-w-full">
            "It felt like the auditing team was available within a short
            timeframe, which was excellent. The auditing process looked
            thorough, and I really appreciate the fact that you took time to
            investigate GAS optimizations."
          </p>
          <img
            loading="lazy"
            src="/assets/EndApos.png"
            alt="Closing quotation mark icon"
            className="self-end mt-12 w-8 aspect-[1.28] fill-blue-700 max-md:mt-10"
          />
        </div>
      </article>
    );
  };

  return (
    <div className="flex flex-col gap-8 text-black max-w-[647px]">
      <h1 className="w-full text-3xl font-bold leading-10 max-md:max-w-full">
        CarpeDiem Pension's Journey Through our Audit Process
      </h1>
      {auditSteps.map((step, index) => (
        <AuditStep
          key={index}
          idx={index}
          title={step.title}
          points={step.points}
        />
      ))}
      <StrategicApproach />
      <AuditDiscoveryandVulnerabilities />
      <Remediation />
      <Testimonial />
    </div>
  );
};
