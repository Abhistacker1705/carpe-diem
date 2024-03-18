import * as React from 'react';
import {RiTwitterXFill} from 'react-icons/ri';
import {
  FaLinkedin,
  FaRedditAlien,
  FaMedium,
  FaDiscord,
  FaYoutube,
  FaEnvelope,
  FaLocationDot,
} from 'react-icons/fa6';
import {FaTelegramPlane} from 'react-icons/fa';

const CopyRight = () => {
  return (
    <div className="flex gap-5 max-md:flex-wrap max-lg:justify-center">
      <img
        loading="lazy"
        src="/assets/Defi.png"
        alt="Quillhash logo"
        className="shrink-0 max-w-full aspect-[3.57] w-[213px]"
      />
      <img
        loading="lazy"
        src="/assets/Telengana.png"
        alt="Quillhash logo"
        className="shrink-0 max-w-full aspect-[3.23] w-[194px]"
      />
    </div>
  );
};

const QuillEcosystem = () => {
  const ecosystemItems = [
    {name: 'QuillAI', link: '#'},
    {name: 'QuillCheck', link: '#'},
    {name: 'QuillShield', link: '#'},
    {name: 'QuillAcademy', link: '#'},
    {name: 'QuillMonitor', link: '#'},
    {name: 'Web3Suggest', link: '#'},
    {name: 'Explore All Tools', link: '#'},
  ];

  return (
    <div className="flex flex-col max-md:mt-10">
      <h3 className="text-lg border-b-2 border-blue-500 w-fit">
        Quill Ecosystem
      </h3>
      <div className="flex flex-col gap-4 mt-4 text-white">
        {ecosystemItems.map((item, index) => (
          <div className="cursor-pointer text-sm hover:underline" key={index}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const OtherServices = () => {
  const otherServicesItems = [
    'Red Teaming',
    'dApp Pentesting',
    'DeFi Diligence',
    'NFT Due Diligence',
    'Rug Pull Due Diligence',
    'Security Consultation',
    'Blockchain Forensics',
    'KYC (Know Your Customer)',
  ];

  return (
    <div className="flex flex-col">
      <h3 className="text-lg border-b-2 border-blue-500 w-fit">
        Other Services
      </h3>
      <div className="flex flex-col gap-4 mt-4 text-white">
        {otherServicesItems.map((item, index) => (
          <div className="cursor-pointer text-sm hover:underline" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const QuickLinks = () => {
  const quickLinksItems = [
    'Pricing',
    'Audit Process',
    'Our Audits',
    'Testimonials',
    'Security Synopsis',
    'Blog',
    'Clients',
    'Careers',
  ];

  return (
    <div className="flex flex-col">
      <h3 className="text-lg border-b-2 border-blue-500 w-fit">Quick Links</h3>
      <div className="flex flex-col gap-4 mt-4 text-white">
        {quickLinksItems.map((item, index) => (
          <div className="cursor-pointer text-sm hover:underline" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const OurProgrammes = () => {
  const programmeItems = [
    'Refer-Earn-Secure',
    'WAGSI Grants',
    'Ambassador Program',
    'Partnership Program',
  ];

  return (
    <div className="flex flex-col">
      <h3 className="text-lg border-b-2 border-blue-500 w-fit max-lg:hidden">
        Our Programmes
      </h3>
      <div className="flex gap-4 mt-8 text-white max-lg:grid grid-cols-2">
        {programmeItems.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer text-center text-sm bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 hover:bg-gradient-to-bl justify-center self-start px-6 py-3.5 whitespace-nowrap rounded shadow-md max-md:px-2">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const BlockchainAuditList = () => {
  const blockchainAuditItems = [
    'Ethereum Audit',
    'Polygon Audit',
    'BSC Audit',
    'Solana Audit',
    'NEAR Audit',
    'Algorand Audit',
    'Tezos Audit',
    'Hyperledger Fabric Audit',
    'L1 Audit',
    'Polkadot Audit',
    'Wallet Audit',
    'ZkSync Audit',
    'Starknet Audit',
  ];

  return (
    <div className="flex flex-col max-md:mt-10">
      <h3 className="text-lg border-b-2 border-blue-500 w-fit">
        Audit Services
      </h3>
      <div className="flex flex-col gap-4 mt-4 text-white">
        {blockchainAuditItems.map((item, index) => (
          <div className="cursor-pointer text-sm hover:underline" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-between font-medium text-zinc-100 max-md:mt-10">
      <div>
        <h3 className="text-lg border-b-2 border-blue-500 w-fit">
          More About Quill
        </h3>
        <div className="flex flex-col gap-4 text-sm mt-4">
          <p className="cursor-pointer hover:underline">About Us</p>
          <p className="cursor-pointer hover:underline">FAQs</p>
          <p className="cursor-pointer hover:underline">Blockchains We Audit</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg">Contact Us:</h2>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-2 items-center font-normal">
            <FaEnvelope />
            <a
              href="mailto:audits@quillhash.com"
              className="flex text-sm italic underline">
              audits@quillhash.com
            </a>
          </div>
          <div className="flex gap-2 items-center font-normal">
            <FaTelegramPlane />
            <a
              href="https://t.me/quillaudits"
              className="flex text-sm italic underline">
              t.me/quillaudits
            </a>
          </div>
        </div>
      </div>
      <section>
        <h2 className="flex items-center gap-1">
          <FaLocationDot />
          <span className="flex-auto my-auto">Our Location:</span>
        </h2>
        <p className="mt-4 text-sm font-normal">
          Office 104/105 Level 1, <br />
          Emaar Square, Building 4<br />
          Sheikh Mohammed Bin Rashid <br />
          Boulevard Downtown Dubai, <br />
          United Arab Emirates <br />
          P.O box: 416654
        </p>
      </section>
    </div>
  );
};

const SocialMedias = () => {
  const IconMap = [
    <RiTwitterXFill size={18} />,
    <FaLinkedin size={18} />,
    <FaTelegramPlane size={18} />,
    <FaRedditAlien size={18} />,
    <FaMedium size={18} />,
    <FaDiscord size={18} />,
    <FaYoutube size={18} />,
  ];

  return (
    <div className="flex items-center gap-4">
      {IconMap.map((component, index) => (
        <React.Fragment key={index}>{component}</React.Fragment>
      ))}
    </div>
  );
};

const QuillFooter = () => {
  return (
    <div className="flex bg-hero bg-cover overflow-hidden relative flex-col items-center px-16 pt-9 pb-14 w-full max-md:px-2">
      <img
        loading="lazy"
        src="/assets/QuillFooterLogo.png"
        alt="Quillhash logo"
        className="self-start aspect-[4] w-[17.5%] min-w-[180px] mb-8"
      />

      <div className="flex justify-between w-full max-lg:flex-col-reverse">
        <div className="flex w-full gap-[20%]">
          <ContactInfo />
          <div className="max-lg:hidden">
            <BlockchainAuditList />
          </div>
        </div>
        <div className="flex flex-col gap-12 justify-between max-lg:flex-col-reverse">
          <div className="flex justify-center gap-16 max-lg:justify-between max-lg:grid max-lg:grid-cols-2 max-lg:place-content-between">
            <div className="lg:hidden">
              <BlockchainAuditList />
            </div>
            <QuillEcosystem />
            <OtherServices />
            <QuickLinks />
          </div>
          <OurProgrammes />
        </div>
      </div>
      <div className="flex w-full justify-between items-center py-8 border-b-2 border-[#FFFFFF0A] max-lg:flex-col max-lg:gap-8">
        <CopyRight />
        <SocialMedias />
      </div>
      <div className="flex gap-4 w-full justify-between items-center py-8 max-lg:flex-col-reverse">
        <p className="text-xs">
          All Rights Reserved. © Copyright 2023. QuillAudits - LLC
        </p>
        <p className="text-xs">Privacy Policy</p>
      </div>
    </div>
  );
};

export default QuillFooter;
