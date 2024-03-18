import * as React from 'react';

const PulseBlockChain = () => {
  return (
    <div className="flex flex-col gap-4 font-inter text-xs items-start w-[300px] px-4 py-2 rounded-md border border-[#5580DB] border-solid shadow-pulseblock bg-white bg-opacity-0 ">
      <div className="flex flex-col gap-1">
        <h3 className="text-[#808080]">Headquarters</h3>
        <p className="font-medium text-textBlack">Switzerland</p>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[#808080]">Chain</h3>
        <p className="font-medium text-textBlack">Pulse Blockchain</p>
      </div>
    </div>
  );
};

export default PulseBlockChain;
