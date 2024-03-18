import * as React from 'react';

const NewsletterSection = () => {
  const formFields = [
    {
      id: 'email',
      type: 'email',
      placeholder: 'vitalik@ethereum.org',
      ariaLabel: 'Enter your email',
    },
  ];

  return (
    <section className="flex justify-between items-center px-[15%] pt-9 pb-14 w-full max-lg:px-[6%] max-md:px-2 max-lg:flex-col">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold tracking-tight text-blue-500 font-inter max-lg:hidden">
          NEWSLETTER
        </h2>
        <h3 className="mt-14 mb-8 text-black tracking-tight font-jost relative lg:text-sky-900 lg:text-[40px] lg:mb-0">
          Security First News Letter by QuillAudits
          <span className="absolute bottom-0 left-[50%] -translate-x-[50%] w-20 bg-[#2D83EE] h-0.5 rounded-sm lg:hidden"></span>
        </h3>
        <p className="mt-11 w-[70%] text-sm tracking-normal leading-6 text-gray-700 font-inter max-lg:hidden">
          Subscribe for the most Exclusive Weekly security based newsletter and
          covering all the recent hacks up to date.
        </p>
      </div>
      <div className="flex w-full flex-col gap-6 items-end max-lg:items-center">
        <img
          loading="lazy"
          src="/assets/Newsletter.png"
          alt="Newsletter cover image"
          className="w-full max-h-[30%] "
        />

        <p className="w-[50%] text-black text-xs lg:hidden">
          DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight to
          your Inbox. Explore our weekly newsletter:{' '}
          <span className="font-semibold text-[#2D83EE]">HashingBits.</span>{' '}
          Stay updated on everything we’re publishing. Stand a step ahead.
        </p>
        <NewsletterForm fields={formFields} />
      </div>
    </section>
  );
};

export default NewsletterSection;

const NewsletterForm = ({fields}) => {
  return (
    <form className="flex items-center gap-5 py-2 pr-2 pl-4 max-w-[90%] shadow-input bg-white rounded-md w-[500px] max-lg:flex-col max-lg:gap-6 max-lg:shadow-none">
      {fields.map((field) => (
        <React.Fragment key={field.id}>
          <label htmlFor={field.id} className="sr-only">
            {field.ariaLabel}
          </label>
          <input
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            aria-label={field.ariaLabel}
            className="flex w-[80%] lg:flex-1 my-auto text-zinc-500 focus:outline-none max-lg:border-[0.5px] max-lg:border-[#5A5A5A] max-lg:shadow-inputMd max-lg:p-2"
          />
        </React.Fragment>
      ))}
      <button
        type="submit"
        className="bg-gradient-to-br from-[#2D83EE] via-indigo-500 to-purple-600 hover:bg-gradient-to-bl justify-center px-6 py-3 font-medium text-white rounded max-lg:w-[50%] max-lg:self-center">
        Subscribe
      </button>
    </form>
  );
};
